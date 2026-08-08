import { NextRequest, NextResponse } from 'next/server';

// Robust Domain Validation
const validateDomain = (url: string) => {
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(?:\/.*)?$/;
  return url.match(domainRegex);
};

// Simulation Helper
const generateSimulatedData = (domain: string) => {
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = (hash << 5) - hash + domain.charCodeAt(i);
    hash |= 0;
  }
  const seed = Math.abs(hash);
  
  const performance = 65 + (seed % 30); 
  const seo = 70 + (seed % 25); 
  const mobile = 75 + (seed % 20); 
  const score = Math.floor((performance + seo + mobile) / 3);
  
  const possibleIssues = [
    "Incomplete Meta Descriptions",
    "Unoptimized Hero Assets (>500KB)",
    "Suboptimal LCP (Largest Contentful Paint)",
    "Missing Alt-Text Architecture",
    "Unminified Core Scripting Bundle",
    "Critical Render-Blocking Strategy",
    "High CLS (Cumulative Layout Shift)",
    "Missing Semantic OpenGraph Schema",
    "Latency in Initial Server Handshake",
    "Redundant CSS Component Load",
    "Low AI-Relevance Content Ratio"
  ];

  const details: string[] = [];
  const available = [...possibleIssues];
  for (let i = 0; i < 3; i++) {
    const idx = (seed + i) % available.length;
    details.push(available[idx]);
    available.splice(idx, 1);
  }

  return {
    score,
    performance,
    seo,
    mobile,
    warnings: 3 + (seed % 8),
    opportunities: 8 + (seed % 12),
    details,
    isSimulated: true
  };
};

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || !validateDomain(url)) {
      return NextResponse.json({ error: 'Please enter a valid domain name' }, { status: 400 });
    }

    const match = validateDomain(url);
    const domain = match ? match[1] : url;
    let targetUrl = `https://${domain}`;

    const pagespeedKey = process.env.PAGESPEED_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    let results: any = null;

    // Try Google PageSpeed first
    try {
      const pagespeedUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&category=PERFORMANCE&category=SEO&category=ACCESSIBILITY${pagespeedKey ? `&key=${pagespeedKey}` : ''}`;
      const psResponse = await fetch(pagespeedUrl, { next: { revalidate: 3600 } });
      const psData = await psResponse.json();

      if (psResponse.ok && psData.lighthouseResult) {
        const lighthouse = psData.lighthouseResult;
        const categories = lighthouse.categories;

        results = {
          score: Math.round((categories.performance.score + categories.seo.score + categories.accessibility.score) / 3 * 100),
          performance: Math.round(categories.performance.score * 100),
          seo: Math.round(categories.seo.score * 100),
          mobile: Math.round(categories.accessibility.score * 100),
          warnings: Object.values(lighthouse.audits).filter((audit: any) => audit.score !== null && audit.score < 0.9).length,
          opportunities: Object.values(lighthouse.audits).filter((audit: any) => audit.details?.type === 'opportunity').length,
          details: Object.values(lighthouse.audits)
            .filter((audit: any) => audit.score !== null && audit.score < 0.5)
            .slice(0, 3)
            .map((audit: any) => audit.title),
          isSimulated: false
        };
      } else {
        // Handle Quota exceeded or other API errors by falling back
        console.warn('PageSpeed API Limit/Error, falling back to simulation:', psData.error?.message);
        results = generateSimulatedData(domain);
      }
    } catch (err) {
      console.error('PageSpeed connection error, falling back to simulation:', err);
      results = generateSimulatedData(domain);
    }

    // OpenAI NLP Analysis (works with real OR simulated data)
    if (openaiKey && results) {
      try {
        const aiPrompt = `You are an elite SEO & Conversion NLP Agent for Bytesool. 
        Analyze these ${results.isSimulated ? 'Simulated' : 'Real-time'} results for the domain "${domain}":
        - Performance: ${results.performance}/100
        - SEO: ${results.seo}/100
        - UX Score: ${results.mobile}/100
        - Key Concerns: ${results.details.join(', ')}

        Provide exactly 3 strategic "Audit Details" (short, punchy phrases) and a 1-sentence "AI Recommendation" for a recovery roadmap.
        Format as JSON: { "details": ["phrase1", "phrase2", "phrase3"], "roadmap": "sentence" }`;

        const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: aiPrompt }],
            response_format: { type: "json_object" }
          })
        });

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          const aiContent = JSON.parse(aiData.choices[0].message.content);
          if (aiContent.details) results.details = aiContent.details;
          results.aiRoadmap = aiContent.roadmap;
        }
      } catch (aiErr) {
        console.error('OpenAI Error:', aiErr);
      }
    }

    return NextResponse.json(results);
  } catch (error: any) {
    console.error('SEO Audit Fatal Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
