import React from 'react';
import '../App.css';

const blogPosts = [
  {
    id: 1,
    title: 'Considering Japan: A Shifting Investment Landscape',
    date: '14/12/2023',
    content: [
      'The stagnation of the Nikkei 225 over nearly 40 years has, understandably, deterred investors from Japan. Periods of deflation, negative interest rates, and yield curve control (YCC) have all dampened growth prospects. Coupled with an aging population, the investment case for Japan seems bleak. However, some recent changes suggest a more nuanced view.',
      'Reforms in corporate governance, Nippon Individual Savings Account (NISA) incentives, and signs of inflation are all potentially compelling factors. First, the Tokyo Stock Exchange (TSE) is prioritising shareholder returns by pushing companies to increase their price-to-book (P/B) ratios, particularly for those below 1. Some companies have responded by using excess cash for buybacks (see Citizen, for example). In addition, the enhancements to NISAs, including indefinite tax exemptions and an increased annual limit (roughly £16,000), could stimulate retail investment.',
      'Currently, about 50% of Japanese assets are held in cash, compared to 13% in the US and 31% in the UK. A shift toward equities could occur if domestic investors begin favouring Japanese stocks. However, sentiment toward domestic equities remains low, particularly when compared to the US market’s returns. Critics argue that Japanese households may prefer yen-denominated S&P 500 trackers, often in the form of NISA-eligible ETFs, rather than domestic equities.',
      'Inflation has been driven by yen devaluation and rising commodity prices, this doesn’t necessarily indicate a fundamental economic shift. The upcoming Shunto wage negotiations in March 2024, in which workers are expected to demand wage growth to offset eroding purchasing power, will be critical for the country’s economic outlook.',
      'One major concern remains: Japan’s aging population. As the demographic shift accelerates and the population declines, productivity concerns will likely become more pronounced. Historically slow to adopt new technology, Japan may face delays in artificial intelligence (AI) adoption unless businesses become more agile. That said, COVID-19 did accelerate tech adoption within traditional organisations, potentially changing mindsets.',
      'On the other hand, Japan’s leadership in automation could make its businesses key beneficiaries of AI-driven process improvements, potentially boosting productivity in the short term.'
    ],
    conclusion: 'Conclusion: Overweight Japan, with Compelling Short- to Medium-Term Drivers'
  },
  {
    id: 2,
    title: 'Test',
    date: '15/09/2024',
    content: [
      'Para 1',
      'Para 2',
      'Para 3'
    ],
    conclusion: 'Test'
  }
];

const Blog = () => {
  return (
    <section className="blog-section">
      {blogPosts.map((post) => (
        <div className="blog-post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <h3>{post.conclusion}</h3>
        </div>
      ))}
    </section>
  );
};

export default Blog;