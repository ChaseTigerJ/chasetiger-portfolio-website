/* ===== tigOS content: every fact below comes from Chase's resume (Aug 2026) or Figma portfolio PDF ===== */
var TIG = {
  person: {
    name: 'Chase Johnston',
    handle: 'chasetiger',
    title: 'Marketing Manager',
    tagline: 'Product Marketing, GTM & Growth',
    company: 'Amazon',
    org: 'Amazon Grocery & Whole Foods Market',
    location: 'New York, NY',
    summary: 'Marketing manager with 5+ years of experience across small-business, product, and customer marketing. Built marketing programs for local businesses, supported the launch of Apple Business Essentials, and created the marketing for Amazon\u2019s Emerging Brands initiative. Now own tech and AI marketing for Amazon Grocery and Whole Foods Market.',
    bio: 'Chase Johnston is a Marketing Manager at Amazon on the Product Marketing team for Amazon Grocery and Whole Foods Market, where he owns tech and AI marketing and co-leads Grocery\u2019s pilot of Amazon\u2019s new AI tools for campaign planning and content creation. Before that he built the marketing for New and Emerging Brands across Amazon Fresh and Amazon Grocery, from vendor marketing and digital merchandising to campaign strategy and the performance dashboard the team and its agencies ran on. Prior to Amazon Marketing, Chase supported partner growth and go-to-market initiatives within Amazon Hub Delivery across major U.S. markets. With previous experience at Apple and running his own marketing agency in college, he brings a mix of creative storytelling, brand strategy, and data-driven execution to every project.'
  },
  contact: {
    email: 'chasetigerjohnston@gmail.com',
    phone: '509-844-7086',
    site: 'chasetiger.com',
    linkedin: 'https://www.linkedin.com/in/chase-tiger-johnston/',
    linkedinLabel: 'linkedin.com/in/chase-tiger-johnston'
  },
  stats: [
    { big: '7x', label: 'Campaign growth YoY', sub: '35 campaigns in 2025 to 250+ in 2026' },
    { big: '~40%', label: 'Click-through lift', sub: 'Sharper GTM strategy and creative testing' },
    { big: '$11.9M', label: 'B2B revenue', sub: 'SMB portfolio at Apple' },
    { big: '2,800+', label: 'Partner network', sub: 'Amazon Hub Delivery, from zero partners' },
    { big: '$1.3M+', label: 'Email-attributed revenue', sub: '6,000+ subscribers at Johnny Mo\u2019s' },
    { big: '42%', label: 'Avg. open rate', sub: 'Hub onboarding series, 12% above baseline' }
  ],
  experience: [
    {
      id: 'amz-mkt', company: 'Amazon', role: 'Marketing Manager, Amazon Grocery & Whole Foods Market', dates: '2025 \u2013 Present', where: 'New York, NY', accent: 'orange', current: true,
      bullets: [
        'Own tech and AI marketing for the Amazon Grocery and Whole Foods Market product marketing team, co-leading Grocery\u2019s pilot of Amazon\u2019s new AI tools for campaign planning and content creation.',
        'Established the marketing strategy and rebuilt the customer-facing experience for Amazon\u2019s New & Emerging Brands initiative across Amazon Fresh and Amazon Grocery, including a new rotating homepage placement that drives discovery and lifecycle engagement for eligible brands.',
        'Owned multiple customer-facing web pages on Amazon.com, including New to Grocery, Emerging Brands, Grocery \u201cFor You,\u201d and Amazon Fresh Storefront, plus all new page creation across the Grocery storefront.',
        'Scaled the program 7x year over year, from 35 campaigns in 2025 to 250+ in 2026, while lifting click-through rate ~40% through sharper GTM strategy and creative testing.',
        'Used AI tools to independently design and build a performance dashboard used weekly by the marketing team and three outside agencies, tracking every campaign across 65+ brands.'
      ]
    },
    {
      id: 'amz-hub', company: 'Amazon', role: 'Partner Management, Hub Delivery', dates: '2023 \u2013 2025', where: 'Seattle, WA & Los Angeles, CA', accent: 'blue',
      bullets: [
        'Joined Amazon Hub Delivery as one of its first hires when it was an unproven pilot with zero partners; helped build the early partner-management playbook and later managed 250+ partners across Seattle and Los Angeles as the program scaled to a 2,800+ partner network nationally.',
        'Built a 9-page onboarding packet and 4-week email series that is now the national standard for new partner launches, improving launch readiness across the network.',
        'Partnered with Marketing and Creative on partner-facing video campaigns and national rollout initiatives, and led Partner Spotlight storytelling featuring hub partner success stories in partner communications.'
      ]
    },
    {
      id: 'apple', company: 'Apple', role: 'Business Account Manager, Apple Business Essentials', dates: '2021 \u2013 2024', where: 'Remote', accent: 'pink',
      bullets: [
        'Partnered with Apple\u2019s Product Marketing organization on the go-to-market launch of Apple Business Essentials (now Apple Business), shaping customer-facing content and storytelling across Apple.com and business.apple.com.',
        'Managed a portfolio of SMB business accounts, generating $11.9M in B2B revenue and translating customer outcomes into the small business success stories Apple features on Apple.com.',
        'Supported customer education and adoption for GTM pilots focused on business enablement, helping translate new features into simple, sellable stories that supported long-term account growth and retention.'
      ]
    },
    {
      id: 'jm', company: 'Johnny Mo\u2019s Pizzeria', role: 'Director of Marketing', dates: '2020 \u2013 2023', where: 'Seattle, WA', accent: 'red',
      bullets: [
        'Owned digital marketing strategy (email, social, and in-store) for a growing Seattle pizzeria brand.',
        'Built a 6,000+ subscriber email program generating $1.3M+ in campaign-attributed revenue; 8+ standalone campaigns each drove $100K+ in incremental revenue.',
        'Designed johnnymos.com and in-store menus, plus led content creation, photography, and promotional design supporting brand build-out and expansion across multiple Seattle locations.'
      ]
    },
    {
      id: 'tig', company: 'Tig Media', role: 'Founder', dates: '2021 \u2013 2023', where: 'Seattle, WA', accent: 'teal',
      bullets: [
        'Founded and ran a small business marketing agency serving 10+ local clients across email, social, and brand design; grew revenue roughly 4x in the first six months.'
      ]
    }
  ],
  alsoWorkedWith: ['Banner Bank', 'TJX'],
  cities: {
    spokane:   { city:'Spokane',   state:'WA', lon:-117.426, lat:47.659, accent:'amber' },
    seattle:   { city:'Seattle',   state:'WA', lon:-122.335, lat:47.608, accent:'teal', side:'left' },
    cupertino: { city:'Cupertino', state:'CA', lon:-122.032, lat:37.323, accent:'pink', side:'left' },
    parkcity:  { city:'Park City', state:'UT', lon:-111.498, lat:40.646, accent:'violet' },
    nyc:       { city:'New York',  state:'NY', lon:-74.006,  lat:40.713, accent:'orange' }
  },
  journey: [
    { id:'spokane-roots', city:'spokane', accent:'amber', years:'Nov 1999 \u2013 Oct 2020', company:'TJX Companies & Banner Bank', role:'Growing up, and the first jobs',
      blurb:'Born and raised in Spokane. The first paychecks came from TJX Companies and Banner Bank, and with them the first lessons in retail, customers, and showing up.', tags:['Hometown','TJX Companies','Banner Bank'] },
    { id:'seattle-uw', city:'seattle', accent:'teal', years:'Oct 2020 \u2013 Oct 2021', company:'University of Washington', role:'BA, Marketing Communications \u00b7 founded Tig Media',
      blurb:'Moved west for UW. Started Tig Media during school, a small-business marketing agency that grew to 10+ local clients, and took on marketing for Johnny Mo\u2019s Pizzeria on the side.', tags:['UW','Tig Media, founder','Johnny Mo\u2019s'] },
    { id:'apple-cupertino', city:'cupertino', accent:'pink', years:'Oct 2021 \u2013 Apr 2022', company:'Apple', role:'Intern, Apple Business Essentials',
      blurb:'Six months in Cupertino with Apple\u2019s Product Marketing team as Apple Business Essentials went to market, interviewing small business owners for the stories on apple.com.', tags:['Internship','GTM launch','Customer stories'] },
    { id:'apple-seattle', city:'seattle', accent:'pink', years:'Apr 2022 \u2013 Apr 2023', company:'Apple', role:'Business Account Manager, Apple Business Essentials \u00b7 Seattle office, hybrid',
      blurb:'Back to Seattle, hybrid out of Apple\u2019s Seattle office. Managed an SMB portfolio that reached $11.9M in B2B revenue while finishing the degree at UW, Class of 2022.', tags:['$11.9M B2B','Hybrid','Class of 2022'] },
    { id:'apple-parkcity', city:'parkcity', accent:'pink', years:'Apr 2023 \u2013 Oct 2023', company:'Apple', role:'Business Account Manager \u00b7 remote',
      blurb:'Six months working remotely from the mountains in Park City. Same accounts and GTM pilots, much better views.', tags:['Remote','Mountain office'] },
    { id:'amazon-hub', city:'seattle', accent:'blue', years:'Oct 2023 \u2013 Dec 2025', company:'Amazon', role:'Partner Management, Hub Delivery',
      blurb:'Back in Seattle as one of the first hires on Amazon Hub Delivery when it had zero partners. Helped write the playbook, built the onboarding packet and email series that became the national standard, and managed 250+ partners across Seattle and LA.', tags:['0 to 250+ partners','Onboarding packet','National standard'] },
    { id:'amazon-nyc', city:'nyc', accent:'orange', years:'Dec 2025 \u2013 Present', company:'Amazon', role:'Marketing Manager, Amazon Grocery & Whole Foods Market', current:true,
      blurb:'Moved to New York to build the marketing for New & Emerging Brands across Amazon Fresh and Grocery (7x campaign growth, ~40% CTR lift, and a dashboard the team and three agencies used weekly), then took on tech and AI marketing for Amazon Grocery and Whole Foods Market.', tags:['7x campaigns','~40% CTR lift','Tech & AI'] }
  ],
  education: {
    school: 'University of Washington', where: 'Seattle, WA', degree: 'BA, Marketing Communications', year: 'Class of 2022'
  },
  skills: {
    groups: [
      { name: 'Marketing', accent: 'orange', items: ['Go-to-Market Strategy', 'Product Marketing', 'Lifecycle & Digital Marketing', 'Website & Page Ownership / Design', 'Brand Storytelling', 'Cross-Functional Leadership', 'Email Campaigns', 'Content & Social', 'Account Management', 'Communication'] },
      { name: 'AI & Tools', accent: 'teal', items: ['Claude', 'OpenAI', 'Internal Amazon AI Tools', 'Salesforce', 'HubSpot', 'Pardot', 'Adobe Creative Suite', 'Canva', 'IntelliJ IDEA', 'VS Code'] }
    ]
  },
  projects: [
    {
      id: 'eb', n: 1, company: 'Amazon', name: 'Emerging Brands, rebuilt', tag: 'Amazon.com · Amazon Grocery & Whole Foods Market', accent: 'orange',
      overview: 'I led the full overhaul of the Emerging Brands experience on Amazon.com within Amazon Grocery and Whole Foods Market. The previous page lacked strong storytelling, organization, and a clear customer journey for discovering new brands and products.',
      execution: 'I independently redesigned the page experience from the ground up, including layout structure, vendor placement strategy, campaign organization, and overall brand presentation. I focused on creating a cleaner, more modern experience that made it easier for customers to discover emerging products while also improving visibility opportunities for vendors.',
      results: 'The redesigned experience created a more scalable and engaging destination for New and Emerging Brands on Amazon.com, improving overall organization, brand visibility, and customer experience across the page.',
      metrics: [['7x', 'campaign growth YoY'], ['250+', 'campaigns in 2026'], ['~40%', 'CTR lift']],
      images: [['eb_phones', 'Emerging Brands in the Amazon Fresh app'], ['eb_desktop', 'Emerging Brands on Amazon.com desktop'], ['eb_banner', 'Emerging Brands hero banner']]
    },
    {
      id: 'packet', n: 2, company: 'Amazon', name: 'Hub partner onboarding packet', tag: 'Amazon Hub Delivery', accent: 'blue',
      overview: 'I created a 9-page onboarding packet to simplify how new partners launch with Amazon Hub Delivery. Before this, partners received fragmented information from multiple sources, which caused confusion and delays.',
      execution: 'I worked cross-functionally with Operations, Tech, Marketing, and the Creative Garage to consolidate all key resources into one visual physical document. Each section walked partners through setup, delivery expectations, and Hub branding in a clean, easy-to-follow layout.',
      results: 'The packet became the standard onboarding document for all new Hub partners nationwide.',
      metrics: [['9', 'pages'], ['National', 'standard for new partners'], ['4', 'teams: Ops, Tech, Marketing, Creative Garage']],
      images: [['hub_packet', 'Packet cover and table of contents'], ['hub_support', 'Support and account manager page']]
    },
    {
      id: 'lifecycle', n: 3, company: 'Amazon', name: '4-week partner lifecycle emails', tag: 'Amazon Hub Delivery · Pardot', accent: 'blue',
      overview: 'To improve partner engagement after launch, I built a 4-week onboarding email campaign that walked partners through critical milestones during their first month.',
      execution: 'I developed themed content for each week (Setup, Quality, Growth, and Community) and automated the sequence through Pardot. I also tested subject lines and content formats to optimize open and click-through rates.',
      results: 'The campaign achieved a 42% average open rate (12% above baseline) and boosted partner retention by ~8%. It\u2019s now used across all Hub markets as a standard lifecycle campaign.',
      metrics: [['42%', 'avg. open rate'], ['+12%', 'vs. baseline'], ['~8%', 'retention lift']],
      images: [['hub_email2', 'Week 2: Quality'], ['hub_email4', 'Week 4: Growth and referrals']]
    },
    {
      id: 'apple', n: 4, company: 'Apple', name: 'Small business stories', tag: 'Apple Business Essentials', accent: 'pink',
      overview: 'I worked with Apple\u2019s Product Marketing team in Cupertino during the rollout of Apple Business Essentials, helping collect and develop real customer stories for Apple\u2019s Small Business website.',
      execution: 'I interviewed small business owners across the US to uncover how Apple devices supported their operations. Using these insights, I collaborated with various Cupertino-based teams to shape narrative direction and feedback on beta usability to improve product positioning.',
      results: 'These stories were featured publicly on apple.com/business/small-business.',
      metrics: [['$11.9M', 'B2B revenue managed'], ['apple.com', 'featured stories'], ['GTM', 'launch support']],
      images: [['apple_story', 'Customer story on apple.com'], ['apple_abe', 'Apple Business Essentials']]
    },
    {
      id: 'jm', n: 5, company: 'Johnny Mo\u2019s', name: 'A restaurant brand book', tag: 'Johnny Mo\u2019s Pizzeria', accent: 'red',
      overview: 'When starting Johnny Mo\u2019s, the restaurant had no formal branding, just a logo and word-of-mouth marketing. I led the creation of the brand book to define its visual identity and customer tone.',
      execution: 'I partnered with designers in New York to build a brand guide covering color palettes, typography, tone of voice, and in-store visuals. I applied it across social, email, and menus to create a cohesive brand experience.',
      results: 'Engagement across digital channels rose ~20%, online orders increased 13.5%, and the brand book became the foundation for their second location\u2019s launch.',
      metrics: [['$1.3M+', 'email-attributed revenue'], ['6,000+', 'subscribers'], ['13.5%', 'more online orders']],
      images: [['jm_photo', 'Recommended by Restaurant Guru'], ['jm_menu', 'Menu design'], ['jm_email', 'Welcome email']]
    },
    {
      id: 'tig', n: 6, company: 'Tig Media', name: 'A college agency for small business', tag: 'Tig Media LLC · Founder', accent: 'teal',
      overview: 'While in college, I founded Tig Media LLC, a marketing agency focused on helping small businesses grow through creative, affordable marketing strategies.',
      execution: 'I led a three-person team managing 10+ clients across Washington state and Idaho. We built custom marketing plans, ran social campaigns, designed websites, and produced ads for local restaurants and retail shops.',
      results: 'Revenue grew roughly 4x in the first six months, and Tig Media became a local agency for small businesses seeking modern marketing without enterprise costs.',
      metrics: [['10+', 'clients'], ['~4x', 'revenue in six months'], ['Three', 'person team']],
      images: [['tig_site', 'Tig Media website'], ['tig_mba', 'Client site: Mike Bass Associates'], ['tig_aleppo', 'Client menu: Aleppo Kitchen']]
    }
  ]
};

TIG.map = {cols:480, rows:240, lat0:74.0, lat1:-56.0, bits:["AAAAAAAAAAAAP/gAAAD+AAAAAAAP///////4AAAAAAAAAAAAAAAA+AAAAAQ/////+gAAAAAAAAAAAAAA","AAAAAAAAAAAAP/wAEH7+HG8AAAAH///////4AAAAAAAAAAAAAAAA+AAAAB///////vgMAAAeAAAAAAAA","AAAAAAAAAAAAP/wAeH7+Oe+AAAAH///////4AAAAAAAAAAAAAAAA8AAAAB////////4PwAA/AAAAAAAA","AAAAAAAAAAAAP/oA+Hz8e//AAAAH///////gAAAAAAAAAAAAAAAB8AAAAB////////4P4AAPAAAAAAAA","AAAAAAAAAAAAf/8B8Hz8+/fgAAAD//////+AAAAAAAAAAAAAAAAD8AAEAB/////////v8AAAAAAAAAAA","AAAAAAAAAAAAf//l8f74//7AAAAD///////AAAAAAAAAAAAAAAAD4AAPkB//////////8AAYAAAAAAAA","AAAAAAAAAAAAf//+8f/w//mAAAAB///////AAAAAAAAAAAAAAAAD4AAPmB//////////8AA/gAAAAAAA","AAAAAAAAAAAA/7/+8P/h//ngAAAD//////5gAAAAAAAAAAAAAAADwAAPiB//////////8AB//AAAAAAA","AAAAAAAAAAAA/3/+8H/h///wAAAD//////+AAAAAAAAAAAAAAAAHwAAfm+//////////8AA//wAAAAAA","AAAAAAAAAAAA/3//+D5B///4AAAD//////+AAAAAAAAAAAAAAAAPwAAfn///////////8AA//wAAAAAA","AAAAAAAAAAAAf3//+B7g///4AAAH///////AAAAAAAAAAAAAAAAPwAA/v///////////8Ii//4AAAAAA","wAAAAAAAAAAAPz//+Bzw////AAAD///////gAAAAAAAAAAAAAAAH4AA/f///////////+P///4AAAAAB","4AAAA4AAAAAAHB//+AH4////gAAAf//////gAAAAAAAAAAQAAAAB8AB/v///////////+f///+AAAAAD","wAAAB8AAAAAACD//+AH4f///gAAAP//////gAAAAAAAAAP4AAAAB8AB/v/////////////////fwAAAD","AAAAH/gAAAAAAD///AH4f///8AAB//////7gAAAAAAAAAP+AAAAA+AB/n//////////////////4AAAA","AAAAf//AAAAEAAB//gH8f///+AAB//////wAAAAAAAAAAf/AAAAAAAB/n//////////////////4AAAA","AAAB///4gAAGAAf//4H8H///+AAB//////+AAAAAAAAAD/+AAAAAAAB/v//////////////////4AAAA","AAAB////wAB+QA///8z8A////AAB///////AAAAAAAAAP/+AAAAAAAB/v//////////////////4ABwA","AAAD////+AH/bg///4/8A9B//AAB7/////+AAAAAAAAAf//wAAAAAPB/v//////////////////84D/w","AAAD/////h///w///x9/A+B//gABz/////8AAAAAAAAA///4AAAAAPx/v////////////////////5/8","AAAH/////z///8f//x+/Q/A//gAAD/////4AAAAAAAAB////AAAAAH4fv////////////////////5//","gAA///////////7/BwE/w/A//AAAH/////gAAAAAAAAD////wAABAH+fn////////////////////9//","wAA////////////x8AA/5/Af+AAAP/////AAAAAAAAAD////4AADhv/P3///////////////////////","4AB///////////8B8A8/5+AH/gAAf////+AAAAAAAAAH////8DgPf///3///////////////////////","8AAf//////////4B/g//5+Bz/wAAf////wAAAAAAAAAP/////Dwf////3///////////////////////","+AAP//////////88////7/Bz/8AA////+AAAAAAAAAAf/////D5/////z///////////////////////","/AAH////////////////7/Bx/+AA////8AAAAAAAAAAf/////jj/////n///////////////////////","/gAH//////////////////Bh/+AA////8AAAAAAAAAA//////jj/////n///////////////////////","/+AD/////////////////+AD//wA////4AAAAAAAAAA//////hn/////P///////////////////////","//AN/////////////////8AD//wA////4AAAAAAAAAB//////h//////f///////////////////////","//gc/////////////////QAH//wA////gADgeAAAAAB////4/d//////////////////////////////","//h/////////////////+AAH/PgA////AAD3+AAAAAD////8M///////////////////////////////","//j//////////////////AAH/PgAf//8AAH/+AAAAAD//H/+B///////////////////////////////","r8D/////////////////9gA//HAAP//gAAB//AAAAAH/+H/+B///////////////////////////////","h8B/////////////////94D//iAAP//gAAB//AAAAAH/+H/+R///////////////////////////////","A8A/////////////////98H//wAAP//AAAD/+AAAAAP/+P/+9///////////////////////////////","AcAKf///////////////5+H//4AAP//AAAA/+AAAAAP/+f/+f//////////////////////////////4","AAAAf///////////////7/AD/8AAP//AAAA/4AAAAAf/8//////////////////////////////////8","AAAAf///////////////D/gB/8AAH//AAAAfgAAAAA//9//////////////////////////////////8","ABwB///////////////+BxgB/8AAH/+AAAAAAAAAAB//x//////////////////////////////////+","AAYP///////////////+AAAA/cAAD/8AAAAAAAAAAH//j//////////////////////////////////+","AAAP///////////////8AOAAPsAAD/8AAAAAAAAAAP//D///////////////////////////////////","AAAf///////////////4AMTkHwAAB/4AAAAAAAAAAf//D///////////////////////////////3//2","AAAf///////////////wAAb+AwAAB/8AAAAAAAAAAf//D///////////////////////////////3//g","AAA////////////////wAAT/AAAAA/8AAAAAAAAAA//+D///////////////////////////////v/+A","AAAf///////////////gAAD/gAAAA/4AAAAAAAAAA//+D/////////////////////////////+PP/4A","AAAf///////////////gAAD/4AAAAf4AAAAAAAAAAf//D/////////////////////////////8Gf/wA","AAAf///v///////////gAAD/4AAAAB4AAAAAAAAAAf//D/////////////////////////////8E//gA","AABv///j///////////AAAD/4EAAAB4AAAAAAAAAAf//g+P///////////////////////////4B/zAA","AABn///gH//////////AAAD/8GAAAAAAAAAAAAAAAf//gwP///////////////////////////wB/gAA","AAAA/+cAB//////////AAAD/8OAAAAAAAAAAAAAAAf//gH////////////////////////////wDwAAA","AAAA/+AAA//////////AAAD/8PAAAAAAAAAAAAAAAfv/Af//////////////////////////AH4HwAAA","AAAAv/AAAf/////////wAAH/+fAAAAAAAAAAAAAAAfv+Af/////////////////////////4AAAPgAAA","AAAAA+AAAH/////////wAAD///gAAAAAAAAAAABwAPH+AP/////////////////////////wAAAfgAAA","AAAAB9gAAAf////////4AAB///gAAAAAAAAAAADgAAH8QP/////////////////////////wAAB/AAAA","AAAAB7gAAAf////////4AAB///wAAAAAAAAAAAD8AAX8xv/////////////////////////gAAB/wAAA","AAAADzAAAAP/////////AAA///wAAAAAAAAAAAD4ABz+jv/////////////////////////AAAD/wAAA","AAAAHiAAAAH/////////wAA///wAAAAAAAAAAAD4ABz+D/////////////////////////+AAAD/wAAA","AAAAOAAAAAH/////////4AB///wAAAAAAAAAAAD4AB78D/////////////////////////8AAAH/wAAA","AAAA+AAAAAD/////////+AB///4AAAAAAAAAAAD8AB3wD/////////////////////////4AAAH/AAAA","AAABwAAAAAD//////////AD///8AAAAAAAAAAAD8ABvgD/////////////////////////wAAAH/AAAA","AAAHAAAAAAB//////////+H////gAAAAAAAAAAd+ABmAH/////////////////////////gAAAH/AAAA","AAAOAAAAAAA//////////+P////wAAAAAAAAAA8+ABwDv/////////////////////////wAAAH+AAAA","AAAAAAAAAAA//////////8P////wAAAAAAAAAB8fAB/P//////////////////////////5iAAH8AAAA","AAAAAAAAAAOf/////////+P////4AAAAAAAAAB8PAH/////////////////////////////yAAH8AAAA","AAAAAAAAAAEf/////////+H////8AAAAAAAAAB9/gf/////////////////////////////+AAD8AAAA","AAAAAAAAAAEP/////////+H////8AAAAAAAAAB9/w//////////////////////////////+AADwAAAA","AAAAAAAAAACH//////////H////8AAAAAAAAAB4/x//////////////////////////////+AADgAAAA","AAAAAAAAAAAH//////////P////8AAAAAAAAABx/x//////////////////////////////+AADgAAAA","AAAAAAAAAAAH//////////v////8AAAAAAAAAAA/z//////////////////////////////2AADAAAAA","AAAAAAAAAAAD///////////////MAAAAAAAAAAA/v//////////////////////////////3AAAAAAAA","AAAAAAAAAAAP//////////////+YAAAAAAAAAAB8P//////////////////////////////3AAAAAAAA","AAAAAAAAAAAH/////////////iQcAAAAAAAAAABAf//////////////////////////////3AAAAAAAA","AAAAAAAAAAAB/////////////jg/AAAAAAAAAAAH///////////////////////////////ngAAAAAAA","AAAAAAAAAAAA////////////+cw/gAAAAAAAAAAH///////////////////////////////mgAAAAAAA","AAAAAAAAAAAAf///////////98B/wAAAAAAAAAA////////////////////////////////mAAAAAAAA","AAAAAAAAAAAAP////////////8B/wAAAAAAAAAA////////////////////////////////GAAAAAAAA","AAAAAAAAAAAAP////////////8B/wAAAAAAAAAAP///////////////////////////////GAAAAAAAA","AAAAAAAAAAAAP////////////8AGwAAAAAAAAAAH//////////////////////////////+GAAAAAAAA","AAAAAAAAAAAAP/////////////sAgAAAAAAAAAAD//////+/P//j//////////////////+HAAAAAAAA","AAAAAAAAAAAAH/////////////8AAAAAAAAAAAAD//////+OP/+B//////////////////8EAAAAAAAA","AAAAAAAAAAAAH/////////////8AAAAAAAAAAAAD//+///8f//8H//////////////////4EAAAAAAAA","AAAAAAAAAAAAP////////////nwAAAAAAAAAAAAD//+///8Pf/4P//////////////////wGAAAAAAAA","AAAAAAAAAAAAP////////////OAAAAAAAAAAAAAD//+P//4EP/4f//////////////////wHAAAAAAAA","AAAAAAAAAAAAP///////////8MAAAAAAAAAAAAAD/+fP//wAD/4P//////////////////gPwAAAAAAA","AAAAAAAAAAAAP///////////wAAAAAAAAAAAAA///4Pj//wAB/8P//////////////////AfwAAAAAAA","AAAAAAAAAAAAP///////////wAAAAAAAAAAAAB//8Avh//gAAf8H/////////////////0A/AAAAAAAA","AAAAAAAAAAAAP///////////wAAAAAAAAAAAAA//8Bnwf/gAAf+D/////////////////gA6AAAAAAAA","AAAAAAAAAAAAP///////////4AAAAAAAAAAAAA//8Bj8P/wfAf+C////////////////+AAwAAAAAAAA","AAAAAAAAAAAAP///////////AAAAAAAAAAAAAA//4Ah+P///7//A////////////////+AAYAAAAAAAA","AAAAAAAAAAAAP//////////+AAAAAAAAAAAAAA//gBgfvz/////j//////////////+/+AA4AAAAAAAA","AAAAAAAAAAAAP//////////8AAAAAAAAAAAAAA//ABgMvx/////j//////////////8/4AA4AAAAAAAA","AAAAAAAAAAAAH//////////4AAAAAAAAAAAAAB//ABgGHh/////B//////////////4xwAA4AAAAAAAA","AAAAAAAAAAAAH//////////wAAAAAAAAAAAAAB//AAAGHh/////B//////////////gD4AA4AAAAAAAA","AAAAAAAAAAAAD//////////wAAAAAAAAAAAAAA//AAAcDx/////B//////////////gD8AAwAAAAAAAA","AAAAAAAAAAAAD//////////gAAAAAAAAAAAAAA/+AAD4Dw/////B//////////////7B8ADwAAAAAAAA","AAAAAAAAAAAAB//////////gAAAAAAAAAAAAAA/8AP44Dg/////x///////////////w+APwAAAAAAAA","AAAAAAAAAAAAB//////////gAAAAAAAAAAAAAAHA//4ABgO9//////////////////+A+AfwAAAAAAAA","AAAAAAAAAAAAA//////////gAAAAAAAAAAAAAACD//4QAAAA//////////////////+A+BfwAAAAAAAA","AAAAAAAAAAAAAf/////////gAAAAAAAAAAAAAAH///4AAeAc//////////////////4A+P/gAAAAAAAA","AAAAAAAAAAAAAf/////////AAAAAAAAAAAAAAAH///wAAAAZ//////////////////8A4f/AAAAAAAAA","AAAAAAAAAAAAAH////////8AAAAAAAAAAAAAAAP///wAAAAB//////////////////+AA/wAAAAAAAAA","AAAAAAAAAAAAAB////////4AAAAAAAAAAAAAAA////4AAAAB//////////////////+AB+AAAAAAAAAA","AAAAAAAAAAAAAB////////wAAAAAAAAAAAAAAA/////gDgAD///////////////////AB8AAAAAAAAAA","AAAAAAAAAAAAAA////////gAAAAAAAAAAAAAAB/////4PwAD///////////////////AAwAAAAAAAAAA","AAAAAAAAAAAAAA////////AAAAAAAAAAAAAAAB/////4P/jj///////////////////gBgAAAAAAAAAA","AAAAAAAAAAAAAAZ///////AAAAAAAAAAAAAAAB//////P//////////////////////gAAAAAAAAAAAA","AAAAAAAAAAAAAAd/////1/AAAAAAAAAAAAAAAB/////////////////////////////AAAAAAAAAAAAA","AAAAAAAAAAAAAAM////rgHAAAAAAAAAAAAAAAD////////////8f///////////////gAAAAAAAAAAAA","AAAAAAAAAAAAAAG///+AAHgAAAAAAAAAAAAAAH////////////+P///////////////gAAAAAAAAAAAA","AAAAAAAAAAAAAAHf//4AAHgAAAAAAAAAAAAAAf////////////+P///////////////AAAAAAAAAAAAA","AAAAAAAAAAAAAAHP//4AAHgAAAAAAAAAAAAAA//////////5///D//////////////+AAAAAAAAAAAAA","AAAAAAAAAAAAAADn//wAAD2AAAAAAAAAAAAAA//////////4///h//////////////+AAAAAAAAAAAAA","AAAAAAAAAAAAAABz//4AABhAAAAAAAAAAAAAD//////////8///gH/////////////8AAAAAAAAAAAAA","AAAAAAAAAAAAAAAz//4AABgAAAAAAAAAAAAAD//////////8f//4I/////////////4AAAAAAAAAAAAA","AAAAAAAAAAAAAAA4//wAAAGAAAAAAAAAAAAAD//////////+f//4cAB///////////5gAAAAAAAAAAAA","AAAAAAAAAAAAAAAc//wAAACAAAAAAAAAAAAAH///////////P///8AB///////////zgAAAAAAAAAAAA","AAAAAAAAAAAAAAAMf/wAAAAAAAAAAAAAAAAAP///////////H////gAf//////////jAAAAAAAAAAAAA","AAAAAAAAAAAAAAAEP/wAAPwAAAAAAAAAAAAAP///////////D////wAP/////////+DAAAAAAAAAAAAA","AAAAEAAAAAAAAAAAH/wAAZ+AAAAAAAAAAAAAf///////////j////wAP////v////gAAAAAAAAAAAAAA","AAAABgAAAAAAAAAAH/wA8AHgAAAAAAAAAAAAf///////////z////gAH///wP///OAAAAAAAAAAAAAAA","AAAAAQAAAAAAAAAAH/4B8AD4AAAAAAAAAAAAf///////////z////AACf//wH//+MAAAAAAAAAAAAAAA","AAAAAMAAAAAAAAAAH/8B8AD7wAAAAAAAAAAAP///////////w///+AAAf//gD//8cAAAAAAAAAAAAAAA","AAAAAMAAAAAAAAAAD/8D8AAB8AAAAAAAAAAAP///////////w///+AAAf/+AB//4cAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAB//f4ADH+4AAAAAAAAAAP///////////wf//8AAAf/+AB//8YABgAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAf//4ADAgwAAAAAAAAAAP///////////4f//4AAAf/4AA//8AADgAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAH//4AAAAAAAAAAAAAAAP///////////8P//wAAAf/wAA//+AADwAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAP///////////8H/+AAAAP/wAB7//AADgAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAEf/wAAAAAAAAAAAAAAf///////////+H/8AAAAP+AAAj//gADAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAf////////////H/wAAAAH+AAAD//wADAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAH/4AAAAAAAAAAAAAAf////////////3/AAAAAH+AAAD//wAD4AAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAA/4AAAAAAAAAAAAAAf/////////////4AAAAAH+AAAB//wAD8AAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAAAAAf/////////////AAAAAAD+AAAB//wABMAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAD4ABoAAAAAAAAAAAP////////////8AQAAAAD+AAABz/wAADAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAB4AH+AAAAAAAAAAAH////////////8HwAAAAB+AAABh/gAE3AAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAB4Af/z4AAAAAAAAAD//////////////wAAAAB+AAABg/AAM+AAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAA8Aff/4AAAAAAAAAB//////////////wAAAAB8AAABAOAAIYAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAP+///4AAAAAAAAAA//////////////wAAAAA/AAABgYAAQTgAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAP3///+AAAAAAAAAA//////////////gAAAAATgAABwAAAAfgAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAABn////AAAAAAAAAAf/////////////gAAAAADgAAAwAAAAfgAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAD////gAAAAAAAAAP/////////////AAAAAADgAAAcAABgHgAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAD////2AAAAAAAAAH/////////////AAAAAABgAAAeAADgDAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAD/////wAAAAAAAAB//Af////////+AAAAAAAAAAcfAAH4AAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAD/////4AAAAAAAAA8EAf////////8AAAAAAAAAAePAAPwAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAB/////8AAAAAAAAAAAAA////////8AAAAAAAAAAPPAAfgAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAD/////8AAAAAAAAAAAAAf///////4AAAAAAAAAADnAA/gAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAH/////+AAAAAAAAAAAAAf///////wAAAAAAAAAAD3gD/gAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAH//////AAAAAAAAAAAAA////////AAAAAAAAAAAB/gf/wCIAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAf/////+AAAAAAAAAAAAA///////+AAAAAAAAAAAA+Af/7+MAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAf/////+AAAAAAAAAAAAA///////8AAAAAAAAAAAA/gf/iIIAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAA///////4AAAAAAAAAAAA///////4AAAAAAAAAAAAfAf/mYIeAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAA////////AAAAAAAAAAAA///////wAAAAAAAAAAAAPwP/HwA+AAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAA////////gAAAAAAAAAAA///////gAAAAAAAAAAAAPwH/PgAOfAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAf////////gAAAAAAAAAAf//////AAAAAAAAAAAAAH8H/PgHPf8AGAAAAAA","AAAAAAAAAAAAAAAAAAAAAA/////////4AAAAAAAAAAP//////AAAAAAAAAAAAAD8BOHwxH//gBAAAAAA","AAAAAAAAAAAAAAAAAAAAAB/////////8AAAAAAAAAAH/////+AAAAAAAAAAAAAB4AAGwAB//wDAAAAAA","AAAAAAAAAAAAAAAAAAAAAB//////////gAAAAAAAAAD/////8AAAAAAAAAAAAAA4AAGQAAH/4GAAAAAA","AAAAAAAAAAAAAAAAAAAAAA//////////wAAAAAAAAAD/////8AAAAAAAAAAAAAAeAAAAABD/+8IAAAAA","AAAAAAAAAAAAAAAAAAAAAA//////////wAAAAAAAAAD/////8AAAAAAAAAAAAAAPmAAAAAD/+AGAAAAA","AAAAAAAAAAAAAAAAAAAAAAP/////////wAAAAAAAAAB/////+AAAAAAAAAAAAAAD/gAAAAD/+ABQAAAA","AAAAAAAAAAAAAAAAAAAAAAP/////////wAAAAAAAAAB/////+AAAAAAAAAAAAAAAH8SQQAH/PAAKAAAA","AAAAAAAAAAAAAAAAAAAAAAH/////////gAAAAAAAAAB/////+AAAAAAAAAAAAAAAAI7jgAAeHgACAAAA","AAAAAAAAAAAAAAAAAAAAAAH/////////gAAAAAAAAAB/////+AAAAAAAAAAAAAAAAAGGAAAADwAHAAAA","AAAAAAAAAAAAAAAAAAAAAAD/////////AAAAAAAAAAA//////AAAAAAAAAAAAAAAAACAAAAAA4ABAAAA","AAAAAAAAAAAAAAAAAAAAAAD////////+AAAAAAAAAAA//////AAAAAAAAAAAAAAAAAAAAIAGAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAB////////8AAAAAAAAAAA//////AAAAAAAAAAAAAAAAAAAAPQGAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAB////////8AAAAAAAAAAB//////ABAAAAAAAAAAAAAAAAAA/4GAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAA////////4AAAAAAAAAAB//////ABgAAAAAAAAAAAAAAAAB/wPAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAA////////wAAAAAAAAAAD//////ADgAAAAAAAAAAAAAAAAx/wPAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAA////////wAAAAAAAAAAD//////gHgAAAAAAAAAAAAAAAB//gHwAAAAgAA","AAAAAAAAAAAAAAAAAAAAAAAP///////wAAAAAAAAAAH//////AfwAAAAAAAAAAAAAAAD//wPwAAAAgAA","gAAAAAAAAAAAAAAAAAAAAAAH///////wAAAAAAAAAAH//////B/gAAAAAAAAAAAAAAAH//8PwAAAAQAB","AAAAAAAAAAAAAAAAAAAAAAAB///////wAAAAAAAAAAH/////8B/AAAAAAAAAAAAAAAAf//+P4AAAAAAC","AAAAAAAAAAAAAAAAAAAAAAAAf//////wAAAAAAAAAAH/////wD/AAAAAAAAAAAAAAAAf////4AAAAAAO","AAAAAAAAAAAAAAAAAAAAAAAAP//////wAAAAAAAAAAD/////gD/AAAAAAAAAAAAAAAA/////4AAAAAAE","AAAAAAAAAAAAAAAAAAAAAAAAP//////gAAAAAAAAAAB/////AB/AAAAAAAAAAAAAAAA/////8AAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAP//////gAAAAAAAAAAB////+AB+AAAAAAAAAAAAAAAH//////AAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAB////+AB+AAAAAAAAAAAAAAA///////gAAGAAA","AAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAA////+AD+AAAAAAAAAAAAAAD///////gAADAAA","AAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAA/////AH8AAAAAAAAAAAAAAP///////wAABgAA","AAAAAAAAAAAAAAAAAAAAAAAAP/////+AAAAAAAAAAAAf////AH8AAAAAAAAAAAAAAf///////4AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAP/////wAAAAAAAAAAAAf////AD8AAAAAAAAAAAAAAf///////4AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAP/////AAAAAAAAAAAAAf////AD8AAAAAAAAAAAAAAf///////8AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAP////4AAAAAAAAAAAAAf///+AD4AAAAAAAAAAAAAAf////////AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAf////wAAAAAAAAAAAAAf///4ABwAAAAAAAAAAAAAAP////////AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAf////wAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAf////////AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAf////wAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAf////////AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAf////wAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAP////////gAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAf////gAAAAAAAAAAAAAH///wAAAAAAAAAAAAAAAAAP////////gAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA/////gAAAAAAAAAAAAAD///gAAAAAAAAAAAAAAAAAH////////gAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA/////AAAAAAAAAAAAAAD//nAAAAAAAAAAAAAAAAAAH////////gAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAf////AAAAAAAAAAAAAAB//OAAAAAAAAAAAAAAAAAAH////////gAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA////+AAAAAAAAAAAAAAB//+AAAAAAAAAAAAAAAAAAH////////AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA////8AAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAD////////AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA////4AAAAAAAAAAAAAAA//4AAAAAAAAAAAAAAAAAAD//8P////AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA////wAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAD//AD////AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA////wAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAD/8AB///+AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA////gAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAH/4AA///8AAAAAA","AAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAD8AAA3//8AAAAIA","AAAAAAAAAAAAAAAAAAAAAAAB///yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAP//4AAAAMA","AAAAAAAAAAAAAAAAAAAAAAAB///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//4AAAAGA","AAAAAAAAAAAAAAAAAAAAAAAB///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wAAAACA","AAAAAAAAAAAAAAAAAAAAAAAD///4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wAAAADg","AAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wAAAABk","AAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAAAAB8","AAAAAAAAAAAAAAAAAAAAAAAD///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAD8","AAAAAAAAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4","AAAAAAAAAAAAAAAAAAAAAAAD//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw","AAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw","AAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAdg","AAAAAAAAAAAAAAAAAAAAAAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAfg","AAAAAAAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAA8A","AAAAAAAAAAAAAAAAAAAAAAAF/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAA8A","AAAAAAAAAAAAAAAAAAAAAAAF/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAB4A","AAAAAAAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAH4A","AAAAAAAAAAAAAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgA","AAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgA","AAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AA","AAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AA","AAAAAAAAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAA","AAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAf+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAP8ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAf+APgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAP+AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"]};

/* tigOS pets: names, lines and the SVG fallback (shown until the 3D model in zoo.glb is in, and as the Spotlight icon). Behaviour lives in app.js, motion in styles.css. 120x120 viewBox, ground line at y~108.
   Part classes the animations hook into: head, eyes, lids (blink cover, must match the fur colour under it), earL/earR,
   legA/legB, tail, tongue, flipL/flipR, wingL/wingR, ant, core, jets, glow, eyesHappy. */
window.TIG_PETS = {
  cat: { name:'Goob', label:'cat', say:['meow', 'mrrp', 'purr'], svg:
    '<svg viewBox="0 0 120 120">'+
    '<g class="tail"><path d="M86 94 C106 96 112 76 100 64 C95 60 90 64 93 70" fill="none" stroke="#e0862f" stroke-width="10" stroke-linecap="round"/><path d="M86 94 C106 96 112 76 100 64" fill="none" stroke="#c96f22" stroke-width="10" stroke-linecap="round" stroke-dasharray="5 11" opacity=".5"/></g>'+
    '<ellipse cx="60" cy="84" rx="31" ry="25" fill="#f2a24d"/><path d="M34 76 q6 -4 12 0 M74 76 q6 -4 12 0 M40 92 q6 -4 12 0 M70 92 q6 -4 12 0" stroke="#c96f22" stroke-width="3.2" stroke-linecap="round" fill="none"/>'+
    '<ellipse cx="60" cy="92" rx="18" ry="14" fill="#ffe8cf"/>'+
    '<g class="legA"><ellipse cx="46" cy="106" rx="11" ry="6.5" fill="#f2a24d"/><path d="M42 106v3M46 106v3M50 106v3" stroke="#c96f22" stroke-width="1.6" stroke-linecap="round"/></g>'+
    '<g class="legB"><ellipse cx="74" cy="106" rx="11" ry="6.5" fill="#f2a24d"/><path d="M70 106v3M74 106v3M78 106v3" stroke="#c96f22" stroke-width="1.6" stroke-linecap="round"/></g>'+
    '<g class="head">'+
      '<g class="earL"><path d="M34 34 L28 6 L54 22 Z" fill="#f2a24d"/><path d="M37 30 L33 14 L50 24 Z" fill="#ffb7c8"/></g>'+
      '<g class="earR"><path d="M86 34 L92 6 L66 22 Z" fill="#f2a24d"/><path d="M83 30 L87 14 L70 24 Z" fill="#ffb7c8"/></g>'+
      '<circle cx="60" cy="46" r="29" fill="#f2a24d"/><path d="M50 20 q3 6 0 12 M60 18 q0 7 0 12 M70 20 q-3 6 0 12" stroke="#c96f22" stroke-width="3" stroke-linecap="round" fill="none"/>'+
      '<ellipse cx="60" cy="58" rx="20" ry="13" fill="#ffe8cf"/>'+
      '<circle cx="40" cy="54" r="5" fill="#ff9ab3" opacity=".55"/><circle cx="80" cy="54" r="5" fill="#ff9ab3" opacity=".55"/>'+
      '<g class="eyes"><ellipse cx="49" cy="46" rx="5.6" ry="6.8" fill="#2e2740"/><ellipse cx="71" cy="46" rx="5.6" ry="6.8" fill="#2e2740"/><ellipse cx="49" cy="46.5" rx="3.2" ry="4.4" fill="#4b8f6a"/><ellipse cx="71" cy="46.5" rx="3.2" ry="4.4" fill="#4b8f6a"/><ellipse cx="49" cy="47" rx="1.6" ry="3.6" fill="#1a1626"/><ellipse cx="71" cy="47" rx="1.6" ry="3.6" fill="#1a1626"/><circle cx="51" cy="43.5" r="1.9" fill="#fff"/><circle cx="73" cy="43.5" r="1.9" fill="#fff"/></g>'+
      '<g class="lids"><rect x="42.5" y="38.5" width="13" height="15.5" rx="6.5" fill="#f2a24d"/><rect x="64.5" y="38.5" width="13" height="15.5" rx="6.5" fill="#f2a24d"/></g>'+
      '<path d="M60 54 l3.4 3 h-6.8 z" fill="#ff8fab"/><path d="M60 57 v3 M56.5 60 q3.5 3.4 7 0" stroke="#7a4b2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>'+
      '<path d="M36 52 h-14 M36 57 h-15 M84 52 h14 M84 57 h15" stroke="#f7dcc0" stroke-width="1.6" stroke-linecap="round"/>'+
    '</g></svg>' },

  dog: { name:'Khlo\u00e9', label:'German shepherd', say:['woof!', 'woof woof', 'arf'], svg:
    '<svg viewBox="0 0 120 120">'+
    '<g class="tail"><path d="M88 86 C100 90 108 98 106 108" fill="none" stroke="#1c1a1d" stroke-width="10" stroke-linecap="round"/><path d="M104 102 C106 105 106 108 106 108" fill="none" stroke="#9a5a26" stroke-width="7" stroke-linecap="round"/></g>'+
    '<ellipse cx="60" cy="84" rx="32" ry="25" fill="#9a5a26"/>'+
    '<path d="M28 84 C30 56 90 56 92 84 C84 68 36 68 28 84 Z" fill="#1c1a1d"/>'+
    '<ellipse cx="60" cy="94" rx="17" ry="12" fill="#c9985e"/>'+
    '<g class="legA"><rect x="36" y="92" width="13" height="16" rx="6" fill="#9a5a26"/><ellipse cx="42.5" cy="107" rx="9" ry="5" fill="#8a4f20"/><path d="M39 107v3M42.5 107v3M46 107v3" stroke="#3b2210" stroke-width="1.5" stroke-linecap="round"/></g>'+
    '<g class="legB"><rect x="71" y="92" width="13" height="16" rx="6" fill="#9a5a26"/><ellipse cx="77.5" cy="107" rx="9" ry="5" fill="#8a4f20"/><path d="M74 107v3M77.5 107v3M81 107v3" stroke="#3b2210" stroke-width="1.5" stroke-linecap="round"/></g>'+
    '<g class="head">'+
      '<g class="earL"><path d="M34 36 L24 2 L58 22 Z" fill="#1c1a1d"/><path d="M37 32 L31 12 L50 24 Z" fill="#9a5a26"/></g>'+
      '<g class="earR"><path d="M86 36 L96 2 L62 22 Z" fill="#1c1a1d"/><path d="M83 32 L89 12 L70 24 Z" fill="#9a5a26"/></g>'+
      '<circle cx="60" cy="46" r="28" fill="#9a5a26"/>'+
      '<path d="M32 44 C34 18 86 18 88 44 C82 30 70 27 60 28 C50 27 38 30 32 44 Z" fill="#1c1a1d"/>'+
      '<path d="M45 34 q5 -3 10 0 M65 34 q5 -3 10 0" stroke="#d9a066" stroke-width="3" stroke-linecap="round" fill="none"/>'+
      '<path d="M44 58 C46 48 74 48 76 58 C76 68 68 74 60 74 C52 74 44 68 44 58 Z" fill="#1c1a1d"/>'+
      '<ellipse cx="60" cy="63" rx="12" ry="8" fill="#3b2a20"/>'+
      '<ellipse cx="60" cy="57" rx="7" ry="5" fill="#0a0808"/><ellipse cx="57.5" cy="55.5" rx="1.9" ry="1.2" fill="#fff" opacity=".65"/>'+
      '<path d="M60 61 v3.5 M54.5 64.5 q5.5 4.5 11 0" stroke="#0a0808" stroke-width="1.7" fill="none" stroke-linecap="round"/>'+
      '<g class="tongue"><path d="M57 67 q3 8 6 0 v-2 h-6 z" fill="#ff7f9e"/><path d="M60 67 v5" stroke="#e85c80" stroke-width="1"/></g>'+
      '<g class="eyes"><ellipse cx="48.5" cy="45" rx="5.2" ry="6.2" fill="#2a1a10"/><ellipse cx="71.5" cy="45" rx="5.2" ry="6.2" fill="#2a1a10"/><ellipse cx="48.5" cy="45.6" rx="3.1" ry="4" fill="#8a4a1c"/><ellipse cx="71.5" cy="45.6" rx="3.1" ry="4" fill="#8a4a1c"/><ellipse cx="48.5" cy="46" rx="1.7" ry="3.2" fill="#0d0a08"/><ellipse cx="71.5" cy="46" rx="1.7" ry="3.2" fill="#0d0a08"/><circle cx="50.5" cy="42.5" r="1.9" fill="#fff"/><circle cx="73.5" cy="42.5" r="1.9" fill="#fff"/></g>'+
      '<g class="lids"><rect x="42.5" y="38" width="12" height="14.5" rx="6" fill="#9a5a26"/><rect x="65.5" y="38" width="12" height="14.5" rx="6" fill="#9a5a26"/></g>'+
    '</g>'+
    '<path d="M40 66 C46 72 74 72 80 66 L80 72 C74 78 46 78 40 72 Z" fill="#ff7fb0"/><circle cx="60" cy="76" r="4" fill="#f5c451"/><circle cx="60" cy="76" r="1.6" fill="#b8860b"/>'+
    '</svg>' },

  cow: { name:'Moo', label:'cow', say:['moo', 'mooo', 'hm?'], svg:
    '<svg viewBox="0 0 120 120">'+
    '<g class="tail"><path d="M90 74 C104 78 106 92 100 102" fill="none" stroke="#fbf8f2" stroke-width="6" stroke-linecap="round"/><ellipse cx="100" cy="104" rx="5" ry="6" fill="#23201f"/></g>'+
    '<g class="legA"><rect x="35" y="84" width="12" height="22" rx="5" fill="#fbf8f2"/><rect x="35" y="101" width="12" height="7" rx="3" fill="#23201f"/><rect x="63" y="86" width="12" height="20" rx="5" fill="#fbf8f2"/><rect x="63" y="101" width="12" height="7" rx="3" fill="#23201f"/></g>'+
    '<g class="legB"><rect x="49" y="86" width="12" height="20" rx="5" fill="#fbf8f2"/><rect x="49" y="101" width="12" height="7" rx="3" fill="#23201f"/><rect x="77" y="84" width="12" height="22" rx="5" fill="#fbf8f2"/><rect x="77" y="101" width="12" height="7" rx="3" fill="#23201f"/></g>'+
    '<ellipse cx="60" cy="72" rx="33" ry="22" fill="#fbf8f2"/>'+
    '<path d="M29 70 C31 56 48 56 48 66 C47 78 31 82 29 70 Z" fill="#23201f"/><path d="M92 78 C90 64 74 66 72 76 C74 88 90 92 92 78 Z" fill="#23201f"/><path d="M56 84 C62 78 72 82 70 90 C64 92 56 92 56 84 Z" fill="#23201f"/>'+
    '<ellipse cx="60" cy="88" rx="14" ry="7" fill="#f6b4c2"/><circle cx="55" cy="90" r="1.6" fill="#d9879a"/><circle cx="60" cy="91" r="1.6" fill="#d9879a"/><circle cx="65" cy="90" r="1.6" fill="#d9879a"/>'+
    '<g class="head">'+
      '<path d="M46 26 C38 20 36 10 41 5 C47 10 50 18 50 26 Z" fill="#e9dcc2"/><path d="M74 26 C82 20 84 10 79 5 C73 10 70 18 70 26 Z" fill="#e9dcc2"/>'+
      '<g class="earL"><ellipse cx="33" cy="34" rx="11" ry="6.5" fill="#fbf8f2" class="abs" transform="rotate(-22 33 34)"/><ellipse cx="33" cy="34" rx="6.5" ry="3.5" fill="#f6b4c2" class="abs" transform="rotate(-22 33 34)"/></g>'+
      '<g class="earR"><ellipse cx="87" cy="34" rx="11" ry="6.5" fill="#fbf8f2" class="abs" transform="rotate(22 87 34)"/><ellipse cx="87" cy="34" rx="6.5" ry="3.5" fill="#f6b4c2" class="abs" transform="rotate(22 87 34)"/></g>'+
      '<circle cx="60" cy="40" r="24" fill="#fbf8f2"/>'+
      '<path d="M36 34 C40 18 58 18 59 32 C58 44 40 46 36 34 Z" fill="#23201f"/>'+
      '<ellipse cx="60" cy="53" rx="16" ry="9.5" fill="#f6b4c2"/><ellipse cx="53.5" cy="53" rx="2.4" ry="3" fill="#d9879a"/><ellipse cx="66.5" cy="53" rx="2.4" ry="3" fill="#d9879a"/>'+
      '<path d="M53 59 q7 4 14 0" stroke="#c9788c" stroke-width="1.5" fill="none" stroke-linecap="round"/>'+
      '<g class="eyes"><ellipse cx="48" cy="37" rx="4.8" ry="5.8" fill="#fff"/><ellipse cx="72" cy="37" rx="4.8" ry="5.8" fill="#23201f"/><ellipse cx="48.5" cy="37.5" rx="3.2" ry="4.2" fill="#23201f"/><circle cx="50" cy="35" r="1.6" fill="#fff"/><circle cx="74" cy="35" r="1.6" fill="#fff"/></g>'+
      '<g class="lids"><rect x="42.5" y="30.5" width="11" height="13" rx="5.5" fill="#23201f"/><rect x="66.5" y="30.5" width="11" height="13" rx="5.5" fill="#fbf8f2"/></g>'+
      '<circle cx="44" cy="47" r="3.6" fill="#ff9ab3" opacity=".5"/><circle cx="76" cy="47" r="3.6" fill="#ff9ab3" opacity=".5"/>'+
    '</g>'+
    '<path d="M44 58 C50 66 70 66 76 58 L76 63 C70 71 50 71 44 63 Z" fill="#7a4b2a"/><path d="M56 66 h8 l1.5 6 h-11 z" fill="#f5c451"/><circle cx="60" cy="73.5" r="1.5" fill="#7a4b2a"/>'+
    '</svg>' },

  penguin: { name:'Pip', label:'penguin', say:['squawk', 'brr', 'fish?'], svg:
    '<svg viewBox="0 0 120 120">'+
    '<g class="legA"><path d="M40 104 q-8 4 -3 7 h13 q4 -3 -2 -7z" fill="#f59e0b"/><path d="M40 108 h10" stroke="#d97706" stroke-width="1.4" stroke-linecap="round"/></g>'+
    '<g class="legB"><path d="M80 104 q8 4 3 7 h-13 q-4 -3 2 -7z" fill="#f59e0b"/><path d="M70 108 h10" stroke="#d97706" stroke-width="1.4" stroke-linecap="round"/></g>'+
    '<path d="M30 70 C30 44 38 26 60 22 C82 26 90 44 90 70 C90 92 78 106 60 106 C42 106 30 92 30 70 Z" fill="#242a3d"/>'+
    '<g class="flipL"><path d="M31 62 C18 70 20 88 30 96 C36 92 36 74 34 62 Z" fill="#1b2031"/></g>'+
    '<g class="flipR"><path d="M89 62 C102 70 100 88 90 96 C84 92 84 74 86 62 Z" fill="#1b2031"/></g>'+
    '<path d="M40 74 C40 58 80 58 80 74 C80 92 72 102 60 102 C48 102 40 92 40 74 Z" fill="#fbfbf7"/>'+
    '<g class="head">'+
      '<path d="M38 46 C38 28 46 20 60 20 C74 20 82 28 82 46 C82 56 74 60 60 62 C46 60 38 56 38 46 Z" fill="#242a3d"/>'+
      '<path d="M43 46 C43 32 50 28 60 30 C70 28 77 32 77 46 C77 55 70 58 60 59 C50 58 43 55 43 46 Z" fill="#fbfbf7"/>'+
      '<g class="eyes"><ellipse cx="51.5" cy="42" rx="4.6" ry="5.6" fill="#161a28"/><ellipse cx="68.5" cy="42" rx="4.6" ry="5.6" fill="#161a28"/><circle cx="53.3" cy="40" r="1.7" fill="#fff"/><circle cx="70.3" cy="40" r="1.7" fill="#fff"/></g>'+
      '<g class="lids"><rect x="46" y="35.5" width="11" height="13.5" rx="5.5" fill="#fbfbf7"/><rect x="63" y="35.5" width="11" height="13.5" rx="5.5" fill="#fbfbf7"/></g>'+
      '<path d="M60 48 l8 5 -8 6 -8 -6 z" fill="#f59e0b"/><path d="M52 53 l8 6 8 -6" fill="none" stroke="#d97706" stroke-width="1.4"/>'+
      '<circle cx="46" cy="50" r="3.8" fill="#ff9ab3" opacity=".5"/><circle cx="74" cy="50" r="3.8" fill="#ff9ab3" opacity=".5"/>'+
    '</g>'+
    '<path d="M38 62 C48 70 72 70 82 62 C78 68 74 70 72 70 L70 84 C66 86 62 84 62 82 L64 70 C52 70 46 68 38 62 Z" fill="#e5484d"/><path d="M62 74 h8" stroke="#c73a3f" stroke-width="1.6" stroke-linecap="round"/>'+
    '</svg>' },

  ladybug: { name:'Hailey', label:'ladybug', say:['\u2665', 'hi!', 'tee hee'], svg:
    '<svg viewBox="0 0 120 120">'+
    '<g class="legA"><path d="M36 66 L20 56 M38 78 L20 82 M44 90 L34 104" stroke="#1d1d22" stroke-width="3.6" stroke-linecap="round" fill="none"/></g>'+
    '<g class="legB"><path d="M84 66 L100 56 M82 78 L100 82 M76 90 L86 104" stroke="#1d1d22" stroke-width="3.6" stroke-linecap="round" fill="none"/></g>'+
    '<ellipse cx="60" cy="70" rx="28" ry="25" fill="#2a2a30"/>'+
    '<g class="wingL"><path d="M60 46 C40 46 30 60 32 78 C36 92 50 96 60 96 Z" fill="#e5303f"/><circle cx="46" cy="62" r="4.6" fill="#1d1d22"/><circle cx="42" cy="80" r="4" fill="#1d1d22"/><circle cx="54" cy="86" r="3.2" fill="#1d1d22"/><path d="M52 50 C44 52 38 58 36 66" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".28"/></g>'+
    '<g class="wingR"><path d="M60 46 C80 46 90 60 88 78 C84 92 70 96 60 96 Z" fill="#e5303f"/><circle cx="74" cy="62" r="4.6" fill="#1d1d22"/><circle cx="78" cy="80" r="4" fill="#1d1d22"/><circle cx="66" cy="86" r="3.2" fill="#1d1d22"/></g>'+
    '<path d="M60 47 v49" stroke="#1d1d22" stroke-width="2.4"/>'+
    '<g class="head">'+
      '<path d="M50 30 C46 22 40 18 36 16 M70 30 C74 22 80 18 84 16" stroke="#1d1d22" stroke-width="2.6" stroke-linecap="round" fill="none"/><circle cx="35" cy="15" r="3" fill="#1d1d22"/><circle cx="85" cy="15" r="3" fill="#1d1d22"/>'+
      '<circle cx="60" cy="40" r="15" fill="#1d1d22"/>'+
      '<ellipse cx="54" cy="33" rx="5" ry="3" fill="#fff" opacity=".18" class="abs" transform="rotate(-25 54 33)"/>'+
    '</g></svg>' },

  aki: { name:'Aki', label:'robot', say:['beep boop', 'hi, chase', '01101000 01101001', 'running diagnostics\u2026 all good', 'need a hand?'], svg:
    '<svg viewBox="0 0 120 120">'+
    '<g class="jets"><ellipse cx="60" cy="108" rx="22" ry="4" fill="#5ff2ff" opacity=".22"/><path class="jet" d="M48 96 q4 12 8 0z" fill="#8ff7ff"/><path class="jet" d="M64 96 q4 12 8 0z" fill="#8ff7ff"/></g>'+
    '<g class="armL"><rect x="27" y="66" width="11" height="22" rx="5.5" fill="#2b2f45" stroke="#454b6e" stroke-width="1.5"/><circle cx="32.5" cy="90" r="5.5" fill="#3a4060" stroke="#5ff2ff" stroke-width="1.2"/></g>'+
    '<g class="armR"><rect x="82" y="66" width="11" height="22" rx="5.5" fill="#2b2f45" stroke="#454b6e" stroke-width="1.5"/><circle cx="87.5" cy="90" r="5.5" fill="#3a4060" stroke="#5ff2ff" stroke-width="1.2"/></g>'+
    '<rect x="38" y="60" width="44" height="38" rx="15" fill="#2b2f45" stroke="#454b6e" stroke-width="1.5"/>'+
    '<rect x="44" y="66" width="32" height="26" rx="10" fill="#222638"/>'+
    '<circle class="core glow" cx="60" cy="77" r="7.5" fill="#5ff2ff"/><circle cx="60" cy="77" r="3.5" fill="#fff" opacity=".85"/>'+
    '<path d="M49 88 h22" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity=".8"/><circle cx="49" cy="88" r="1.6" fill="#a78bfa"/><circle cx="71" cy="88" r="1.6" fill="#a78bfa"/>'+
    '<g class="head">'+
      '<g class="ant"><path d="M60 26 v-12" stroke="#454b6e" stroke-width="2.4" stroke-linecap="round"/><circle class="bulb glow" cx="60" cy="11" r="4" fill="#a78bfa"/></g>'+
      '<g class="earL"><rect x="30" y="38" width="8" height="14" rx="3" fill="#3a4060" stroke="#454b6e" stroke-width="1.2"/><rect x="32" y="42" width="4" height="6" rx="2" fill="#5ff2ff" opacity=".9"/></g>'+
      '<g class="earR"><rect x="82" y="38" width="8" height="14" rx="3" fill="#3a4060" stroke="#454b6e" stroke-width="1.2"/><rect x="84" y="42" width="4" height="6" rx="2" fill="#5ff2ff" opacity=".9"/></g>'+
      '<rect x="36" y="26" width="48" height="36" rx="16" fill="#2b2f45" stroke="#454b6e" stroke-width="1.5"/>'+
      '<rect x="41" y="32" width="38" height="21" rx="10.5" fill="#0e1220"/>'+
      '<path d="M44 36 q14 -4 32 0" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".12"/>'+
      '<g class="eyes"><rect class="glow" x="47" y="39" width="9" height="7" rx="3.5" fill="#5ff2ff"/><rect class="glow" x="64" y="39" width="9" height="7" rx="3.5" fill="#5ff2ff"/><rect x="49" y="40.5" width="3" height="2" rx="1" fill="#fff" opacity=".9"/><rect x="66" y="40.5" width="3" height="2" rx="1" fill="#fff" opacity=".9"/></g>'+
      '<g class="eyesHappy"><path d="M46 45 q5.5 -7 11 0 M63 45 q5.5 -7 11 0" stroke="#5ff2ff" stroke-width="2.6" stroke-linecap="round" fill="none"/></g>'+
      '<g class="lids"><rect x="45" y="37" width="13" height="11" rx="4" fill="#0e1220"/><rect x="62" y="37" width="13" height="11" rx="4" fill="#0e1220"/></g>'+
      '<g class="mouth"><rect x="52" y="56" width="4" height="2.4" rx="1.2" fill="#5ff2ff" opacity=".75"/><rect x="58" y="56" width="4" height="2.4" rx="1.2" fill="#5ff2ff" opacity=".75"/><rect x="64" y="56" width="4" height="2.4" rx="1.2" fill="#5ff2ff" opacity=".75"/></g>'+
    '</g>'+
    '<text x="60" y="95.5" text-anchor="middle" font-family="ui-monospace, Menlo, monospace" font-size="4.6" font-weight="700" letter-spacing=".6" fill="#8b93b8">AKI</text>'+
    '</svg>' }
};
/* Tig the tiger: the cat's drawing in tiger colours (orange coat, black stripes, amber eyes, cream muzzle) */
window.TIG_PETS.tiger = { name:'Tig', label:'tiger', say:['rawr', 'grr', 'hi, chase', 'tigOS!'], svg: window.TIG_PETS.cat.svg.replace(/#f2a24d/g, '#ff8a00').replace(/#c96f22/g, '#1c1a1d').replace(/#e0862f/g, '#ff8a00').replace(/#ffb7c8/g, '#ffd9b3').replace(/#ffe8cf/g, '#fff3e0').replace(/#4b8f6a/g, '#f5b301').replace(/#ff9ab3/g, '#ffffff') };
window.TIG_PETS.alien = { name:'Zorp', label:'alien', say:['greetings, earthling', 'take me to your leader', '\u25c9_\u25c9', 'your planet is fine, mostly', 'bleep?'], svg:
  '<svg viewBox="0 0 120 120">'+
  '<g class="legA"><rect x="48" y="94" width="8" height="16" rx="4" fill="#7ee081"/><ellipse cx="52" cy="110" rx="7" ry="3.5" fill="#5b6280"/></g>'+
  '<g class="legB"><rect x="64" y="94" width="8" height="16" rx="4" fill="#7ee081"/><ellipse cx="68" cy="110" rx="7" ry="3.5" fill="#5b6280"/></g>'+
  '<ellipse cx="60" cy="82" rx="15" ry="18" fill="#7ee081"/><rect x="45" y="66" width="30" height="6" rx="3" fill="#5b6280"/>'+
  '<g class="armL"><path d="M46 76 q-12 8 -10 20" stroke="#7ee081" stroke-width="6" stroke-linecap="round" fill="none"/></g><g class="armR"><path d="M74 76 q12 8 10 20" stroke="#7ee081" stroke-width="6" stroke-linecap="round" fill="none"/></g>'+
  '<g class="head"><g class="ant"><path d="M48 24 q-8 -10 -4 -16" stroke="#3f9a58" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="44" cy="8" r="4" fill="#ff7ad9"/><path d="M72 24 q8 -10 4 -16" stroke="#3f9a58" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="76" cy="8" r="4" fill="#ff7ad9"/></g>'+
  '<ellipse cx="60" cy="44" rx="26" ry="28" fill="#7ee081"/>'+
  '<g class="eyes"><ellipse cx="48" cy="46" rx="8" ry="11" fill="#1a1618" transform="rotate(-14 48 46)"/><ellipse cx="72" cy="46" rx="8" ry="11" fill="#1a1618" transform="rotate(14 72 46)"/><ellipse cx="60" cy="28" rx="3.5" ry="5" fill="#1a1618"/><circle cx="46" cy="42" r="2.4" fill="#fff"/><circle cx="70" cy="42" r="2.4" fill="#fff"/></g>'+
  '<g class="lids"><ellipse cx="48" cy="46" rx="8.5" ry="11.5" fill="#7ee081" transform="rotate(-14 48 46)"/><ellipse cx="72" cy="46" rx="8.5" ry="11.5" fill="#7ee081" transform="rotate(14 72 46)"/></g>'+
  '<rect x="55" y="62" width="10" height="2.4" rx="1.2" fill="#3f9a58"/></g>'+
  '</svg>' };
window.TIG_PETS.llama = { name:'Kuzco', label:'llama', say:['hmmmm', 'no drama', 'mwah', 'boom, baby', '*chews*'], svg:
  '<svg viewBox="0 0 120 120">'+
  '<g class="tail"><ellipse cx="98" cy="72" rx="6" ry="8" fill="#f3e6cf"/></g>'+
  '<g class="legA"><rect x="52" y="84" width="9" height="26" rx="4.5" fill="#f3e6cf"/><ellipse cx="56.5" cy="110" rx="6" ry="3" fill="#d7c0a0"/><rect x="82" y="84" width="9" height="26" rx="4.5" fill="#f3e6cf"/><ellipse cx="86.5" cy="110" rx="6" ry="3" fill="#d7c0a0"/></g>'+
  '<g class="legB"><rect x="62" y="84" width="9" height="26" rx="4.5" fill="#f3e6cf"/><ellipse cx="66.5" cy="110" rx="6" ry="3" fill="#d7c0a0"/><rect x="72" y="84" width="9" height="26" rx="4.5" fill="#f3e6cf"/><ellipse cx="76.5" cy="110" rx="6" ry="3" fill="#d7c0a0"/></g>'+
  '<ellipse cx="72" cy="76" rx="28" ry="18" fill="#f3e6cf"/>'+
  '<path d="M56 62 h32 v18 h-32z" fill="#e23c3c"/><rect x="62" y="62" width="7" height="18" fill="#63e6be"/><rect x="75" y="62" width="7" height="18" fill="#ffd166"/><rect x="54" y="78" width="36" height="4" fill="#ffd166"/>'+
  '<path d="M50 74 q-4 -22 4 -40" stroke="#f3e6cf" stroke-width="14" stroke-linecap="round" fill="none"/>'+
  '<g class="head"><g class="earL"><ellipse cx="44" cy="20" rx="3.5" ry="9" fill="#f3e6cf" transform="rotate(-12 44 20)"/></g><g class="earR"><ellipse cx="58" cy="20" rx="3.5" ry="9" fill="#f3e6cf" transform="rotate(12 58 20)"/></g>'+
  '<circle cx="46" cy="26" r="5" fill="#f3e6cf"/><circle cx="54" cy="25" r="5" fill="#f3e6cf"/><circle cx="50" cy="22" r="5" fill="#f3e6cf"/>'+
  '<ellipse cx="50" cy="34" rx="12" ry="11" fill="#f3e6cf"/><ellipse cx="42" cy="40" rx="8" ry="6.5" fill="#d7c0a0"/><circle cx="38" cy="39" r="1.4" fill="#2a2226"/><circle cx="42" cy="41" r="1.4" fill="#2a2226"/>'+
  '<g class="eyes"><circle cx="46" cy="31" r="3" fill="#1a1618"/><circle cx="56" cy="31" r="3" fill="#1a1618"/><circle cx="47" cy="30" r="1" fill="#fff"/><circle cx="57" cy="30" r="1" fill="#fff"/></g>'+
  '<g class="lids"><circle cx="46" cy="31" r="3.4" fill="#f3e6cf"/><circle cx="56" cy="31" r="3.4" fill="#f3e6cf"/></g></g>'+
  '</svg>' };
window.TIG_UFO = '<svg viewBox="0 0 160 100">'+
  '<g class="ufo-beam"><path d="M58 58 L12 100 H148 L102 58 Z" fill="url(#ufoBeam)"/></g>'+
  '<defs><linearGradient id="ufoBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fffb0" stop-opacity=".85"/><stop offset="1" stop-color="#8fffb0" stop-opacity="0"/></linearGradient><radialGradient id="ufoDome" cx=".5" cy=".4" r=".6"><stop offset="0" stop-color="#d9f7ff" stop-opacity=".95"/><stop offset="1" stop-color="#6fc3ff" stop-opacity=".55"/></radialGradient></defs>'+
  '<g class="ufo-ship">'+
    '<ellipse cx="80" cy="52" rx="20" ry="8" fill="#8fffb0" opacity=".55"/>'+
    '<ellipse cx="80" cy="30" rx="26" ry="18" fill="url(#ufoDome)"/><ellipse cx="72" cy="22" rx="8" ry="4" fill="#fff" opacity=".55"/>'+
    '<ellipse cx="80" cy="44" rx="56" ry="14" fill="#5b6280"/><ellipse cx="80" cy="41" rx="56" ry="12" fill="#8a92b8"/><ellipse cx="80" cy="39" rx="46" ry="7" fill="#b9c0e0" opacity=".7"/>'+
    '<g class="ufo-lights"><circle cx="34" cy="46" r="3.2"/><circle cx="52" cy="50" r="3.2"/><circle cx="80" cy="52" r="3.2"/><circle cx="108" cy="50" r="3.2"/><circle cx="126" cy="46" r="3.2"/></g>'+
  '</g></svg>';

window.TIG_ASSETS = {"apple_abe":"assets/apple_abe-74c520ba.webp","apple_story":"assets/apple_story-ab08fad7.webp","eb_banner":"assets/eb_banner-75b8347f.webp","eb_desktop":"assets/eb_desktop-ffaab384.webp","eb_phones":"assets/eb_phones-22b048b3.webp","guns":"assets/guns-66ed52d2.glb","haunt":"assets/haunt-f5a021cf.glb","headshot":"assets/headshot-e073c9c4.webp","hub_email2":"assets/hub_email2-571e2eab.webp","hub_email4":"assets/hub_email4-d939ee7c.webp","hub_packet":"assets/hub_packet-2c59872a.webp","hub_support":"assets/hub_support-a75baba2.webp","jm_email":"assets/jm_email-1cab3011.webp","jm_menu":"assets/jm_menu-054d3d33.webp","jm_photo":"assets/jm_photo-3ae1b18a.webp","props":"assets/props-b05c2297.glb","resume_pdf":"assets/resume_pdf-c3f7600a.pdf","resume_preview":"assets/resume_preview-26edbf02.webp","tank":"assets/tank-b7b1ded3.glb","three":"assets/three-fef2a638.js","tig_aleppo":"assets/tig_aleppo-ed307995.webp","tig_mba":"assets/tig_mba-2622ce0c.webp","tig_site":"assets/tig_site-82ca23e5.webp","train":"assets/train-a288cfc4.glb","wraith":"assets/wraith-04534956.glb","zombie":"assets/zombie-867e73b1.glb","zoo":"assets/zoo-200635e2.glb","games":"assets/games-1979f8a0.js","nightshift":"assets/nightshift-7c032dcf.js","rounds":"assets/rounds-d07c9c89.js","tanks":"assets/tanks-3223325d.js","ghostrun":"assets/ghostrun-9a6f6d6d.js"};
window.TIG_INLINE = {"missing_photo":"data:image/webp;base64,UklGRowNAABXRUJQVlA4IIANAACwMgCdASpgAHAAPjkWiEMiISEYbc78IAOEtIAK8T/sfav/YvBn8W+Xfv/5ZesFin6Z/8T0G/k32e/NfmT6l94PwW1AvxX+Vf5b8y/y0+V34fsNtS/0foBexP1z/hfcB6QX9d6AfXn2AP5V/Sv9f+a/up/lPAG+nf5P9XfgA/m/9j/6/+Z/bD/R/R/++f+P/S/l17F/zb/D/+j/P/535Af5r/V/+V/h/3e/y///+lL7+Plz+qf37/Ql+nv34K/gA9+XWnYphcQ6V9UR3A/4F5trfQtzLyXu8uEmK3LJNq107RibWjJri046LMwFYhCLZsy+g0FlvtVt/hgsLAogh2AWlVxaN1M3JZU2NzKd7h0cvKp2+5BoHNll7E9V3Yozs7EHhHbba6YWoYaNspt8NlufQMKHf37PSn0pnGw5E328qmGEEPDRurMp4tX/eh+vfMz/rBepMr7skqCMuotVuof7TAb3JfQgaJ25gvGO8RoEfi71plpdSlzzIszE8ewLM2pxtLn+NDLoFEiu50o60YrjZDfuGweeurfH+uvr0wAA/vt2ZpaMQXm73mtDCTU123ydWQ2cHT4xOjKCfSbZ058LI80ZlMNPljrDOd6lhIfhXghQeSeWRvp1VLYEqr/A7RpNN8jFoQA+jdv/xBs36oQaeppMqdiJheQE/w1qjfVPvnE86GKwfjaFvoYtoFQAmHvhpv1SeQDO9wtPTg5O4KiqNB7vVcJmJfzj+QSm/2CWII++GutxV12AUjoS9/5pDJcFhnFJQwlZ5DG7ywoKMPKx1XJoh7H0mlHyp7nMjsDtS/fT62WwTYRqv1T6Yonxe0qHxuQrunovmf3KU1N7TwWHbt+zgkfvWB5LdLzULkbWhH/H6+x783E5v8oM8Wuo6RNhtI7I3yzZk7lWwgZwrI80YZ5HFT8mhEewD7XxqGdFvQZfmJliJhUlr9YRv8p9dvfzD/U9lZruANAHMIFhIYsyL6grRdtQ37D8fe8IWgFefHYFODnXtG1CWphgwvx3naKzCVY3f1B8hrFOdVO4FQ8X+EJ8VNIa5GiQc7Gxn76KK7VHEs7kOI4Zc6JZXLaxyUsq9Go/VmHcswllxnuF8cnd9o7tmyhVOOAuc1420xp51bGch3qGaX31lHXccqtvecwU+/XMohiUkKjwLt2QG6l6HObX0A8wLq6gIj5PAGagy6O0w6mSgvTp+31bffhXmeXkFH4CQmulvvjRuktNQgscodqjSZorpMP9k8a/WoaPMoZ3Hw+9NrjZwMSgsAe1F/SCup7a5RfRcG9+RsqgrGb+FY2GbPrUG/4Ae+39vvb4eNrZjmPzjPrOuiG86L1ICtPdq3WfdVX7Vb0Jq2l4qr0BTwrfU4ubvUecUa6xsjgK0Nuyxt5JAIQDwffp+KcE8E35RRTEi9QDEC8zEod6CnDERJAeK6sOgWQcDKSyfkEp8vvtbSOoBfCOTr/KJpiZUhZbRTBa7WkrMJtUXPhtsf4l7hp7u/63Z1f7bekNyvZ0vcnbVcZzKwAQbxUoG4g0eNClkAurjQOR/xJt4HgtTpR4yq5EgGtK1tt9SyW94uSMomex6Bv/HHI+M+cH+AAjQZetrj2freLoK/jn3gYr9UVVzbU0MDY6ozvGefSjnrbfbyQ4nGrloTpfv6lTjDl9H5dCG4pYqVly3zMiJABFke6LZCMf7Z9pgxnKSVl6ngeCzOzX/mU5NUaZ9APz9HRwHZBwAcPMkoZ7SmUeiEq8bOxVVMqn83jVuDSsBgUn+pkpfT8YlG9SP1NBhltnhTGhwWk/CWP45NZWEAH5JSabHWItiKJTMOu+lVk3eIcfVfyBMJePyFC9G4pe6VHKd+sGzMWh8c16PifFv/86nkVI3bqWLFOfB2HhUwqmJ5xMsUcHKErg2XFEQv4XuIBNS6I8rZO85tpv8FO/iAl9FkL4Wm/96BzJFNJ+0h20pP0GXHridI86vrD5AOLah1SBVE9sheH+1+5YD8TwCIOnqZ52rHj089agZ2LG6BtC+cnlSirf14JPkamFwFSJmGIpfMqCMgus45N68NgzG5R/47akWZ3mJUybZ3eTb5sNvaJ6AKAAOK2Ufl9xQgz7a8Je1auDYZUQwePceDaATJ4Tjs7TGtjKBBSkbt6dq47rZGlBEcbrAySVxyoJschh5tr4stzs01CXyDQGf3HHlMvyfTFUK09HS5GKN83dfn9wXezIRqQVgf6+KKBG9vCMB2vZHMk3RuliSwDzfUe0MUSuqehQjC6vyyVNxZ1f1ZORKBQeQHPO5eaB5LNNUZjHp6NjO+4DVMr3itNjU1RNWbEQ7IuosAGJe3W/LCGVYz/ADXQAvh+3kupEYj4C9HuwYuTqoiLKsyVRQEqGi6FRmWweP8ThkMnpuxk7Pb02lzCszx6aNRUTYXxM7H0TwtoAobRhLUAK7PnPFFDC07WNt2iSCT+I9FGv8cds6NAQnCEG3gzPbtsbeI0mehFNdvp/d3LKUH056mMdcSy50m9Njbgs05jzo5UMjNy498Tu8/4MuUGZ4hhShyiPsciRBpVZ3VaNI9uW50eAWF0vNQgtBq1/4Jzbd28zWRIOUVQRMJW3AihonW4ZzAv1IpgbTSfLDUU0I1T8DIPZiW/p6HUJs0SOMI7l3AA7380ed83WAuajvbvVTth+kmS1ER8EeXKACkz9D6GA1tUWPWXVxYzJOQwI9XGO6boS6OwSQmuhGoVknFibk5IwegHQVh4S/6eeUxOybQYhD2QkCM1bMxKsr3HlgbU5fjrlRFii53zTK9+OoLT4As74t8Pxohz/atLXWlWjSR0ht+1T4rzl8ER4fmRVlSr5B/4DPGyxNGa/+ON9GYftyVyOz0wq6gJzlaurHWa+wZqOd6O+cC+oCBVQTqGx2ZFsJTq23AdLNI8m2Vz7KqM92n4exXH1PGbCTDXT3R0EMhtcY85jLg7AEhBgnu+5UXR+/vnYKJokAO71on2I4eFrQUe7Qqhv3a7MrL4+AHheHY/EH8KPPRCr2V70mpyxAcOcFxwK2PzND2PC8ALB92kBMgfSQs8eT1udPtKmGuDfIVZOLIs/SvAA08gAH5QYdKoUIq8I3wbk0iZJ1g90Ow4E0udw/6g75ev/iA7MxC2SmhnIOJVN67Y+zT+x/zk+7hHNJH6EJ+6Yx9vvG2iAhV70vn719iFz5N7T/3gbr6KYDpAGWijNjmxt3Veo65zMqUvFd+qk3VS3+cgjW/4RWFYv/5YvDwf9qIa5VBWfbRYGvADZmufdHSVDDvjl8+tHO0oRNEGXKwJFmZZxeJRsE9Cuw/de33jd3gLcXwVGfRXIcOyWOCo7nwEoCmPRiZQO8XbUn7mZZRT1V/9mL1GZ0za/mLKlkfnJdqH1C7MhGRWdP+cAwdQynzA3VLaVLSEefsKDLB8143lf8KPIoaXxqeMJhowQqpMgnZXpbSPdLNMOyEclWgfam5R9mYASsZiCtMBrYr2TEg4ekTM+iufqQXUQ8vR2jp371E7FVXF0vLsrjUhzoGourfwCT14KE8yBcu/3sGe1gOM1Q/Ds6RTweuWf1DUrzzHqpDyR8sTxYQ2L7YxyF/fIPL7nVpMX2XtTTbiKlHYE6cHsdimtLEOIt8vCT8yfJI/l+Z/3vWSzO7MtTQJvWvUPvPUdEHo0IIohvn4ilnjK5xjL70rrwDa+LvaENW0VVBZ64CoXrkV41S/X1ne/tdf+FU9GQVWYRGJXbhseQGti3qAqjmk7zXtd2lToaTkL0UMnL4jqGlPj/lS1WkwuBvpxXWPmolAA5FzbWRacB7AKB41elzv2MtsTUbaMrUrs87qGalClsB7693fE8Kys69UZkVPhF5NauMTMC0l1kqELEGpTiNFY/fSj4x3gJYAv3WtJyNWPZzw1Y3xzRikiWadEh0MfrJOzcLX5eBQKJ+4Gh1YlnwUKgu3JRR5cGe67pLiJubM2VyBDne+KyFbXhMqCU8lbGfUJuLEWLOZWHA/pwbUqU0iu95gB7cKl48NhAouTqbJiGN3AKvTJQGLe4hKDvgwOUUAzsQ93wRXEceqFK3u/eBZTa3kd4Xbg2YaoIlUQ/Rm9TWtVu5khEGonb5bMZQjn/Ty2iWPASwW4efEl6bhk72lDo2R4Awox/g9HmAv+iDLX5neyMQbOos3WZ+BEkWefF2hbnEfqBiYJXsH0USiVDI8vei9qAxtAzrw+rM78Q1vqIgPNexbndNvOyAa3X+j62X2SFCtm9tNxmzfwPkX7BJBoqWrp7JYTFz4VFk/B3+GebJ19bgTriVjm44uK1JMneyrnebk2aweR67i12sYUVhp2MtW+uo+HDYTs6cIkz4qbditlYAj/1ZTEZ7ObNnrXoMSwCy7Jq5KkeAUkZjPDeeECk6iMG7549b6vbVA1sEJZVBAuWsitA0a+4sM55mGwmnV7pledzSGMTw1RQEIO53saInsRywi35o21uvvT4+CJTFleKP4r5M0ILRMdaapZ+R7o9MkH/SE3v3LI1/CUV9QnYt+bRX0RmAgiwiNSr9QF8KwMp67qT2y3OitAaM3/aMZ8T4MwMp/T27KB8K22cgHG8FP1VmL/+OYbFLxqGcKE+ED/utYQ5QAAAAA="};
/* tigOS core app.js, part 00: setup. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
(function(){
  'use strict';
  var root = document.getElementById('tigos'); if(!root) return;
  try { if(window.self !== window.top) root.classList.add('framed'); } catch(e){ root.classList.add('framed'); }
  var $ = function(s, c){ return (c||root).querySelector(s); };
  var $$ = function(s, c){ return Array.prototype.slice.call((c||root).querySelectorAll(s)); };
  var isMobile = function(){ return window.matchMedia('(max-width:760px)').matches; };
  /* isMobile is the layout (full-screen windows, the bottom dock). isPhone is the device: a phone held either way, or a window as narrow as one.
     A phone keeps tigOS simple: no Terminal at all, no Trash in the dock, no desktop icons or folders, short menus. A tablet in the same
     layout (an iPad mini upright is 744 px) keeps all of it */
  var PHONE_MQ = '(max-width:540px), (pointer:coarse) and (max-height:540px)';
  var isPhone = function(){ return window.matchMedia(PHONE_MQ).matches; };
  root.classList.toggle('phone', isPhone());
  var esc = function(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
  var A = window.TIG_ASSETS || {};
  var img = function(key, alt, cls){ return A[key] ? '<img src="'+A[key]+'" alt="'+esc(alt||'')+'" loading="lazy" decoding="async"'+(cls?' class="'+cls+'"':'')+'>' : ''; };
  var ic = function(id){ return '<svg viewBox="0 0 24 24"><use href="#i-'+id+'"/></svg>'; };

/* tigOS core app.js, part 01: apps registry. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- apps registry ---------------- */
  var APPS = {
    about:      { title:'About Chase',  icon:'about',      tile:'about',      w:860, h:660 },
    projects:   { title:'Projects',     icon:'projects',   tile:'projects',   w:940, h:700 },
    experience: { title:'Experience',   icon:'exp',        tile:'experience', w:880, h:700 },
    journey:    { title:'Journey',      icon:'journey',    tile:'journey',    w:980, h:660 },
    resume:     { title:'Resume',       icon:'resume',     tile:'resume',     w:980, h:720 },
    skills:     { title:'Skills',       icon:'skills',     tile:'skills',     w:820, h:640 },
    contact:    { title:'Contact',      icon:'contact',    tile:'contact',    w:720, h:620 },
    terminal:   { title:'Terminal',     icon:'terminal',   tile:'terminal',   w:760, h:480, desk:true },   /* a desk app too: a phone has no Terminal anywhere (dock, menus, Spotlight) */
    settings:   { title:'Settings',     icon:'gear',       tile:'settings',   w:640, h:600 },
    games:      { title:'Arcade',       icon:'gamepad',    tile:'games',      w:900, h:680, hidden:true },   /* hidden apps: no dock, no default Spotlight list, no ls. The terminal (`game`, `pets`) or a Spotlight search by name opens them */
    pets:       { title:'Pets',         icon:'paw',        tile:'paw',       w:820, h:620, hidden:true },
    /* desk apps: files live on a desktop, so a desktop or a tablet only (a phone has none). Jot and Den are hidden too: Spotlight, the right-click menus and the terminal find them */
    jot:        { title:'Jot',          icon:'jot',        tile:'jot',        w:860, h:580, hidden:true, desk:true },
    den:        { title:'Den',          icon:'den',        tile:'den',        w:820, h:520, hidden:true, desk:true }
  };
  var VIS = function(){ return Object.keys(APPS).filter(function(k){ return !APPS[k].hidden && !appGone(k); }); };   /* an app removed from Terminal (27-shell.js) is gone from every list until it is reinstalled */
  var DOCK_ORDER = ['about','projects','experience','journey','resume','skills','contact','terminal'];

/* tigOS core app.js, part 02: toast. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- toast ---------------- */
  var toastEl = $('#toast'), toastT;
  function toast(title, sub, icon){
    $('#toastText').textContent = title; $('#toastSub').textContent = sub || '';
    var ti = $('#toastIco'); if(icon){ ti.innerHTML = ic(icon); ti.hidden = false; } else { ti.hidden = true; }
    toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function(){ toastEl.classList.remove('show'); }, 2600);
  }

/* tigOS core app.js, part 03: cities. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- cities (time + weather follow the chosen city; New York is home) ---------------- */
  var CITIES = [
    { id:'nyc', name:'New York',     short:'NYC', tz:'America/New_York',    lat:40.7128,  lon:-74.006 },
    { id:'sea', name:'Seattle',      short:'SEA', tz:'America/Los_Angeles', lat:47.6062,  lon:-122.3321 },
    { id:'la',  name:'Los Angeles',  short:'LA',  tz:'America/Los_Angeles', lat:34.0522,  lon:-118.2437 },
    { id:'sf',  name:'San Francisco',short:'SF',  tz:'America/Los_Angeles', lat:37.7749,  lon:-122.4194 },
    { id:'bos', name:'Boston',       short:'BOS', tz:'America/New_York',    lat:42.3601,  lon:-71.0589 },
    { id:'chi', name:'Chicago',      short:'CHI', tz:'America/Chicago',     lat:41.8781,  lon:-87.6298 },
    { id:'aus', name:'Austin',       short:'AUS', tz:'America/Chicago',     lat:30.2672,  lon:-97.7431 },
    { id:'bna', name:'Nashville',    short:'BNA', tz:'America/Chicago',     lat:36.1627,  lon:-86.7816 },
    { id:'den', name:'Denver',       short:'DEN', tz:'America/Denver',      lat:39.7392,  lon:-104.9903 },
    { id:'mia', name:'Miami',        short:'MIA', tz:'America/New_York',    lat:25.7617,  lon:-80.1918 },
    { id:'lon', name:'London',       short:'LDN', tz:'Europe/London',       lat:51.5074,  lon:-0.1278 },
    { id:'tyo', name:'Tokyo',        short:'TYO', tz:'Asia/Tokyo',          lat:35.6762,  lon:139.6503 }
  ];
  var CITY = CITIES[0];
  function cityTime(){
    try { var parts = new Intl.DateTimeFormat('en-US', { timeZone:CITY.tz, hour:'2-digit', minute:'2-digit', hour12:false, weekday:'short', month:'short', day:'numeric' }).formatToParts(new Date()); var g = {}; parts.forEach(function(x){ g[x.type] = x.value; }); return { t:(g.hour === '24' ? '00' : g.hour)+':'+g.minute, d:g.weekday+' '+g.month+' '+g.day }; }
    catch(e){ var d = new Date(), h = d.getHours(), m = d.getMinutes(); return { t:(h<10?'0':'')+h+':'+(m<10?'0':'')+m, d:'' }; }
  }
  function cityHour(){ try { return +new Intl.DateTimeFormat('en-US', { timeZone:CITY.tz, hour:'numeric', hour12:false }).format(new Date()).replace(/^24$/, '0'); } catch(e){ return new Date().getHours(); } }
  function greeting(){ var h = cityHour(); return h < 5 ? { t:'Still up?', s:'It is late in '+CITY.name+'. Picking up where you left off.', i:'moon' } : h < 12 ? { t:'Good morning', s:'Coffee first. Then the portfolio.', i:'coffee' } : h < 17 ? { t:'Good afternoon', s:'Picking up where you left off.' } : { t:'Good evening', s:'Picking up where you left off.', i:'moon' }; }
  function tick(){
    var ct = cityTime();
    var lc = $('#loginClock'); if(lc && !$('#login').hidden) lc.innerHTML = '<small>'+esc(ct.d)+'</small>'+ct.t;
    $('#mbClock').textContent = isMobile() ? ct.t : ct.d+'  '+ct.t;
    var sc = $('#sleepClock'); if(sc && !$('#sleep').hidden){ sc.textContent = ct.t; var sd = $('#sleepDate'); if(sd) sd.textContent = ct.d+' \u00b7 '+CITY.name;
      var sx = $('#sleepWx'); if(sx){ if(WX.now){ sx.innerHTML = ic(WX.now.kind)+'<span>'+WX.now.t+'\u00b0 \u00b7 '+esc(WX.now.label)+'</span>'; sx.hidden = false; } else sx.hidden = true; } }
  }
  tick(); setInterval(tick, 15000);
  function setCity(c){ CITY = c; $('#mbLocName').textContent = c.name; $('#wxCityName').textContent = c.name; tick(); weather(); $$('#cityList button').forEach(function(b){ b.classList.toggle('sel', b.getAttribute('data-city') === c.id); }); }

/* tigOS core app.js, part 04: weather. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- weather (Open-Meteo, no key, CORS open; hidden on failure) ---------------- */
  function wxKind(code, day){
    if(code === 0) return day ? 'sun' : 'moon';
    if(code <= 2) return day ? 'partly' : 'moon';
    if(code === 3) return 'cloud';
    if(code === 45 || code === 48) return 'fog';
    if(code >= 95) return 'storm';
    if((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
    return 'rain';
  }
  var WX_LABEL = { sun:'Clear', moon:'Clear night', partly:'Partly cloudy', cloud:'Cloudy', fog:'Fog', rain:'Rain', snow:'Snow', storm:'Thunderstorms' };
  var WX = { days:[] };
  /* one fetch for any city; resolves { now:{kind,t,label}, days:[{d,k,hi,lo}] } or null */
  function wxFetch(c){
    if(!window.fetch) return Promise.resolve(null);
    var url = 'https://api.open-meteo.com/v1/forecast?latitude='+c.lat+'&longitude='+c.lon+'&current=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=4&temperature_unit=fahrenheit&timezone='+encodeURIComponent(c.tz);
    return fetch(url, { mode:'cors' }).then(function(r){ return r.ok ? r.json() : null; }).then(function(j){
      if(!j || !j.current) return null;
      var kind = wxKind(+j.current.weather_code, +j.current.is_day === 1), out = { now:{ kind:kind, t:Math.round(+j.current.temperature_2m), label:WX_LABEL[kind] }, days:[] };
      if(j.daily && j.daily.time){
        var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        for(var i = 1; i < j.daily.time.length && out.days.length < 3; i++){
          var dt = new Date(j.daily.time[i]+'T12:00:00'), k = wxKind(+j.daily.weather_code[i], true);
          out.days.push({ d:(i === 1 ? 'Tmrw' : days[dt.getDay()]), k:k, hi:Math.round(+j.daily.temperature_2m_max[i]), lo:Math.round(+j.daily.temperature_2m_min[i]) });
        }
      }
      return out;
    }).catch(function(){ return null; });
  }
  function weather(){
    var c = CITY;
    wxFetch(c).then(function(w){
      if(!w || c !== CITY) return;
      $('#wxCity').textContent = c.short+' weather';
      var el = $('#mbWx'); el.className = 'mb-wx '+w.now.kind; el.setAttribute('aria-label', w.now.label+' in '+c.name+', '+w.now.t+'\u00b0F. Hover for the 3 day forecast.');
      $('#mbWxIcon').setAttribute('href', '#i-'+w.now.kind); $('#mbWxTemp').textContent = w.now.t+'\u00b0'; el.hidden = false;
      WX.now = w.now; WX.days = w.days;
      $('#wxDays').innerHTML = WX.days.length ? WX.days.map(function(d){ return '<div class="wx-day '+d.k+'"><b>'+d.d+'</b>'+ic(d.k)+'<span class="k">'+WX_LABEL[d.k]+'</span><span class="t">'+d.hi+'\u00b0<i>'+d.lo+'\u00b0</i></span></div>'; }).join('') : '<div class="wx-day"><span class="k">Forecast unavailable</span></div>';
    });
  }
  weather(); setInterval(weather, 15*60*1000);
  var wxEl = $('#mbWx'), wxPop = $('#wxPop'), wxT;
  var wxShown = 0;
  function wxShow(){ clearTimeout(wxT); if(wxEl.hidden) return; if(typeof closePops === 'function') closePops('wx'); wxShown = Date.now(); var r = wxEl.getBoundingClientRect(), rr = root.getBoundingClientRect(); wxPop.style.left = Math.max(8, Math.min(rr.width - 238, r.left - rr.left + r.width/2 - 115))+'px'; wxPop.hidden = false; wxEl.classList.add('on'); }
  function wxHide(){ clearTimeout(wxT); wxT = setTimeout(function(){ wxPop.hidden = true; wxEl.classList.remove('on'); }, 120); }
  wxEl.addEventListener('mouseenter', wxShow); wxEl.addEventListener('mouseleave', wxHide);
  wxPop.addEventListener('mouseenter', function(){ clearTimeout(wxT); }); wxPop.addEventListener('mouseleave', wxHide);
  wxEl.addEventListener('click', function(e){ e.stopPropagation(); if(wxPop.hidden) wxShow(); else if(Date.now() - wxShown > 400){ wxPop.hidden = true; wxEl.classList.remove('on'); } });
  document.addEventListener('click', function(e){ if(!wxPop.hidden && !e.target.closest('#wxPop')){ wxPop.hidden = true; wxEl.classList.remove('on'); } });
  /* city menu */
  function tzAbbr(tz){ try { var parts = new Intl.DateTimeFormat('en-US', { timeZone:tz, timeZoneName:'short' }).formatToParts(new Date()); var z = parts.filter(function(x){ return x.type === 'timeZoneName'; })[0]; return z ? z.value : ''; } catch(e){ return ''; } }
  var cityMenu = $('#cityMenu'), locBtn = $('#mbLoc');
  $('#cityList').innerHTML = CITIES.map(function(c){ return '<button type="button" data-city="'+c.id+'" class="'+(c === CITY ? 'sel' : '')+'">'+esc(c.name)+'<small>'+esc(tzAbbr(c.tz))+'</small></button>'; }).join('');
  var clockBtn = $('#mbClock');
  function cityToggle(force, anchor){
    var show = typeof force === 'boolean' ? force : cityMenu.hidden; cityMenu.hidden = !show;
    var mob = isMobile(); locBtn.classList.toggle('on', show && !mob); clockBtn.classList.toggle('on', show && mob);
    if(show){
      if(typeof closePops === 'function') closePops('city');
      var a = anchor || (mob ? clockBtn : locBtn), r = a.getBoundingClientRect(), rr = root.getBoundingClientRect(), mw = cityMenu.offsetWidth;
      var left = Math.max(8, Math.min(rr.width - mw - 8, r.left - rr.left + r.width/2 - mw/2));
      cityMenu.style.left = left+'px'; cityMenu.style.right = 'auto'; cityMenu.style.setProperty('--caret', (r.left - rr.left + r.width/2 - left)+'px');
    }
  }
  locBtn.addEventListener('click', function(e){ e.stopPropagation(); cityToggle(undefined, locBtn); });
  clockBtn.addEventListener('click', function(e){ if(!isMobile()) return; e.stopPropagation(); cityToggle(undefined, clockBtn); });
  $('#wxCityBtn').addEventListener('click', function(e){ e.stopPropagation(); cityToggle(true, isMobile() ? clockBtn : locBtn); });
  $$('#cityList button').forEach(function(b){ b.addEventListener('click', function(){ var c = CITIES.filter(function(x){ return x.id === b.getAttribute('data-city'); })[0]; if(c) setCity(c); cityToggle(false); toast(c.name, 'Clock and weather now follow '+c.name+'.'); }); });
  document.addEventListener('click', function(e){ if(!cityMenu.hidden && !e.target.closest('#cityMenu')) cityToggle(false); });

  /* calendar: click the menubar date on desktop for a plain month view */
  var calPop = $('#calPop');
  function closePops(keep){
    if(keep !== 'city' && !cityMenu.hidden){ cityMenu.hidden = true; locBtn.classList.remove('on'); clockBtn.classList.remove('on'); }
    if(keep !== 'cal' && !calPop.hidden){ calPop.hidden = true; clockBtn.classList.remove('on'); }
    if(keep !== 'wx' && !wxPop.hidden){ wxPop.hidden = true; wxEl.classList.remove('on'); }
    var pwm = $('#pwMenu'); if(keep !== 'pw' && pwm && !pwm.hidden){ pwm.hidden = true; }
    var tgm = $('#tgMenu'); if(keep !== 'menu' && tgm && !tgm.hidden){ tgm.hidden = true; $('#mbLogo').classList.remove('on'); }
    if(keep !== 'ctx' && typeof ctxClose === 'function' && typeof CTX !== 'undefined' && CTX) ctxClose(true);   /* a right-click menu (27-ctx-menu.js) */
  }
  function calParts(){
    try {
      var g = {}; new Intl.DateTimeFormat('en-US', { timeZone:CITY.tz, year:'numeric', month:'numeric', day:'numeric' }).formatToParts(new Date()).forEach(function(x){ g[x.type] = x.value; });
      return { y:+g.year, m:+g.month, d:+g.day };
    } catch(e){ var n = new Date(); return { y:n.getFullYear(), m:n.getMonth()+1, d:n.getDate() }; }
  }
  function calBuild(){
    var c = calParts(), first = new Date(Date.UTC(c.y, c.m-1, 1)).getUTCDay(), days = new Date(Date.UTC(c.y, c.m, 0)).getUTCDate();
    $('#calMon').textContent = new Date(Date.UTC(c.y, c.m-1, 1)).toLocaleString('en-US', { timeZone:'UTC', month:'long', year:'numeric' });
    $('#calCity').textContent = CITY.short;
    var h = ['S','M','T','W','T','F','S'].map(function(d){ return '<i>'+d+'</i>'; }).join('');
    for(var i = 0; i < first; i++) h += '<span class="blank">0</span>';
    for(var d = 1; d <= days; d++){
      var wd = (first + d - 1) % 7, cls = d === c.d ? 'now' : (wd === 0 || wd === 6 ? 'we' : '');
      h += '<span class="'+cls+'">'+d+'</span>';
    }
    $('#calGrid').innerHTML = h;
  }
  function calToggle(force){
    var show = typeof force === 'boolean' ? force : calPop.hidden;
    calPop.hidden = !show; clockBtn.classList.toggle('on', show);
    if(show){
      closePops('cal'); calBuild();
      var r = clockBtn.getBoundingClientRect(), rr = root.getBoundingClientRect(), mw = calPop.offsetWidth;
      calPop.style.left = Math.max(8, Math.min(rr.width - mw - 8, r.left - rr.left + r.width/2 - mw/2))+'px';
      calPop.style.right = 'auto';
    }
  }
  clockBtn.addEventListener('click', function(e){ if(isMobile()) return; e.stopPropagation(); calToggle(); });
  document.addEventListener('click', function(e){ if(!calPop.hidden && !e.target.closest('#calPop') && !e.target.closest('#mbClock')) calToggle(false); });

/* tigOS core app.js, part 05: home screen. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- home screen ---------------- */
  var P = TIG.person;
  $('#home').innerHTML =
    '<div class="hi">'+(A.headshot ? '<img src="'+A.headshot+'" alt="">' : '')+'<i></i>'+esc(P.title)+' at '+esc(P.company)+' · '+esc(P.location)+'</div>'+
    '<h1>Hi, I\u2019m Chase.<br>I make marketing <em>clear.</em></h1>'+
    '<p class="lead">'+esc(P.tagline)+'. '+esc(P.summary)+'</p>'+
    '<div class="hint"><span class="arrow"><svg viewBox="0 0 24 24"><path d="M12 5v14M6 13l6 6 6-6"/></svg></span>'+(isMobile() ? 'Tap an app in the dock to start.' : 'Pick an app from the dock, or press <kbd>\u2318</kbd><kbd>K</kbd> to search.')+'</div>';

/* tigOS core app.js, part 06: desktop icons dock. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- desktop icons + dock ---------------- */
  function tileHTML(id){ var a = APPS[id]; return '<span class="tile '+a.tile+'">'+ic(a.icon)+'</span>'; }
  /* the macOS layout: Den first (always there, like the Finder), a separator, the kept apps, a separator, then the LinkedIn link and the
     Trash. 27-dock-edit.js swaps in each user's own kept apps and slots running apps that are not kept in before the separator */
  $('#dock').innerHTML = '<button class="dk denfix" type="button" data-open="den" data-dock="den" aria-label="Den">'+tileHTML('den')+'<span class="dot"></span><span class="tip">Den</span></button><span class="sep densep"></span>'+DOCK_ORDER.map(function(id){
    return '<button class="dk pin" type="button" data-open="'+id+'" data-dock="'+id+'" aria-label="'+esc(APPS[id].title)+'">'+tileHTML(id)+'<span class="dot"></span><span class="tip">'+esc(APPS[id].title)+'</span></button>';
  }).join('') + '<span class="sep main"></span><a class="dk" href="'+TIG.contact.linkedin+'" target="_blank" rel="noopener" aria-label="LinkedIn"><span class="tile linkedin">'+ic('linkedin')+'</span><span class="tip">LinkedIn \u2197</span></a>'+
    '<button class="dk trash" type="button" data-open="trash" data-dock="trash" aria-label="Trash"><span class="tile trash">'+ic('trash')+'</span><span class="tip">Trash</span></button>';

/* tigOS core app.js, part 07: window manager. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- window manager ---------------- */
  var WM = { z:20, wins:{}, cascade:0 };
  var winsEl = $('#windows'), desk = $('#desktop');
  function updateChrome(){
    var open = Object.keys(WM.wins), shown = open.filter(function(k){ return !WM.wins[k].min; });
    root.classList.toggle('has-windows', shown.length > 0);   /* all minimized = the hero comes back, so an empty desktop never looks broken */
    dockTemp(open);
    $$('.dk').forEach(function(d){ d.classList.toggle('open', open.indexOf(d.getAttribute('data-dock')) > -1); });
    var top = topWin(true);
    $('#mbApp').textContent = top ? APPS[top.id].title : P.name;
  }
  /* an app that is open but not kept in the Dock (the Arcade, Settings, a folder, one taken out of the Dock) gets an icon only while it
     runs, behind its own separator, like a recent app on a Mac. Den and the Trash have their own fixed icons */
  function dockTemp(open){
    var dock = $('#dock'); if(!dock) return;
    var pins = DESKS ? dockList() : DOCK_ORDER, anchor = $('.sep.main', dock) || $('a.dk', dock);
    var want = open.filter(function(k){ return APPS[k] && APPS[k].sys !== 'trash' && k !== 'den' && pins.indexOf(k) < 0; }), have = $$('.dk.tmp', dock);
    have.forEach(function(d){ if(want.indexOf(d.getAttribute('data-dock')) < 0 && !d.classList.contains('gone')){ d.classList.add('gone'); setTimeout(function(){ d.remove(); var s2 = $('.sep.tmpsep', dock); if(s2 && !$('.dk.tmp:not(.gone)', dock)) s2.remove(); dockFitSoon(); }, 260); } });
    want.forEach(function(id){ var ex = $('.dk.tmp[data-dock="'+id+'"]', dock); if(ex && !ex.classList.contains('gone')){ var tp = $('.tip', ex); if(tp && tp.textContent !== APPS[id].title) tp.textContent = APPS[id].title; return; } if(ex) ex.remove();
      if(!$('.sep.tmpsep', dock)){ var sep = document.createElement('span'); sep.className = 'sep tmpsep'; dock.insertBefore(sep, anchor); }
      var b = document.createElement('button'); b.className = 'dk tmp'; b.type = 'button'; b.setAttribute('data-open', id); b.setAttribute('data-dock', id); b.setAttribute('aria-label', APPS[id].title);
      b.innerHTML = tileHTML(id)+'<span class="dot"></span><span class="tip">'+esc(APPS[id].title)+'</span>'; dock.insertBefore(b, anchor);
      if(USER.name === 'ariel') heartsOn(); });
    var s3 = $('.sep.tmpsep', dock); if(s3 && !$('.dk.tmp', dock)) s3.remove();
    dockFitSoon();   /* a running app's icon came or went: the Dock may need to shrink or may grow back (27-dock-edit.js) */
  }
  function dockTop(){ var d = $('#dock'); if(!d) return desk.clientHeight - 84; return Math.round(d.getBoundingClientRect().top - desk.getBoundingClientRect().top); }
  /* the area windows may occupy. A bottom dock reserves its strip; a side dock reserves its column instead; an auto-hidden dock reserves nothing (it slides over the windows, like macOS) */
  function area(){
    var W = desk.clientWidth, H = desk.clientHeight, gd = root.classList.contains('u-greggyd') && !isMobile(), hide = root.classList.contains('dock-hide') && !gd, left = gd || root.classList.contains('dock-left'), right = !gd && root.classList.contains('dock-right'), d = $('#dock');
    var a = { x0:gd ? 72 : 0, x1:W, y1:H - 10 };   /* the Ubuntu skin pins a full-height launcher on the left whatever Dock position says, so it is a left dock here (measuring it as a bottom dock put its top at 0 and squashed every window) */
    if(d && !hide && !isMobile()){ var r = d.getBoundingClientRect(), dr = desk.getBoundingClientRect(); if(left) a.x0 = Math.max(a.x0, Math.round(r.right - dr.left) + 8); else if(right) a.x1 = Math.round(r.left - dr.left) - 8; else a.y1 = dockTop() - 10; }
    return a;
  }
  function topWin(shownOnly){ var best=null; Object.keys(WM.wins).forEach(function(k){ var w=WM.wins[k]; if(shownOnly && w.min) return; if(!best || +w.el.style.zIndex > +best.el.style.zIndex) best=w; }); return best; }
  function focus(w){ if(!w) return; WM.z++; w.el.style.zIndex = WM.z; $$('.win').forEach(function(e){ e.classList.remove('focus'); }); w.el.classList.add('focus'); updateChrome(); }

  function open(id, opts){
    opts = opts || {};
    var a = APPS[id]; if(!a) return;
    if(id === 'trash') return isPhone() ? undefined : denOpen('trash');   /* the Trash is a place in Den, as it is in the Finder */
    if(appGone(id)){ toast('\u201c'+a.title+'\u201d isn\u2019t installed', appPkg(id) ? 'It\u2019s in the Trash: Put Back reinstalls it.' : 'Reinstall it from Terminal: brew install '+id); return; }
    if((a.sys || a.desk) && isPhone()) return;   /* the Trash, folders, Get Info, Jot and Den are desktop features; a phone has none of them */
    if(WM.wins[id]){ var ex = WM.wins[id]; if(ex.min){ restore(ex); } focus(ex); if(opts.route && ex.route) ex.route(opts.route); return ex; }
    if(isMobile()){ Object.keys(WM.wins).forEach(function(k){ var o = WM.wins[k]; o.el.remove(); delete WM.wins[k]; }); }   // phones: one app at a time
    var el = document.createElement('section'); el.className = 'win'; el.setAttribute('role','dialog'); el.setAttribute('aria-label', a.title); el.dataset.app = id;
    var ar = area(), lx = ar.x0;   // linux skin or a left dock: launcher column on the left
    var dw = ar.x1 - lx, dh = desk.clientHeight, limit = ar.y1;   // never sit under the dock
    var W = Math.min(a.w, dw - 28), H = Math.min(a.h, limit - 20);
    var x = lx + Math.round((dw - W)/2), y = Math.max(10, Math.round((limit - H)/2));
    var tw = topWin();
    if(tw && !tw.max){ x = tw.el.offsetLeft + 36; y = tw.el.offsetTop + 32; if(x + W > lx + dw - 8 || y + H > limit){ x = lx + 24 + (WM.cascade%4)*30; y = 12 + (WM.cascade%4)*22; if(y + H > limit) y = Math.max(10, limit - H); } }
    WM.cascade++;
    el.style.cssText = 'left:'+x+'px;top:'+y+'px;width:'+W+'px;height:'+H+'px;z-index:'+(++WM.z);
    if(opts.from){ var r = opts.from.getBoundingClientRect(), dr = desk.getBoundingClientRect(); el.style.setProperty('--ox', (r.left - dr.left + r.width/2 - x)+'px'); el.style.setProperty('--oy', (r.top - dr.top + r.height/2 - y)+'px'); }
    el.innerHTML = '<div class="win-bar"><div class="lights"><button class="c" type="button" aria-label="Close"></button><button class="m" type="button" aria-label="Minimize"></button><button class="z" type="button" aria-label="Zoom"></button></div><div class="win-title">'+ic(a.icon)+esc(a.title)+'</div><div class="win-tools"></div><button class="win-close-m" type="button" aria-label="Close">Done</button></div><div class="win-body"></div><div class="rz resizer se" aria-hidden="true"></div><div class="rz sw" aria-hidden="true"></div><div class="rz ne" aria-hidden="true"></div><div class="rz nw" aria-hidden="true"></div>';
    winsEl.appendChild(el);
    var w = { id:id, el:el, body:$('.win-body', el), tools:$('.win-tools', el), min:false, max:false, prev:null };
    WM.wins[id] = w;
    $('.c', el).addEventListener('click', function(e){ e.stopPropagation(); close(w); });
    $('.win-close-m', el).addEventListener('click', function(e){ e.stopPropagation(); close(w); });
    $('.m', el).addEventListener('click', function(e){ e.stopPropagation(); minimize(w); });
    $('.z', el).addEventListener('click', function(e){ e.stopPropagation(); zoom(w); });
    $('.win-bar', el).addEventListener('dblclick', function(e){ if(!e.target.closest('.lights')) zoom(w); });
    el.addEventListener('pointerdown', function(){ focus(w); });
    makeDraggable(w); makeResizable(w);
    RENDER[id](w);
    if(opts.route && w.route) w.route(opts.route);
    focus(w);
    var dk = $('[data-dock="'+id+'"]'); if(dk){ dk.classList.remove('bounce'); void dk.offsetWidth; dk.classList.add('bounce'); }
    return w;
  }
  function close(w){ if(!w || w.closingNow) return; w.closingNow = true; if(w.destroy) try { w.destroy(); } catch(e){} w.el.style.animation = ''; w.el.classList.add('closing'); setTimeout(function(){ w.el.remove(); delete WM.wins[w.id]; updateChrome(); var t = topWin(); if(t) focus(t); }, 260); }
  /* genie: the window folds toward its own dock icon (--dx/--dy = icon centre minus window centre) and back out again */
  function aimAtDock(w){
    var dk = $('[data-dock="'+w.id+'"]'), r = w.el.getBoundingClientRect(); if(!dk) return;
    var d = dk.getBoundingClientRect(); w.el.style.setProperty('--dx', Math.round(d.left + d.width/2 - (r.left + r.width/2))+'px'); w.el.style.setProperty('--dy', Math.round(d.top + d.height/2 - (r.top + r.height/2))+'px');
  }
  function minimize(w){
    if(w.min || w.el.classList.contains('minimizing')) return;
    if(w.el.classList.contains('fs')) gameFs(w, false);
    w.min = true; aimAtDock(w); w.el.classList.remove('restoring'); w.el.style.animation = ''; w.el.classList.add('minimizing');
    var dk = $('[data-dock="'+w.id+'"]'); if(dk) setTimeout(function(){ dk.classList.remove('bounce'); void dk.offsetWidth; dk.classList.add('bounce'); }, 420);
    var done = false, finish = function(){ if(done) return; done = true; w.el.style.display = 'none'; w.el.classList.remove('minimizing'); var t = topWin(true); if(t) focus(t); updateChrome(); };
    w.el.addEventListener('animationend', function h(e){ if(e.target !== w.el) return; w.el.removeEventListener('animationend', h); finish(); });
    setTimeout(finish, (parseFloat(getComputedStyle(w.el).animationDuration) || .6) * 1000 + 400);   /* safety net if animationend never fires */
    toast(APPS[w.id].title+' minimized', 'Click its dock icon to bring it back.');
  }
  function restore(w){
    w.min = false; w.el.style.display = ''; w.el.style.animation = ''; aimAtDock(w); w.el.classList.add('restoring');
    var settle = function(){ w.el.style.animation = 'none'; w.el.classList.remove('restoring'); };   /* pin the final frame BEFORE dropping the class, or the intro (winIn) replays and blinks */
    var doneR = false, fin = function(){ if(doneR) return; doneR = true; settle(); };
    w.el.addEventListener('animationend', function h(e){ if(e.target !== w.el) return; w.el.removeEventListener('animationend', h); fin(); });
    setTimeout(fin, (parseFloat(getComputedStyle(w.el).animationDuration) || .55) * 1000 + 300);
    updateChrome();
  }
  function zoom(w){
    if(w.id === 'games'){ gameFs(w); return; }   /* the green light on a game means full screen, not just big */
    if(isMobile()) return;
    clearTimeout(w.zoomT); w.el.classList.add('zooming');   /* geometry is inline, so a transition on left/top/width/height glides it there */
    if(!w.max){ w.prev = w.el.style.cssText; w.max = true; w.el.classList.add('max'); var az = area(); w.el.style.left = az.x0+'px'; w.el.style.top = '0px'; w.el.style.width = (az.x1 - az.x0)+'px'; w.el.style.height = az.y1+'px'; }
    else { w.max = false; w.el.classList.remove('max'); var z = w.el.style.zIndex; w.el.style.cssText = w.prev; w.el.style.zIndex = z; }
    w.zoomT = setTimeout(function(){ w.el.classList.remove('zooming'); }, 500);
  }
  function makeDraggable(w){
    var bar = $('.win-bar', w.el), sx, sy, ox, oy, moving = false;
    bar.addEventListener('pointerdown', function(e){
      if(e.target.closest('.lights, .win-tools') || isMobile() || w.max || w.el.classList.contains('fs')) return;
      moving = true; sx = e.clientX; sy = e.clientY; ox = w.el.offsetLeft; oy = w.el.offsetTop; w.el.classList.add('dragging'); bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove', function(e){
      if(!moving) return;
      var nx = ox + (e.clientX - sx), ny = oy + (e.clientY - sy);
      nx = Math.max(-w.el.offsetWidth + 120, Math.min(desk.clientWidth - 120, nx)); ny = Math.max(0, Math.min(desk.clientHeight - 60, ny));
      w.el.style.left = nx+'px'; w.el.style.top = ny+'px';
    });
    var end = function(){ if(moving){ moving = false; w.el.classList.remove('dragging'); } };
    bar.addEventListener('pointerup', end); bar.addEventListener('pointercancel', end);
  }
  function makeResizable(w){
    var MINW = 360, MINH = 240;
    $$('.rz', w.el).forEach(function(rz){
      var dir = rz.classList.contains('sw') ? 'sw' : rz.classList.contains('ne') ? 'ne' : rz.classList.contains('nw') ? 'nw' : 'se';
      var west = dir === 'sw' || dir === 'nw', north = dir === 'ne' || dir === 'nw';
      var sx, sy, sw, sh, sl, st, on = false;
      rz.addEventListener('pointerdown', function(e){
        if(isMobile() || w.max) return;
        on = true; sx = e.clientX; sy = e.clientY; sw = w.el.offsetWidth; sh = w.el.offsetHeight; sl = w.el.offsetLeft; st = w.el.offsetTop;
        rz.setPointerCapture(e.pointerId); w.el.classList.add('dragging'); focus(w); e.stopPropagation(); e.preventDefault();
      });
      rz.addEventListener('pointermove', function(e){
        if(!on) return;
        var dx = e.clientX - sx, dy = e.clientY - sy, ar = area(), lim = ar.y1, maxW = ar.x1;
        if(west){ var nw2 = Math.max(MINW, Math.min(sl + sw - ar.x0, sw - dx)); w.el.style.left = (sl + sw - nw2)+'px'; w.el.style.width = nw2+'px'; }
        else { w.el.style.width = Math.max(MINW, Math.min(maxW - sl, sw + dx))+'px'; }
        if(north){ var nh = Math.max(MINH, Math.min(st + sh, sh - dy)); w.el.style.top = Math.max(0, st + sh - nh)+'px'; w.el.style.height = nh+'px'; }
        else { w.el.style.height = Math.max(MINH, Math.min(lim - st, sh + dy))+'px'; }
      });
      var end = function(){ on = false; w.el.classList.remove('dragging'); };
      rz.addEventListener('pointerup', end); rz.addEventListener('pointercancel', end);
    });
  }

/* tigOS core app.js, part 08: renderers. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- renderers ---------------- */
  var RENDER = {};

  RENDER.about = function(w){
    var edu = TIG.education;
    w.body.innerHTML = '<div class="pad">'+
      '<div class="about-hero">'+(A.headshot ? '<img class="avatar" src="'+A.headshot+'" alt="Chase Johnston">' : '')+
        '<div><div class="eyebrow">About</div><div class="h2">'+esc(P.name)+'</div><div class="role"><b>'+esc(P.title)+'</b> · '+esc(P.company)+' · '+esc(P.org)+'</div></div></div>'+
      '<div class="divider"></div>'+
      '<p class="sub" style="max-width:none">'+esc(P.bio)+'</p>'+
      '<div class="sec grid3">'+TIG.stats.slice(0,3).map(function(s,i){ return '<div class="card stat '+['acc-orange','acc-teal','acc-pink'][i]+'"><b>'+esc(s.big)+'</b><span>'+esc(s.label)+'</span><small>'+esc(s.sub)+'</small></div>'; }).join('')+'</div>'+
      '<div class="sec grid2">'+
        '<div class="card"><div class="eyebrow">At a glance</div><dl class="kv"><dt>Role</dt><dd>'+esc(P.title)+'</dd><dt>Company</dt><dd>'+esc(P.company)+'</dd><dt>Focus</dt><dd>'+esc(P.tagline)+'</dd><dt>Location</dt><dd>'+esc(P.location)+'</dd><dt>Education</dt><dd>'+esc(edu.school)+'</dd></dl></div>'+
        '<div class="card"><div class="eyebrow">Experience with</div><div class="logos">'+
          [['Amazon','acc-orange'],['Apple','acc-pink'],['Johnny Mo\u2019s','acc-red'],['Tig Media','acc-teal']].concat(TIG.alsoWorkedWith.map(function(n){ return [n,'acc-violet']; })).map(function(x){ return '<span class="logo-pill '+x[1]+'"><i></i>'+esc(x[0])+'</span>'; }).join('')+
        '</div></div>'+
      '</div>'+
      '<div class="sec" style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary" data-open="projects">'+ic('projects')+'See the work</button><button class="btn" data-open="experience">'+ic('exp')+'Career timeline</button><button class="btn" data-open="contact">'+ic('contact')+'Get in touch</button></div>'+
    '</div>';
  };

  RENDER.projects = function(w){
    var list = function(){
      w.tools.innerHTML = '';
      w.body.innerHTML = '<div class="pad"><div class="eyebrow">Selected work · '+TIG.projects.length+' projects</div><div class="h2">Work that shipped.</div><p class="sub">Case studies from Amazon, Apple, and two businesses I helped build. Each one covers the overview, the execution, and the results.</p>'+
        '<div class="proj-list sec">'+TIG.projects.map(function(p){
          return '<button class="card hover pcard acc-'+p.accent+'" type="button" data-proj="'+p.id+'"><span class="thumb">'+img(p.images[0][0], p.images[0][1])+'</span><span><span class="num">Project '+p.n+' · '+esc(p.company)+'</span><div class="h3">'+esc(p.name)+'</div><span class="tag">'+esc(p.tag)+'</span></span><span class="arrow">\u203A</span></button>';
        }).join('')+'</div></div>';
      $$('[data-proj]', w.body).forEach(function(b){ b.addEventListener('click', function(){ detail(b.getAttribute('data-proj')); }); });
    };
    var detail = function(id){
      var i = TIG.projects.findIndex(function(p){ return p.id === id; }); if(i < 0) return list();
      var p = TIG.projects[i], prev = TIG.projects[(i+TIG.projects.length-1)%TIG.projects.length], next = TIG.projects[(i+1)%TIG.projects.length];
      w.tools.innerHTML = '<button type="button" class="js-back">'+ic('back')+'All projects</button>';
      w.body.innerHTML = '<div class="pad pdetail acc-'+p.accent+'"><button class="back js-back" type="button">'+ic('back')+'All projects</button>'+
        '<div class="eyebrow acc-txt">Project '+p.n+' · '+esc(p.company)+'</div><div class="h2">'+esc(p.name)+'</div><p class="sub">'+esc(p.tag)+'</p>'+
        '<div class="gallery">'+p.images.map(function(im){ return A[im[0]] ? '<figure data-lb="'+im[0]+'" data-cap="'+esc(im[1])+'">'+img(im[0], im[1])+'<figcaption>'+esc(im[1])+'</figcaption></figure>' : ''; }).join('')+'</div>'+
        '<div class="grid3 sec">'+p.metrics.map(function(m){ return '<div class="card stat"><b>'+esc(m[0])+'</b><span>'+esc(m[1])+'</span></div>'; }).join('')+'</div>'+
        '<div class="oer"><div class="card"><b>Overview</b><p>'+esc(p.overview)+'</p></div><div class="card"><b>Execution</b><p>'+esc(p.execution)+'</p></div><div class="card"><b>Results</b><p>'+esc(p.results)+'</p></div></div>'+
        '<div class="pnav"><button class="card hover" type="button" data-proj="'+prev.id+'"><small>\u2039 Previous</small>'+esc(prev.name)+'</button><button class="card hover" type="button" data-proj="'+next.id+'"><small>Next \u203A</small>'+esc(next.name)+'</button></div>'+
      '</div>';
      w.body.scrollTop = 0;
      $$('.js-back', w.el).forEach(function(b){ b.addEventListener('click', list); });
      $$('[data-proj]', w.body).forEach(function(b){ b.addEventListener('click', function(){ detail(b.getAttribute('data-proj')); }); });
      $$('[data-lb]', w.body).forEach(function(f){ f.addEventListener('click', function(){ lightbox(f.getAttribute('data-lb'), f.getAttribute('data-cap')); }); });
    };
    w.route = function(r){ r ? detail(r) : list(); };
    list();
  };

  RENDER.experience = function(w){
    var edu = TIG.education;
    w.body.innerHTML = '<div class="pad"><div class="eyebrow">Experience</div><div class="h2">Five roles, one through-line.</div><p class="sub">Take complicated goals, organize the story, and ship something that makes sense to the customer.</p>'+
      '<div class="tl sec">'+TIG.experience.map(function(j, i){
        return '<div class="job card acc-'+j.accent+(i>1?' collapsed':'')+'"><div class="row"><div class="co">'+esc(j.company)+(j.current?' <span class="now"><i></i>Current</span>':'')+'</div><div class="when">'+esc(j.dates)+' · '+esc(j.where)+'</div></div><div class="role">'+esc(j.role)+'</div><ul>'+j.bullets.map(function(b){ return '<li>'+esc(b)+'</li>'; }).join('')+'</ul>'+(i>1?'<button class="more" type="button">Show details \u2193</button>':'')+'</div>';
      }).join('')+'</div>'+
      '<div class="sec card acc-violet"><div class="eyebrow">Education</div><div class="row" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px"><div><div class="h3">'+esc(edu.school)+'</div><div style="color:var(--muted)">'+esc(edu.degree)+' · '+esc(edu.year)+'</div></div><div class="when" style="color:var(--muted);font-size:13px">'+esc(edu.where)+'</div></div></div>'+
      '<div class="sec" style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn primary" data-open="resume">'+ic('download')+'Download the one-page resume</button><button class="btn" data-open="projects">'+ic('projects')+'See the projects</button></div>'+
    '</div>';
    $$('.more', w.body).forEach(function(b){ b.addEventListener('click', function(){ var j = b.closest('.job'); j.classList.toggle('collapsed'); b.textContent = j.classList.contains('collapsed') ? 'Show details \u2193' : 'Hide details \u2191'; }); });
  };

  RENDER.resume = function(w){
    var pdf = A.resume_pdf || '#';
    w.tools.innerHTML = '<a href="'+pdf+'" download="Chase-Johnston-Resume.pdf">'+ic('download')+'Download</a>';
    w.body.innerHTML = '<div class="pad"><div class="res-wrap">'+
      '<div class="res-paper" data-lb="resume_preview" data-cap="Chase Johnston, resume (October 2026)">'+(A.resume_preview ? '<img src="'+A.resume_preview+'" alt="Chase Johnston resume preview" decoding="async">' : '<div class="pad">Preview unavailable</div>')+'<span class="zoom-hint">Click to enlarge</span></div>'+
      '<div class="res-side">'+
        '<a class="btn primary" href="'+pdf+'" download="Chase-Johnston-Resume.pdf">'+ic('download')+'Download PDF</a>'+
        '<a class="btn" href="'+pdf+'" target="_blank" rel="noopener">'+ic('link')+'Open in new tab</a>'+
        '<div class="card"><div class="res-fact"><span>Format</span><b>One page · PDF</b></div><div class="res-fact"><span>Updated</span><b>October 2026</b></div><div class="res-fact"><span>Role</span><b>'+esc(P.title)+'</b></div><div class="res-fact"><span>Based in</span><b>'+esc(P.location)+'</b></div></div>'+
        '<div class="card"><p>Prefer the interactive version? Every role on this page is also in the <b>Experience</b> app, and every project has a full case study in <b>Projects</b>.</p></div>'+
        '<button class="btn" data-open="experience">'+ic('exp')+'Open Experience</button>'+
      '</div></div></div>';
    var paper = $('.res-paper', w.body); if(paper) paper.addEventListener('click', function(){ lightbox('resume_preview', paper.getAttribute('data-cap')); });
  };

  RENDER.skills = function(w){
    w.body.innerHTML = '<div class="pad"><div class="eyebrow">Skills</div><div class="h2">The toolkit.</div><p class="sub">Marketing strategy, creative judgment, and the tools I use to ship. Every item here is backed by a role or project on this site.</p>'+
      TIG.skills.groups.map(function(g){ return '<div class="skill-group acc-'+g.accent+'"><div class="h3"><i></i>'+esc(g.name)+'</div><div class="skills-grid">'+g.items.map(function(s){ return '<span class="skill">'+esc(s)+'</span>'; }).join('')+'</div></div>'; }).join('')+
      '<div class="proof"><div class="eyebrow">Proof points</div><div style="display:grid;gap:10px">'+
        [['acc-orange','7x','Grew the Emerging Brands program from 35 campaigns in 2025 to 250+ in 2026.'],['acc-teal','65+','Brands tracked, every campaign, in a performance dashboard I designed and built with AI tools, used weekly by the team and three agencies.'],['acc-blue','42%','Average open rate on the 4-week Hub partner email series, 12% above baseline.'],['acc-pink','$11.9M','B2B revenue across the SMB portfolio I managed at Apple.']].map(function(x){ return '<div class="card '+x[0]+'"><div class="k">'+x[1]+'</div><p>'+esc(x[2])+'</p></div>'; }).join('')+
      '</div></div></div>';
  };

/* tigOS core app.js, part 09: journey. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- Journey: a dotted world, five cities, seven stops, one little plane ---------------- */
  RENDER.journey = function(w){
    var S = TIG.journey, CT = TIG.cities, M = TIG.map, ACC = { orange:'#ff8a00', amber:'#ffd166', teal:'#63e6be', pink:'#ff7ab6', blue:'#8cc7ff', violet:'#a78bfa', red:'#ff6b6b' };
    var CIDS = []; S.forEach(function(s){ if(CIDS.indexOf(s.city) < 0) CIDS.push(s.city); });   /* cities in order of first visit */
    var visits = {}; S.forEach(function(s){ visits[s.city] = (visits[s.city] || 0) + 1; });
    var cityOf = function(s){ return CT[s.city]; }, where = function(s){ var c = cityOf(s); return c.city+', '+c.state; };
    w.body.innerHTML = '<div class="jr">'+
      '<div class="jr-map"><canvas class="jr-cv" aria-label="Map of the places Chase has lived and worked"></canvas>'+
        '<div class="jr-pins">'+CIDS.map(function(id){ var c = CT[id]; return '<button type="button" class="jr-pin acc-'+c.accent+(c.side === 'left' ? ' l' : '')+'" data-city="'+id+'" aria-label="'+esc(c.city)+', '+esc(c.state)+'"><i></i><b></b><span>'+esc(c.city)+(visits[id] > 1 ? ' <em>\u00d7'+visits[id]+'</em>' : '')+'</span></button>'; }).join('')+'</div>'+
        '<div class="jr-top"><div class="eyebrow">Journey</div><div class="jr-h">Seven stops, five cities, one through-line.</div></div>'+
        '<button type="button" class="jr-replay" aria-label="Replay the flight"><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.3-5.6M4 4v4.5h4.5"/></svg><span>Replay</span></button>'+
      '</div>'+
      '<div class="jr-side">'+
        '<div class="jr-stops">'+S.map(function(s, i){ return '<button type="button" class="jr-stop acc-'+s.accent+'" data-stop="'+i+'"><i>'+(i+1)+'</i><span><b>'+esc(s.company)+'</b><small>'+esc(where(s))+' \u00b7 '+esc(s.years)+'</small></span></button>'; }).join('')+'</div>'+
        '<div class="jr-card card" aria-live="polite"></div>'+
      '</div>'+
    '</div>';
    var cv = $('.jr-cv', w.body), cx = cv.getContext('2d'), mapEl = $('.jr-map', w.body), pins = $$('.jr-pin', w.body), stops = $$('.jr-stop', w.body), card = $('.jr-card', w.body);
    var pinOf = {}; pins.forEach(function(p){ pinOf[p.getAttribute('data-city')] = p; });
    var dpr = Math.min(2, window.devicePixelRatio || 1), Wd = 0, Hd = 0;
    var dots = [];   // unpack the land bitmask once
    (function(){ var rows = M.bits; for(var r = 0; r < M.rows; r++){ var bin = atob(rows[r]); for(var c = 0; c < M.cols; c++){ if(bin.charCodeAt(c >> 3) & (128 >> (c & 7))) dots.push(c, r); } } })();
    var merc = function(lat){ return Math.log(Math.tan(Math.PI/4 + lat*Math.PI/360)); }, Y0 = merc(M.lat0), Y1 = merc(M.lat1);
    var geo = function(lon, lat){ return { x:(lon + 180)/360*M.cols, y:(Y0 - merc(lat))/(Y0 - Y1)*M.rows }; };   /* dot-grid units */
    var P = {}; CIDS.forEach(function(id){ P[id] = geo(CT[id].lon, CT[id].lat); });
    var PL = CIDS.map(function(id){ return P[id]; });
    /* camera: centre (grid units) + scale (css px per grid unit); eased from "world" to "north america" */
    var cam = { x:M.cols/2, y:M.rows/2, k:1 }, camTo = null, camFrom = null, camT0 = 0, camDur = 0, started = false;
    var view = function(name){
      var pad = isMobile() ? 1.12 : 1.0;
      if(name === 'world'){ var k = Math.min(Wd/M.cols, Hd/M.rows); return { x:M.cols/2, y:M.rows/2 + (isMobile() ? 4 : 0), k:k }; }
      var minx = Math.min.apply(null, PL.map(function(p){ return p.x; })) - (isMobile() ? 26 : 18), maxx = Math.max.apply(null, PL.map(function(p){ return p.x; })) + (isMobile() ? 22 : 24);   /* room for labels either side */
      var miny = Math.min.apply(null, PL.map(function(p){ return p.y; })) - 7, maxy = Math.max.apply(null, PL.map(function(p){ return p.y; })) + 6;
      var k2 = Math.min(Wd/((maxx - minx)*pad), Hd/((maxy - miny)*pad)); return { x:(minx + maxx)/2, y:(miny + maxy)/2 + (isMobile() ? 1 : 0), k:k2 };
    };
    var flyCam = function(to, ms){ camFrom = { x:cam.x, y:cam.y, k:cam.k }; camTo = to; camT0 = performance.now(); camDur = ms; };
    var toPx = function(p){ return { x:(p.x - cam.x)*cam.k + Wd/2, y:(p.y - cam.y)*cam.k + Hd/2 }; };
    var ease = function(t){ return t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2; };
    /* the flight: quadratic arcs that bow north like a real great-circle route (Seattle to New York goes up over the lakes); pure north-south hops bow out over the Pacific, and a return leg bows the other way so out-and-back pairs draw a loop */
    var legs = [], plane = { on:false, leg:0, t0:0, x:0, y:0, a:0 }, trail = [], done = [], pausedAt = 0, LEG_MS = 1700, PAUSE = 480, cur = -1, motion = function(){ return PREF.motion !== 'off'; };
    var arc = function(a, b, t, flip){ var mx = (a.x + b.x)/2, my = (a.y + b.y)/2, d = Math.hypot(b.x - a.x, b.y - a.y) || 1, lift = Math.min(d*.32, 30), nx = -(b.y - a.y)/d, ny = (b.x - a.x)/d;
      if(Math.abs(ny) < .35 ? nx > 0 : ny > 0){ nx = -nx; ny = -ny; }   /* normal points north (screen up), or west for near-vertical legs */
      if(flip){ nx = -nx; ny = -ny; }
      var cxp = mx + nx*lift, cyp = my + ny*lift, u = 1 - t; return { x:u*u*a.x + 2*u*t*cxp + t*t*b.x, y:u*u*a.y + 2*u*t*cyp + t*t*b.y }; };
    var flipFor = function(i){ for(var j = 0; j < i; j++){ if(S[j].city === S[i+1].city && S[j+1].city === S[i].city) return true; } return false; };   /* a leg that reverses an earlier one */
    var setCard = function(i, silent){
      var s = S[i], c = cityOf(s); cur = i; card.className = 'jr-card card acc-'+s.accent;
      card.innerHTML = '<div class="jr-where"><span class="jr-dot"></span>'+esc(where(s))+' <span class="jr-yrs">'+esc(s.years)+'</span>'+(s.current ? ' <span class="now"><i></i>Now</span>' : '')+'</div>'+
        '<div class="h3">'+esc(s.company)+'</div><div class="jr-org">'+esc(s.role)+'</div>'+
        '<p class="sub">'+esc(s.blurb)+'</p><div class="jr-tags">'+s.tags.map(function(t){ return '<span class="chip">'+esc(t)+'</span>'; }).join('')+'</div>'+
        (i === S.length-1 ? '<button type="button" class="btn jr-more" data-open="experience">'+ic('exp')+'Full experience</button>' : '');
      pins.forEach(function(p){ p.classList.toggle('on', p.getAttribute('data-city') === s.city); }); stops.forEach(function(p, j){ p.classList.toggle('on', j === i); });
      var on = $('.jr-stop.on', w.body); if(on && !isMobile()) on.scrollIntoView({ block:'nearest' });
      if(!silent && isMobile()) card.scrollIntoView({ behavior:'smooth', block:'nearest' });
    };
    var reveal = function(cityId, pop){ var p = pinOf[cityId]; if(!p) return; p.classList.remove('hid'); if(pop){ p.classList.remove('drop'); void p.offsetWidth; p.classList.add('drop'); } };
    var startFlight = function(){
      legs = []; for(var i = 0; i < S.length - 1; i++) legs.push({ a:P[S[i].city], b:P[S[i+1].city], to:i+1, flip:flipFor(i) });
      done = []; trail = []; plane = { on:true, leg:0, t0:performance.now() + PAUSE, x:P[S[0].city].x, y:P[S[0].city].y, a:0 };
      pins.forEach(function(p){ p.classList.add('hid'); p.classList.remove('drop'); }); reveal(S[0].city, true);
      setCard(0, true);
    };
    var flyTo = function(i){   /* user picked a stop: hop straight there */
      if(i === cur && !plane.on){ setCard(i); return; }
      var from = plane.on ? { x:plane.x, y:plane.y } : P[S[cur < 0 ? 0 : cur].city];
      legs = [{ a:from, b:P[S[i].city], to:i, direct:true }]; plane = { on:true, leg:0, t0:performance.now(), x:from.x, y:from.y, a:0 }; trail = [];
      done = []; for(var d = 0; d < S.length - 1; d++) done.push(d);   /* every route is known once the visitor takes over */
      pins.forEach(function(p){ p.classList.remove('hid', 'drop'); }); setCard(i);
    };
    var resize = function(){
      var wd = mapEl.clientWidth, hd = mapEl.clientHeight;   /* layout size: unaffected by the genie transform, 0 while display:none */
      if(!wd || !hd) return;
      if(wd === Wd && hd === Hd) return;
      Wd = wd; Hd = hd; cv.width = Wd*dpr; cv.height = Hd*dpr; cv.style.width = Wd+'px'; cv.style.height = Hd+'px'; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var v = view(started ? 'na' : 'world'); if(camTo) camTo = v; else cam = v;   /* keep the framing when the window is resized or restored */
    };
    var placePins = function(){ CIDS.forEach(function(id){ var q = toPx(P[id]), p = pinOf[id]; p.style.left = q.x+'px'; p.style.top = q.y+'px'; }); };
    var raf = 0, alive = true;
    var frame = function(now){
      if(!alive) return; raf = requestAnimationFrame(frame);
      if(w.min || document.hidden || !mapEl.clientWidth){ if(!pausedAt) pausedAt = now; return; }
      if(pausedAt){ var gap = now - pausedAt; pausedAt = 0; plane.t0 += gap; camT0 += gap; trail.forEach(function(q){ q.t += gap; }); }   /* resume exactly where we left off */
      resize();
      if(camTo){ var ct = Math.min(1, (now - camT0)/camDur), e = ease(ct); cam = { x:camFrom.x + (camTo.x - camFrom.x)*e, y:camFrom.y + (camTo.y - camFrom.y)*e, k:camFrom.k + (camTo.k - camFrom.k)*e }; if(ct >= 1){ cam = { x:camTo.x, y:camTo.y, k:camTo.k }; camTo = null; } }
      /* plane */
      var L = legs[plane.leg];
      if(plane.on && L && now >= plane.t0){   /* wall-clock flight: frame rate never changes how long a leg takes */
        var t = motion() ? Math.min(1, (now - plane.t0)/LEG_MS) : 1, p = arc(L.a, L.b, t, L.flip), p2 = arc(L.a, L.b, Math.min(1, t + .02), L.flip);
        plane.x = p.x; plane.y = p.y; plane.a = Math.atan2(p2.y - p.y, p2.x - p.x);
        trail.push({ x:p.x, y:p.y, t:now }); if(trail.length > 140) trail.shift();
        if(t >= 1){
          reveal(S[L.to].city, true); if(!L.direct){ done.push(plane.leg); setCard(L.to, true); }
          plane.leg++; plane.t0 = now + PAUSE;
          if(plane.leg >= legs.length){ plane.on = false; pins.forEach(function(p){ p.classList.remove('hid'); }); }
        }
      }
      /* draw */
      cx.clearRect(0, 0, Wd, Hd);
      var light = root.classList.contains('light'), k = cam.k, rad = Math.max(.7, Math.min(2.2, k*.36));
      cx.fillStyle = light ? 'rgba(40,40,70,.22)' : 'rgba(140,199,255,.34)';
      var x0 = cam.x - Wd/2/k - 1, x1 = cam.x + Wd/2/k + 1, y0 = cam.y - Hd/2/k - 1, y1 = cam.y + Hd/2/k + 1;
      cx.beginPath();
      for(var i = 0; i < dots.length; i += 2){ var gx = dots[i], gy = dots[i+1]; if(gx < x0 || gx > x1 || gy < y0 || gy > y1) continue; var px = (gx - cam.x)*k + Wd/2, py = (gy - cam.y)*k + Hd/2; cx.moveTo(px + rad, py); cx.arc(px, py, rad, 0, 6.2832); }
      cx.fill();
      /* completed routes: dotted, in the colour of the chapter they led to */
      cx.lineCap = 'round'; cx.lineJoin = 'round'; cx.setLineDash([2.5, 5.5]); cx.lineWidth = 1.7; cx.globalAlpha = light ? .55 : .7;
      done.forEach(function(li){ var a = P[S[li].city], b = P[S[li+1].city], fl = flipFor(li); cx.strokeStyle = ACC[S[li+1].accent] || '#fff'; cx.beginPath(); for(var s = 0; s <= 28; s++){ var q = toPx(arc(a, b, s/28, fl)); s ? cx.lineTo(q.x, q.y) : cx.moveTo(q.x, q.y); } cx.stroke(); });
      cx.setLineDash([]); cx.globalAlpha = 1;
      /* trail */
      if(trail.length > 1){ var col = ACC[S[L ? L.to : cur < 0 ? 0 : cur].accent] || '#ff8a00'; for(var ti = 1; ti < trail.length; ti++){ var age = (now - trail[ti].t)/900; if(age > 1) continue; var a2 = toPx(trail[ti-1]), b2 = toPx(trail[ti]); cx.beginPath(); cx.moveTo(a2.x, a2.y); cx.lineTo(b2.x, b2.y); cx.strokeStyle = col; cx.globalAlpha = (1 - age)*.9; cx.lineWidth = (1 - age)*3.2 + .4; cx.stroke(); } cx.globalAlpha = 1; }
      /* plane */
      if(plane.on){ var pp = toPx(plane), sz = Math.max(9, Math.min(15, k*3.2)); cx.save(); cx.translate(pp.x, pp.y); cx.rotate(plane.a); cx.shadowColor = 'rgba(0,0,0,.45)'; cx.shadowBlur = 6; cx.shadowOffsetY = 3;
        cx.fillStyle = light ? '#1a1a2e' : '#ffffff'; cx.beginPath(); cx.moveTo(sz, 0); cx.lineTo(-sz*.55, sz*.62); cx.lineTo(-sz*.25, 0); cx.lineTo(-sz*.55, -sz*.62); cx.closePath(); cx.fill(); cx.restore(); }
      placePins();
    };
    resize();
    /* opening: hold on the world, then swoop into the west and start the flight */
    var t0 = setTimeout(function(){ started = true; flyCam(view('na'), motion() ? 1500 : 1); }, motion() ? 650 : 0);
    var t1 = setTimeout(function(){ startFlight(); }, motion() ? 2000 : 30);
    setCard(0, true); pins.forEach(function(p){ p.classList.toggle('hid', p.getAttribute('data-city') !== S[0].city); });
    raf = requestAnimationFrame(frame);
    $('.jr-stops', w.body).addEventListener('click', function(e){ var b = e.target.closest('[data-stop]'); if(b) flyTo(+b.getAttribute('data-stop')); });
    $('.jr-pins', w.body).addEventListener('click', function(e){ var b = e.target.closest('[data-city]'); if(!b) return; var id = b.getAttribute('data-city'), idx = []; S.forEach(function(s, i){ if(s.city === id) idx.push(i); });
      var next = idx.filter(function(i){ return i > cur; })[0]; if(next == null) next = idx[0]; flyTo(next); });   /* a city with several stops cycles through them */
    $('.jr-replay', w.body).addEventListener('click', function(){ started = false; cam = view('world'); started = true; flyCam(view('na'), motion() ? 1300 : 1); pins.forEach(function(p){ p.classList.toggle('hid', p.getAttribute('data-city') !== S[0].city); }); plane.on = false; setTimeout(startFlight, motion() ? 1200 : 0); });
    w.route = function(r){ var q = String(r).toLowerCase(), i = S.findIndex(function(s){ return s.id === q || s.city === q || CT[s.city].city.toLowerCase() === q || s.company.toLowerCase().indexOf(q) === 0; }); if(i > -1) flyTo(i); };
    w.destroy = function(){ alive = false; cancelAnimationFrame(raf); clearTimeout(t0); clearTimeout(t1); };
  };

  RENDER.contact = function(w){
    var C = TIG.contact;
    w.body.innerHTML = '<div class="pad"><div class="eyebrow">Contact</div><div class="h2">Let\u2019s talk.</div><p class="sub">Open to conversations about product marketing, GTM, and growth roles. Email is fastest.</p>'+
      '<div class="contact-grid">'+
        '<button class="card hover crow acc-orange" type="button" data-copy="'+esc(C.email)+'" data-href="mailto:'+esc(C.email)+'"><span class="ico">'+ic('contact')+'</span><span><b>Email</b><span>'+esc(C.email)+'</span></span><small>click to copy</small></button>'+
        '<a class="card hover crow acc-blue" href="'+esc(C.linkedin)+'" target="_blank" rel="noopener"><span class="ico">'+ic('linkedin')+'</span><span><b>LinkedIn</b><span>'+esc(C.linkedinLabel)+'</span></span><small>opens \u2197</small></a>'+
        '<button class="card hover crow acc-teal" type="button" data-copy="'+esc(C.phone)+'" data-href="tel:'+esc(C.phone)+'"><span class="ico">'+ic('phone')+'</span><span><b>Phone</b><span>'+esc(C.phone)+'</span></span><small>click to copy</small></button>'+
        '<button class="card hover crow acc-pink" type="button" data-open="resume"><span class="ico">'+ic('resume')+'</span><span><b>Resume</b><span>One page, PDF</span></span><small>open</small></button>'+
      '</div>'+
      '<div class="sec card"><div class="eyebrow">Based in</div><div class="h3">'+esc(P.location)+'</div><p class="sub">Formerly Seattle.</p></div>'+
    '</div>';
    $$('[data-copy]', w.body).forEach(function(b){ b.addEventListener('click', function(){
      var v = b.getAttribute('data-copy'), href = b.getAttribute('data-href');
      var done = function(ok){ toast(ok ? 'Copied to clipboard' : 'Copy this', v); };
      if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(v).then(function(){ done(true); }, function(){ done(false); }); } else { done(false); }
      if(isMobile() && href){ setTimeout(function(){ window.location.href = href; }, 350); }
    }); });
  };

/* tigOS core app.js, part 10: users easter eggs. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- users + easter eggs ---------------- */
  var USER = { name:'chase' };
  var USERS = { chase:{ pw:null, home:'/Users/chase', shell:'%' }, ariel:{ pw:'love', home:'/Users/ariel', shell:'%' }, greggyd:{ pw:'..', home:'/home/greggyd', shell:'$' } };
  /* every tile glyph turns into a heart for Ariel; each remembers its own glyph (data-h0), so tiles made later (a dock icon, a desktop alias) turn and come back too */
  function heartsOn(){ $$('.tile use').forEach(function(u){ if(!u.hasAttribute('data-h0')) u.setAttribute('data-h0', u.getAttribute('href')); u.setAttribute('href', '#i-heart'); }); }
  function heartsOff(){ $$('.tile use[data-h0]').forEach(function(u){ u.setAttribute('href', u.getAttribute('data-h0')); u.removeAttribute('data-h0'); }); }
  /* the active user survives a tab close: saved beside the prefs (localStorage, cookie fallback for the embed) and restored at boot without the pop-up */
  var USTORE = { get:function(){ var v = null; try { v = localStorage.getItem('tigos.user'); } catch(e){} if(!v){ try { var m = document.cookie.match(/(?:^|; )tigos\.user=([^;]*)/); if(m) v = decodeURIComponent(m[1]); } catch(e){} } return v && USERS[v] ? v : 'chase'; },
    set:function(v){ try { localStorage.setItem('tigos.user', v); } catch(e){} try { document.cookie = 'tigos.user='+encodeURIComponent(v)+'; max-age=31536000; path=/; SameSite=Lax'; } catch(e){} } };
  function fillHearts(box, n, big){ box.innerHTML = ''; for(var i = 0; i < n; i++){ var h = document.createElement('i'); h.style.left = (Math.random()*100)+'%'; h.style.animationDuration = (big ? 5 : 14)+Math.random()*(big ? 6 : 12)+'s'; h.style.animationDelay = (-Math.random()*(big ? 9 : 24))+'s'; h.style.width = h.style.height = (big ? 14+Math.random()*22 : 10+Math.random()*18)+'px'; h.innerHTML = ic('heart'); box.appendChild(h); } }
  /* each user has their own Dock and desktop (27-dock-edit.js, 27-desktop.js). GreggyD and Ariel keep Pets and the Arcade in theirs by
     default (Chase's stays the portfolio), as .xtra icons with the apps, before the separator */
  function userDock(){ if(!DESKS) return; dockBuild(); drender(); }
  function setUser(name, quiet){
    USER.name = name; root.classList.remove('u-ariel', 'u-greggyd'); heartsOff(); USTORE.set(name);
    var wh = $('#wallHearts'); if(wh) wh.innerHTML = '';
    userDock();   /* before the heart swap so Ariel's Arcade + Pets tiles turn into hearts too */
    if(name === 'ariel'){ root.classList.add('u-ariel'); heartsOn(); fillHearts($('#hearts'), 26, true); if(wh) fillHearts(wh, 18, false); if(!quiet) eggShow('love'); }
    if(name === 'greggyd'){ root.classList.add('u-greggyd'); if(!quiet) eggShow('tux'); if(!isMobile()) Object.keys(WM.wins).forEach(function(k){ var w = WM.wins[k]; if(!w.max && w.el.offsetLeft < 80) w.el.style.left = '84px'; }); }
    if(typeof applyPrefs === 'function' && typeof PREF !== 'undefined') applyPrefs();   /* accent, wallpaper palette and the work area follow the user */
  }
/* tigOS core app.js, part 11: login screen. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- login screen (Log Out) ---------------- */
  var loginEl = $('#login'), loginPw = $('#loginPw'), loginIn = $('#loginIn'), loginSel = null;
  var USER_META = { chase:{ label:'Chase Johnston', sub:'Admin' }, ariel:{ label:'Ariel', sub:'' }, greggyd:{ label:'greggyd', sub:'' } };
  function loginScreen(){
    Object.keys(WM.wins).forEach(function(k){ close(WM.wins[k]); }); pw.hidden = true; menu.hidden = true; mbLogo.classList.remove('on'); ctxClose(true);
    /* Chase always; the other profile only if that is who was logged in (so GreggyD's or Ariel's tile appears after their own session, never before) */
    var others = USER.name !== 'chase' && USERS[USER.name] ? [USER.name] : [], tux = $('#tux .tux-svg');
    var avatar = function(u){ return u === 'greggyd' ? (tux ? tux.outerHTML.replace('class="tux-svg"', 'class="av-tux"') : 'G') : u === 'ariel' ? ic('heart') : 'A'; };
    $('#loginUsers').innerHTML = '<button class="lu" type="button" data-user="chase"><span class="av a-chase">'+(A.headshot ? '<img src="'+A.headshot+'" alt="">' : 'C')+'</span><b>'+esc(USER_META.chase.label)+'<small>'+USER_META.chase.sub+'</small></b></button>'+
      others.map(function(u){ return '<button class="lu" type="button" data-user="'+u+'"><span class="av a-'+u+'">'+avatar(u)+'</span><b>'+esc(USER_META[u].label)+'<small>'+(USER_META[u].sub || (u === 'greggyd' ? 'Ubuntu' : 'Standard'))+'</small></b></button>'; }).join('');
    loginSel = null; loginPw.hidden = true; loginIn.value = ''; $('#loginHint').textContent = ''; $$('.lu', loginEl).forEach(function(b){ b.classList.remove('dim', 'sel'); });
    loginEl.classList.remove('leaving'); loginEl.hidden = false; tick();
    $$('.lu', loginEl).forEach(function(b){ b.addEventListener('click', function(e){ e.stopPropagation(); var u = b.getAttribute('data-user');
      if(u === 'chase'){ loginGo('chase'); return; }
      loginSel = u; $$('.lu', loginEl).forEach(function(x){ x.classList.toggle('dim', x !== b); x.classList.toggle('sel', x === b); });
      loginPw.hidden = false; loginIn.value = ''; $('#loginHint').textContent = 'Enter password for '+USER_META[u].label; setTimeout(function(){ loginIn.focus(); }, 30);
    }); });
  }
  var loginT;
  function loginGo(u){
    if(loginEl.classList.contains('leaving')) return;
    $('#loginHint').textContent = 'Logging in\u2026';
    loginEl.classList.add('leaving'); root.classList.add('entering');
    clearTimeout(loginT);
    loginT = setTimeout(function(){
      loginEl.hidden = true; loginEl.classList.remove('leaving');
      if(u !== USER.name) setUser(u);
      loginItems();   /* the apps this user set to Open at Login */
      var g = greeting(); toast(u === 'chase' ? 'Welcome back, Chase' : g.t, 'Logged in as '+u+'@tigos.', g.i);
      setTimeout(function(){ root.classList.remove('entering'); }, 1400);
    }, 550);
  }
  loginPw.addEventListener('submit', function(e){ e.preventDefault(); if(!loginSel) return; if(loginIn.value === USERS[loginSel].pw){ loginGo(loginSel); } else { loginPw.classList.remove('shake'); void loginPw.offsetWidth; loginPw.classList.add('shake'); loginIn.value = ''; $('#loginHint').textContent = 'Wrong password. Try again.'; } });
  loginEl.addEventListener('click', function(e){ if(e.target === loginEl || e.target.classList.contains('login-bg')){ if(loginSel){ loginSel = null; loginPw.hidden = true; $$('.lu', loginEl).forEach(function(x){ x.classList.remove('dim', 'sel'); }); $('#loginHint').textContent = ''; } } });

/* tigOS core app.js, part 12: ladybugs. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- ladybugs (Hailey) ---------------- */
  var bugsEl = $('#bugs'), bugsOn = false;
  function bugsRun(){
    if(bugsOn) return; bugsOn = true; bugsEl.innerHTML = '';
    var n = isMobile() ? 7 : 12, H = root.clientHeight;
    for(var i = 0; i < n; i++){
      var b = document.createElement('div'); var rtl = i % 3 === 2; b.className = 'bug'+(rtl ? ' rtl' : '');
      var scale = .7 + Math.random()*.6, dur = 2.2 + Math.random()*1.1, delay = Math.random()*.9;
      b.style.top = (40 + Math.random()*(H - 140))+'px'; b.style.setProperty('--dur', dur+'s'); b.style.animationDelay = delay+'s'; b.style.transform = 'scale('+scale+')';
      b.innerHTML = '<svg viewBox="0 0 64 64"'+(rtl ? ' style="transform:scaleX(-1)"' : '')+'>'+
        '<path class="leg" d="M18 30 L8 24"/><path class="leg b" d="M18 36 L7 38"/><path class="leg" d="M22 42 L14 50"/><path class="leg b" d="M46 30 L56 24"/><path class="leg" d="M46 36 L57 38"/><path class="leg b" d="M42 42 L50 50"/>'+
        '<ellipse cx="32" cy="36" rx="16" ry="14" fill="#e11d48"/><path d="M32 22v28" stroke="#1a1a1a" stroke-width="1.6"/>'+
        '<circle cx="25" cy="32" r="2.6" fill="#1a1a1a"/><circle cx="39" cy="33" r="2.6" fill="#1a1a1a"/><circle cx="28" cy="42" r="2.2" fill="#1a1a1a"/><circle cx="37" cy="42" r="2.2" fill="#1a1a1a"/><circle cx="32" cy="27" r="1.8" fill="#1a1a1a"/>'+
        '<circle cx="32" cy="20" r="6.5" fill="#1a1a1a"/><circle cx="29.5" cy="18.5" r="1.4" fill="#fff"/><circle cx="34.5" cy="18.5" r="1.4" fill="#fff"/><path d="M28 14 L25 9 M36 14 L39 9" stroke="#1a1a1a" stroke-width="1.6" stroke-linecap="round"/>'+
        '</svg>';
      bugsEl.appendChild(b);
    }
    setTimeout(function(){ bugsEl.innerHTML = ''; bugsOn = false; }, 4400);
  }

/* tigOS core app.js, part 13 (gl): the pets renderer. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- pets in 3D ----------------
     Every pet is a Blender model in zoo.glb (blender/pets.py): one root per species, joints as named empties. One offscreen WebGL renderer
     draws every live pet (the desktop one, the Pets window cards, the Settings picker) and copies each frame onto that pet's own 2D canvas,
     so there is one GL context however many pets are on screen. The state machine in 13-pets.js keeps adding mood classes to the .pet
     element exactly as before; the rig reads those classes every frame and poses the joints, so the SVG-era behaviour, tests and CSS
     (hop, land, dangle, poof, the UFO beam-up on .art) all carry over. Until Three.js and the model are in, or without WebGL, the SVG
     in .art stays visible as the fallback. */
  var PET3 = { state:0, r:null, cam:null, scene:null, glb:null, insts:[], raf:0, last:0, frame:0, wait:[], err:'' };   /* state: 0 idle, 1 loading, 2 ready, 3 failed */
  var PET3_MAXPX = 288, PET3_UFO_ASPECT = 1.15;   /* the saucer frame is tall: the beam has to reach down over the cow */
  function pet3Load(){
    if(PET3.state) return; PET3.state = 1;
    if(!window.WebGLRenderingContext){ PET3.state = 3; PET3.err = 'no webgl'; return; }
    loadLib('three', function(){
      var THREE = window.THREE; if(!THREE || !THREE.GLTFLoader){ PET3.state = 3; PET3.err = 'no three'; return; }
      try {
        PET3.r = new THREE.WebGLRenderer({ alpha:true, antialias:true, premultipliedAlpha:true, powerPreference:'low-power' });
        PET3.r.setClearColor(0x000000, 0); PET3.r.setPixelRatio(1); PET3.r.setSize(PET3_MAXPX, PET3_MAXPX, false);
      } catch(e){ PET3.state = 3; PET3.err = 'renderer: '+(e && e.message); return; }
      PET3.scene = new THREE.Scene();
      var hemi = new THREE.HemisphereLight(0xfff4e6, 0x7d86a0, 1.2), sun = new THREE.DirectionalLight(0xffffff, 2.7), fill = new THREE.DirectionalLight(0xbfd8ff, .6);
      sun.position.set(2.2, 4, 3.2); fill.position.set(-2.5, 1.2, 2); PET3.scene.add(hemi, sun, fill);
      PET3.cam = new THREE.PerspectiveCamera(30, 1, .1, 30);
      var url = window.TIG_ASSETS && window.TIG_ASSETS.zoo;
      if(!url){ PET3.state = 3; PET3.err = 'no asset'; return; }
      if(!/^https?:/.test(location.protocol)) return;   /* fetch() has no file: scheme; tests hand the bytes in through tigPets.parse */
      new THREE.GLTFLoader().load(url, function(gltf){ pet3Model(gltf.scene); }, undefined, function(e){ PET3.state = 3; PET3.err = String(e && e.message || e || 'load'); });
    }, function(){ PET3.state = 3; PET3.err = 'three failed'; });
  }
  function pet3Parse(buf, cb){ var go = function(){ if(!window.THREE){ if(cb) cb(new Error(PET3.err || 'no three')); return; } new window.THREE.GLTFLoader().parse(buf, '', function(gltf){ pet3Model(gltf.scene); if(cb) cb(null); }, function(e){ PET3.state = 3; PET3.err = String(e && e.message || e); if(cb) cb(e); }); };
    if(PET3.r) go(); else { PET3.state = 0; pet3Load(); var n = 0, tick = function(){ if(PET3.r) go(); else if(PET3.state === 3) cb && cb(new Error(PET3.err)); else if(++n < 400) setTimeout(tick, 50); }; tick(); } }
  function pet3Model(sc){
    var THREE = window.THREE;
    sc.traverse(function(o){ if(!o.isMesh) return; o.castShadow = o.receiveShadow = false; o.frustumCulled = false; var m = o.material; if(!m) return;
      if(m.transparent || m.opacity < 1){ m.transparent = true; m.depthWrite = false; }
      if(/^(Beam|Dome)/.test(m.name)) m.side = THREE.DoubleSide;
      if(/Highlight/.test(m.name)){ m.emissiveIntensity = .8; }
      if(/^(Cyan|Violet|AlienGlow|Light|Spit)/.test(m.name)) m.emissiveIntensity = Math.max(m.emissiveIntensity, 1.2);
      if(/^Beam/.test(m.name)){ m.emissive.setHex(0x2eff5c); m.emissiveIntensity = 1.3; m.color.setHex(0x2eff5c); m.transparent = true; m.opacity = .6; m.depthWrite = false; m.side = THREE.DoubleSide; }   /* a solid green: emissive so the lights never grey it, opaque enough that the wallpaper does not tint it */
      /* richer coats: the flat Blender colours read a little chalky under the hemisphere light, so saturate the non-emissive ones */
      if(!m.emissive || m.emissive.getHex() === 0){ var hsl = { h:0, s:0, l:0 }; m.color.getHSL(hsl); if(hsl.s > .08 && hsl.l > .1 && hsl.l < .92) m.color.setHSL(hsl.h, Math.min(1, hsl.s*1.15), Math.max(0, hsl.l*.97)); } });
    PET3.glb = sc; PET3.state = 2;
    PET3.insts.forEach(function(inst){ if(!inst.g) pet3Build(inst); });
    var w = PET3.wait; PET3.wait = []; w.forEach(function(fn){ try { fn(); } catch(e){} });
    pet3Tick();
  }
  /* clone a species out of the scene: fresh materials per instance (emissive tweaks stay local), joints keyed by their short name */
  function pet3Clone(name){
    var src = PET3.glb.getObjectByName(name); if(!src) return null;
    var g = src.clone(true), seen = {}, j = {}, mats = {}, pre = name+'_';
    g.traverse(function(o){
      if(o.isMesh){ var m = o.material, k = m.name || m.uuid; if(!seen[k]){ seen[k] = m.clone(); seen[k].name = m.name; } o.material = seen[k]; mats[m.name] = seen[k]; }
      if(o !== g && o.name.indexOf(pre) === 0){ var short = o.name.slice(pre.length).replace(/\.\d+$/, ''); if(!/_/.test(short) && !j[short]) j[short] = o; } });
    Object.keys(j).forEach(function(k){ var o = j[k]; o.userData.rest = { p:o.position.clone(), r:o.rotation.clone(), s:o.scale.clone() }; });
    g.position.set(0, 0, 0); g.rotation.set(0, 0, 0); g.userData.j = j; g.userData.mats = mats; return g;
  }
  function pet3Attach(el, opts){
    if(!el || $('.art canvas', el)) return null;
    var art = $('.art', el); if(!art) return null;
    var cv = document.createElement('canvas'); cv.className = 'c3'; cv.setAttribute('aria-hidden', 'true'); art.appendChild(cv);
    var inst = { el:el, kind:(opts && opts.kind) || el.getAttribute('data-pet'), cv:cv, ctx:cv.getContext('2d'), g:null, j:null, px:0, py:0, aspect:(opts && opts.aspect) || 1, mini:!!(opts && opts.mini), t:Math.random()*100, mood:'', moodT:0, blinkAt:2 + Math.random()*3, blink:0, earAt:3 + Math.random()*4, drawn:0, yaw:0, seed:Math.random()*6.28, ufo:!!(opts && opts.ufo) };
    PET3.insts.push(inst);
    if(PET3.state === 2) pet3Build(inst); else pet3Load();
    pet3Tick(); return inst;
  }
  function pet3Scan(scope){ $$('.pet', scope || document).forEach(function(p){ if(p.getAttribute('data-pet')) pet3Attach(p, { mini:!p.closest('#pets') }); }); }
  function pet3Build(inst){
    var name = inst.ufo ? 'Ufo' : { cat:'Cat', dog:'Dog', cow:'Cow', penguin:'Penguin', ladybug:'Ladybug', aki:'Aki', tiger:'Tiger', alien:'Alien', llama:'Llama' }[inst.kind];
    var g = name && pet3Clone(name); if(!g){ inst.fail = 'no node '+name; return; }
    inst.g = g; inst.j = g.userData.j; inst.mats = g.userData.mats;
    inst.scale = { llama:.8, alien:.86, cow:.94, dog:.96 }[inst.kind] || 1; g.scale.setScalar(inst.scale);   /* the tall ones fit the same frame as the rest */
    var j = inst.j; if(j.FlyL) j.FlyL.visible = false; if(j.FlyR) j.FlyR.visible = false; if(j.Spit) j.Spit.visible = false; if(j.EyesHappy) j.EyesHappy.visible = false; if(j.Beam) j.Beam.visible = false;
  }
  function pet3Drop(inst){ var i = PET3.insts.indexOf(inst); if(i > -1) PET3.insts.splice(i, 1); if(inst.g){ inst.g.traverse(function(o){ if(o.isMesh && o.material) o.material.dispose(); }); inst.g = null; } if(inst.cv && inst.cv.parentNode) inst.cv.parentNode.removeChild(inst.cv); inst.el.classList.remove('gl'); }
  function pet3Tick(){ if(PET3.raf || !PET3.insts.length || PET3.state !== 2) return; PET3.raf = requestAnimationFrame(pet3Frame); }
  function pet3Frame(now){
    PET3.raf = 0; var live = PET3.insts.slice(), any = false, dt = Math.min(.05, PET3.last ? (now - PET3.last)/1000 : .016); PET3.last = now; PET3.frame++;
    var rm = PREF.motion === 'off', party = root.classList.contains('party');
    live.forEach(function(inst){
      if(!inst.el.isConnected){ pet3Drop(inst); return; }
      any = true; if(!inst.g || document.hidden) return;
      if(inst.mini && (PET3.frame & 1)) return;                              /* window cards and picker chips at 30fps */
      var w = inst.el.offsetWidth || 112, dpr = Math.min(2, window.devicePixelRatio || 1), px = Math.min(PET3_MAXPX, Math.round(w*dpr)), py = Math.round(px/inst.aspect);
      if(!px || !py) return;
      if(px !== inst.px || py !== inst.py){ inst.px = px; inst.py = py; inst.cv.width = px; inst.cv.height = py; inst.size = 1; }
      if(rm && inst.drawn && !inst.size) return;                              /* reduced motion: one still frame */
      inst.size = 0;
      var step = rm ? 0 : dt*(party ? 2.2 : 1); inst.t += step;
      pet3Pose(inst, step, party);
      var r = PET3.r, cam = PET3.cam;
      if(r.domElement.width !== px || r.domElement.height !== py) r.setSize(px, py, false);
      cam.aspect = inst.aspect; if(inst.ufo){ cam.position.set(0, .1, 5.2); cam.lookAt(0, -.78, 0); } else { cam.position.set(0, 1.05, 3.55); cam.lookAt(0, .6, 0); } cam.updateProjectionMatrix();
      PET3.scene.add(inst.g); r.render(PET3.scene, cam); PET3.scene.remove(inst.g);
      inst.ctx.clearRect(0, 0, px, py); inst.ctx.drawImage(r.domElement, 0, r.domElement.height - py, px, py, 0, 0, px, py);
      if(!inst.drawn){ inst.drawn = 1; inst.el.classList.add('gl'); }
    });
    if(any) PET3.raf = requestAnimationFrame(pet3Frame);
  }
  /* ---------------- the rig: rest pose + offsets from the mood classes ---------------- */
  function pet3Pose(inst, dt, party){
    var j = inst.j, g = inst.g, el = inst.el, t = inst.t, cl = el.classList, T = Math.PI*2;
    var S = function(f, ph){ return Math.sin((t*f + (ph || 0))*T); };
    var A = function(f, ph){ return Math.abs(S(f, ph)); };
    var has = function(c){ return cl.contains(c); };
    var mood = ['nap', 'walk', 'hop', 'look', 'trick', 'say', 'sit', 'scratch', 'abduct'].filter(has)[0] || '';
    if(mood !== inst.mood){ inst.mood = mood; inst.moodT = 0; inst.spat = false; } inst.moodT += dt;
    var m = inst.moodT, ph = function(dur){ return Math.max(0, Math.min(1, m/dur)); }, ease = function(x){ return x < .5 ? 2*x*x : 1 - Math.pow(-2*x + 2, 2)/2; };
    var bump = function(x){ return Math.sin(Math.min(1, Math.max(0, x))*Math.PI); };   /* 0 -> 1 -> 0 over x 0..1 */
    Object.keys(j).forEach(function(k){ var o = j[k], rs = o.userData.rest; if(!rs) return; o.position.copy(rs.p); o.rotation.copy(rs.r); o.scale.copy(rs.s); });
    var rot = function(k, x, y, z){ var o = j[k]; if(!o) return; o.rotation.x += x || 0; o.rotation.y += y || 0; o.rotation.z += z || 0; };
    var mov = function(k, x, y, z){ var o = j[k]; if(!o) return; o.position.x += x || 0; o.position.y += y || 0; o.position.z += z || 0; };
    var scl = function(k, x, y, z){ var o = j[k]; if(!o) return; o.scale.x *= x == null ? 1 : x; o.scale.y *= y == null ? 1 : y; o.scale.z *= z == null ? 1 : z; };
    var glow = function(mat, v){ var mm = inst.mats[mat]; if(mm) mm.emissiveIntensity = v; };
    var kind = inst.kind, nap = mood === 'nap', walk = mood === 'walk', look = mood === 'look', trick = mood === 'trick', sit = mood === 'sit', scratch = mood === 'scratch', say = mood === 'say' || has('talk'), happy = has('happy'), drag = has('drag'), beamed = has('beamed'), hop = mood === 'hop';
    if(inst.ufo){
      rot('Hull', S(.6)*.03, t*.9, S(.45, .3)*.03); mov('Hull', 0, S(.55)*.05, 0);
      for(var i = 1; i <= 6; i++){ var L = j['Light'+i]; if(L && L.material){ var pal = [0xff5d8f, 0xffd23f, 0x5ff2ff, 0x8fffb0, 0xa78bfa]; L.material.emissive.setHex(pal[(i + Math.floor(t*5))%pal.length]); L.material.color.setHex(pal[(i + Math.floor(t*5))%pal.length]); } }
      var beam = has('beam'); if(j.Beam){ j.Beam.visible = beam; if(beam){ j.Beam.material.opacity = .55 + A(6)*.15; scl('Beam', 1 + S(9)*.04, 1, 1 + S(7, .2)*.04); } }
      return;
    }
    /* facing: turn toward the walk direction (--face is set by petWalk); cards face slightly right */
    var face = parseFloat(el.style.getPropertyValue('--face')) || 1, yawT = face*.5;
    if(kind === 'penguin' || kind === 'aki' || kind === 'alien') yawT = face*.35;
    inst.yaw += (yawT - inst.yaw)*Math.min(1, dt*6); g.rotation.y = inst.yaw; g.position.set(0, 0, 0); g.rotation.x = 0; g.rotation.z = 0; g.scale.setScalar(inst.scale || 1);
    /* blink: both eyes together every few seconds, a third eye a beat later; the eye highlight is a child so it squashes too */
    inst.blinkAt -= dt; if(inst.blinkAt < 0){ inst.blink = .14; inst.blinkAt = 2.6 + Math.random()*3.2; } inst.blink -= dt;
    var lid = nap ? .08 : inst.blink > 0 ? .1 : 1; scl('EyeL', 1, lid, 1); scl('EyeR', 1, lid, 1);
    if(j.Eye3) scl('Eye3', 1, nap ? .08 : (inst.blink > -.12 && inst.blink < .02) ? .1 : say ? 1.25 : 1, 1);
    /* ear twitch */
    inst.earAt -= dt; if(inst.earAt < 0){ inst.ear = .3; inst.earAt = 3 + Math.random()*5; } inst.ear -= dt;
    if(inst.ear > 0){ rot('EarL', 0, 0, -bump(1 - inst.ear/.3)*.35); }
    /* breathing, idle head drift */
    var quad = /^(cat|tiger|dog|cow|llama)$/.test(kind);
    scl('Body', 1, 1 + S(.42)*.012, 1 + S(.42)*.008);
    rot('Head', S(.31, .2)*.04, S(.23)*.06, S(.19, .5)*.02);
    if(quad){ rot('Tail', S(.75)*.05 + .1, S(.7)*.28, 0); }
    if(walk){
      var f = { llama:1.6, cow:1.5, penguin:2.4, ladybug:3.2, alien:2.6 }[kind] || 2.1, sw = { cow:.42, llama:.5, dog:.6 }[kind] || .55;
      if(quad || kind === 'llama'){ rot('LegFL', S(f)*sw); rot('LegBR', S(f)*sw); rot('LegFR', -S(f)*sw); rot('LegBL', -S(f)*sw); mov('Body', 0, A(f*2)*.03, 0); rot('Head', A(f*2)*.05 - .04, 0, 0); rot('Tail', 0, S(f*2)*.3, 0); if(kind === 'llama') rot('Neck', S(f*2)*.05, 0, 0); }
      if(kind === 'penguin'){ rot('Body', 0, 0, S(f)*.14); rot('LegFL', S(f)*.4); rot('LegFR', -S(f)*.4); rot('FlipL', 0, 0, .25 + A(f)*.25); rot('FlipR', 0, 0, -.25 - A(f, .5)*.25); mov('Body', 0, A(f*2)*.02, 0); }
      if(kind === 'ladybug'){ ['FL', 'MR', 'BL'].forEach(function(k){ rot('Leg'+k, S(f)*.35); }); ['FR', 'ML', 'BR'].forEach(function(k){ rot('Leg'+k, -S(f)*.35); }); mov('Body', 0, A(f*2)*.008, 0); }
      if(kind === 'alien'){ rot('LegL', S(f)*.45); rot('LegR', -S(f)*.45); rot('ArmL', -S(f)*.35); rot('ArmR', S(f)*.35); mov('Body', 0, A(f*2)*.02, 0); }
      if(kind === 'aki'){ rot('Body', 0, 0, -face*.08); rot('ArmL', .3); rot('ArmR', .3); }
    }
    if(nap){
      var d = ease(ph(1.2));
      if(quad){ mov('Body', 0, -.16*d, 0); ['LegFL', 'LegFR'].forEach(function(k){ rot(k, -1.35*d); }); ['LegBL', 'LegBR'].forEach(function(k){ rot(k, 1.35*d); }); rot('Head', .38*d, .25*d*(kind === 'cat' || kind === 'tiger' ? 1 : 0), 0); rot('Tail', -.2*d, .9*d, 0); if(kind === 'llama'){ rot('Neck', .55*d, 0, 0); rot('Head', .3*d, 0, 0); } }
      if(kind === 'penguin'){ mov('Body', 0, -.06*d, 0); rot('Head', .35*d, 0, 0); rot('FlipL', 0, 0, .1*d); rot('FlipR', 0, 0, -.1*d); }
      if(kind === 'ladybug'){ mov('Body', 0, -.03*d, 0); rot('AntL', .6*d, 0, 0); rot('AntR', .6*d, 0, 0); }
      if(kind === 'alien'){ mov('Body', 0, -.2*d, 0); rot('LegL', -1.4*d); rot('LegR', -1.4*d); rot('Head', .3*d, 0, .1*d); rot('ArmL', -.4*d, 0, .5*d); rot('ArmR', -.4*d, 0, -.5*d); }
      if(kind === 'aki'){ mov('Body', 0, -.26*d, 0); rot('Head', .18*d, 0, 0); rot('ArmL', 0, 0, .4*d); rot('ArmR', 0, 0, -.4*d); if(j.Jet1) j.Jet1.visible = j.Jet2.visible = d < .6; scl('Eyes', 1, 1 - .78*d, 1); glow('Violet', .25); glow('Cyan', .3); }
      scl('Body', 1, 1 + S(.25)*.03, 1 + S(.25)*.02);
    } else if(kind === 'aki'){ if(j.Jet1){ j.Jet1.visible = j.Jet2.visible = true; } glow('Violet', 1.4 + S(.6)*.6); glow('Cyan', 1.2 + S(1.1)*.3); }
    if(look){ var lk = ph(1.7); rot('Head', -.06, Math.sin(lk*T)*.6, Math.sin(lk*T*2)*.05); if(kind === 'dog'){ rot('EarL', -.25*bump(lk)); rot('EarR', -.25*bump(lk)); } if(kind === 'llama') rot('Neck', -.12*bump(lk), Math.sin(lk*T)*.25, 0); if(kind === 'alien'){ rot('AntL', 0, 0, -.3*bump(lk)); rot('AntR', 0, 0, .3*bump(lk)); } }
    if(sit && quad){ var st = bump(ph(3.4))*1.0; st = Math.min(1, st*2.2); var deep = kind === 'dog' ? 1.5 : 1; rot('Body', -.28*st*deep, 0, 0); mov('Body', 0, -.1*st*deep, 0); rot('LegBL', 1.3*st); rot('LegBR', 1.3*st); rot('LegFL', .28*st*deep); rot('LegFR', .28*st*deep); rot('Head', .25*st*deep, 0, 0); if(kind === 'dog'){ rot('EarL', -.15*st); rot('EarR', -.15*st); rot('Tail', 0, S(1.2)*.5*st, 0); } if(kind === 'cat' || kind === 'tiger') rot('Tail', .3*st, S(.5)*.4*st + .4*st, 0); if(kind === 'llama') rot('Neck', .2*st, 0, 0); }
    if(sit && kind === 'penguin'){ var sp = Math.min(1, bump(ph(3.4))*2.2); mov('Body', 0, -.05*sp, 0); rot('Body', .15*sp, 0, 0); rot('Head', .2*sp, .3*sp*S(.4), 0); }
    if(sit && kind === 'alien'){ var sa = Math.min(1, bump(ph(3.4))*2.2); mov('Body', 0, -.16*sa, 0); rot('LegL', -1.5*sa); rot('LegR', -1.5*sa); rot('Head', -.1*sa, 0, 0); rot('ArmL', -.9*sa, 0, .4*sa); rot('ArmR', -.9*sa, 0, -.4*sa); }
    if(sit && kind === 'ladybug'){ var sl = Math.min(1, bump(ph(3.4))*2.2); rot('WingL', 0, 0, -.55*sl); rot('WingR', 0, 0, .55*sl); }
    if(sit && kind === 'aki'){ var sk = Math.min(1, bump(ph(3.4))*2.2); mov('Body', 0, -.22*sk, 0); rot('Head', -.12*sk, .4*sk*S(.3), 0); }
    if(scratch){
      if(quad){ rot('LegBL', -1.7 + S(7)*.25, 0, .5); rot('Head', .1, .35, -.3); rot('EarL', 0, 0, S(7)*.3); }
      if(kind === 'penguin'){ rot('FlipL', 0, 0, 1.6 + S(6)*.3); rot('Head', 0, .3, -.25); }
      if(kind === 'ladybug'){ rot('LegFL', -1.2 + S(8)*.3); rot('AntL', S(8)*.3, 0, 0); }
      if(kind === 'alien'){ rot('ArmL', -2.6, 0, .4); rot('Head', .05, .2, -.3); rot('AntL', 0, 0, S(6)*.2); }
      if(kind === 'aki'){ rot('Head', 0, S(1.5)*.45, 0); rot('Ant', 0, 0, S(3)*.2); glow('Cyan', 2.4 + S(6)*.8); }
    }
    if(say){ var talkK = A(4.5); if(j.Jaw) rot('Jaw', talkK*.4); else rot('Head', -talkK*.08 - .04, 0, 0); if(kind === 'cow') rot('Head', -.18, 0, 0); if(kind === 'llama') rot('Neck', -.15, 0, 0); if(kind === 'dog') scl('Tongue', 1, 1.2 + talkK*.5, 1); if(kind === 'alien'){ rot('AntL', 0, 0, -.2 - S(5)*.15); rot('AntR', 0, 0, .2 + S(5)*.15); } }
    if(happy){ rot('Head', 0, S(3)*.15, S(3, .25)*.15); if(quad) rot('Tail', 0, S(4)*.6, 0); if(kind === 'penguin'){ rot('FlipL', 0, 0, .6 + S(5)*.5); rot('FlipR', 0, 0, -.6 - S(5)*.5); } if(kind === 'ladybug'){ rot('AntL', 0, 0, -S(5)*.3); rot('AntR', 0, 0, S(5)*.3); } if(kind === 'alien' || kind === 'aki'){ rot('ArmL', -1.2 - S(3)*.5, 0, .3); rot('ArmR', -1.2 - S(3, .5)*.5, 0, -.3); } }
    if(kind === 'aki'){ var hp = happy || trick || has('talk'); if(j.Eyes) j.Eyes.visible = !hp; if(j.EyesHappy) j.EyesHappy.visible = hp; if(!nap){ scl('Jet1', 1, .7 + A(9)*.5, 1); scl('Jet2', 1, .7 + A(9, .5)*.5, 1); mov('Body', 0, S(.45)*.03, 0); rot('Ant', S(.8)*.06, 0, S(.6)*.06); } }
    if(kind === 'dog' && !nap){ var pant = happy || say || trick || walk; scl('Tongue', 1, pant ? .9 + A(1.6)*.4 : .35, 1); rot('Tail', 0, S(pant ? 3 : 1.4)*(pant ? .7 : .3), .25); }
    if(kind === 'cat' && !nap){ rot('Tail', S(.35)*.25, 0, 0); rot('EarR', S(.2)*.1, 0, 0); }
    if(kind === 'tiger' && !nap){ rot('Head', .1, 0, 0); rot('Tail', S(.6)*.3, S(.45)*.4, 0); }
    if(kind === 'cow' && !nap){ rot('EarL', 0, 0, S(.3)*.08); rot('EarR', 0, 0, -S(.3, .3)*.08); }
    if(kind === 'llama' && !nap){ rot('Jaw', A(1.1)*.16*(S(.09) > .3 ? 1 : 0)); rot('EarL', 0, S(.27)*.3, 0); rot('EarR', 0, -S(.27, .4)*.3, 0); rot('Knot', 0, 0, S(.5)*.06); rot('Tail', 0, S(1.1)*.3, 0); }
    if(kind === 'alien' && !nap){ rot('Head', 0, 0, S(.27)*.06); rot('AntL', S(.8)*.08, 0, -.05 + S(.6)*.08); rot('AntR', S(.8, .3)*.08, 0, .05 - S(.6, .3)*.08); glow('AlienGlow', 1.4 + S(.9)*.7); }
    if(kind === 'ladybug' && !nap){ rot('AntL', S(.9)*.12, 0, -S(.7)*.1); rot('AntR', S(.9, .3)*.12, 0, S(.7, .3)*.1); }
    if(kind === 'penguin' && !nap && !walk){ rot('FlipL', 0, 0, S(.5)*.06); rot('FlipR', 0, 0, -S(.5, .5)*.06); }
    /* ---- the signature moves (trick) ---- */
    if(trick){
      var p, k;
      if(kind === 'cat'){ p = ph(1.8); k = bump(Math.min(1, p*1.6)); rot('Body', .4*k, 0, 0); mov('Body', 0, -.06*k, .1*k); rot('LegFL', .9*k); rot('LegFR', .9*k); rot('LegBL', -.5*k); rot('LegBR', -.5*k); rot('Head', -.45*k, 0, 0); rot('Tail', -1.1*k, 0, 0); if(p > .55){ rot('LegFL', S(5)*.35); rot('LegFR', -S(5)*.35); } }   /* stretch, then knead */
      if(kind === 'tiger'){ p = ph(1.7); var c = bump(Math.min(1, p/.5)), lp = p > .45 ? bump((p - .45)/.55) : 0; mov('Body', 0, -.12*c + .34*lp, .4*lp); rot('Body', -.15*lp, 0, 0); ['LegFL', 'LegFR'].forEach(function(q){ rot(q, .6*c - .9*lp); }); ['LegBL', 'LegBR'].forEach(function(q){ rot(q, -.5*c + .8*lp); }); rot('Head', .25*c - .3*lp, 0, 0); rot('Tail', 0, S(6)*.5*c, 0); }   /* crouch and pounce at the viewer */
      if(kind === 'dog'){ p = ph(1.7); var bow = p < .55 ? Math.min(1, bump(p/.55)*1.6) : 0, hp2 = p >= .55 ? Math.abs(Math.sin((p - .55)/.45*Math.PI*2)) : 0; rot('Body', .32*bow, 0, 0); mov('Body', 0, -.12*bow + .16*hp2, -.06*bow); rot('LegFL', 1.1*bow - .3*hp2); rot('LegFR', 1.1*bow - .3*hp2); rot('LegBL', -.25*bow + .4*hp2); rot('LegBR', -.25*bow + .4*hp2); rot('Head', -.62*bow - .15*hp2, S(3)*.15*bow, 0); rot('EarL', -.3*bow); rot('EarR', -.3*bow); rot('Tail', .35, S(8)*1.0, 0); scl('Tongue', 1, 1.4 + A(5)*.5, 1); }   /* play bow (rear up, chin down, ears forward, tail helicopter) then two happy hops */
      if(kind === 'cow'){ rot('Head', A(4)*.08 - .05, S(.7)*.15, 0); rot('Tail', 0, S(3)*.8, 0); rot('EarL', 0, 0, S(2.5)*.4); rot('EarR', 0, 0, -S(2.5, .5)*.4); }   /* chew and swat */
      if(kind === 'penguin'){ p = ph(1.9); k = Math.min(1, bump(p)*1.6); rot('Body', 1.35*k, 0, 0); mov('Body', 0, -.17*k, .05*k); g.position.x += Math.sin(p*Math.PI)*face*.3; rot('FlipL', 0, 0, 1.1*k); rot('FlipR', 0, 0, -1.1*k); rot('Head', -.6*k, 0, 0); rot('LegFL', S(5)*.5*k); rot('LegFR', -S(5)*.5*k); }   /* belly slide */
      if(kind === 'ladybug'){ p = ph(1.9); k = Math.min(1, bump(p)*1.5); rot('WingL', 0, 0, -1.0*k); rot('WingR', 0, 0, 1.0*k); if(j.FlyL){ j.FlyL.visible = j.FlyR.visible = k > .35; rot('FlyL', 0, 0, S(30)*.6); rot('FlyR', 0, 0, -S(30)*.6); } mov('Body', 0, .15*k, 0); rot('Body', -.12*k, 0, 0); ['FL', 'FR', 'ML', 'MR', 'BL', 'BR'].forEach(function(q, i){ rot('Leg'+q, .4*k + S(6, i*.2)*.1*k); }); }   /* wings open, hover */
      if(kind === 'aki'){ p = ph(1.7); g.rotation.y += ease(p)*T; mov('Body', 0, .22*bump(p), 0); rot('ArmL', -2.6*bump(p)); rot('ArmR', -2.6*bump(p)); glow('Cyan', 2.6); glow('Violet', 2.6); }   /* a full spin, arms up */
      if(kind === 'alien'){ p = ph(1.9); k = Math.min(1, bump(p)*1.5); mov('Body', 0, .17*k, 0); g.rotation.y += ease(p)*T; rot('LegL', -.3*k + S(1.5)*.15*k); rot('LegR', -.3*k - S(1.5)*.15*k); rot('ArmL', -.9*k, 0, .6*k); rot('ArmR', -.9*k, 0, -.6*k); glow('AlienGlow', 2.8); rot('Head', -.15*k, 0, 0); }   /* levitates and turns, antennae blazing */
      if(kind === 'llama'){ p = ph(1.9); var back = bump(Math.min(1, p/.45)), fwd = p > .4 ? bump((p - .4)/.25) : 0; rot('Neck', -.4*back + .5*fwd, 0, 0); rot('Head', .2*back - .35*fwd, 0, 0); rot('Jaw', A(6)*.3*back + .5*fwd); rot('EarL', .5*back, 0, 0); rot('EarR', .5*back, 0, 0);
        if(j.Spit){ var sp2 = p > .5 ? (p - .5)/.5 : 0; j.Spit.visible = sp2 > 0 && sp2 < .95; mov('Spit', 0, sp2*.9 - sp2*sp2*2.2, sp2*1.4); scl('Spit', 1, 1, 1 + sp2); } }   /* winds up, spits */
    }
    if(hop){ if(quad){ rot('LegFL', -.4); rot('LegFR', -.4); rot('LegBL', .5); rot('LegBR', .5); } if(kind === 'alien'){ rot('LegL', .5); rot('LegR', .5); } if(kind === 'penguin'){ rot('FlipL', 0, 0, .7); rot('FlipR', 0, 0, -.7); } }
    if(drag || beamed){ var dg = beamed ? 2 : 1; if(quad){ rot('LegFL', S(1.2)*.2*dg); rot('LegFR', S(1.2, .3)*.2*dg); rot('LegBL', -S(1.2, .1)*.2*dg); rot('LegBR', -S(1.2, .4)*.2*dg); } if(kind === 'alien'){ rot('LegL', S(1.2)*.25*dg); rot('LegR', S(1.2, .4)*.25*dg); rot('ArmL', -.5*dg); rot('ArmR', -.5*dg); } if(kind === 'penguin'){ rot('FlipL', 0, 0, .9*dg); rot('FlipR', 0, 0, -.9*dg); } if(kind === 'aki'){ rot('ArmL', -.6); rot('ArmR', -.6); } if(quad) rot('Head', .12, 0, 0); if(beamed){ g.rotation.y += t*3; } }
    if(party){ rot('Head', 0, 0, S(2.2)*.25); mov('Body', 0, A(2.2)*.05, 0); if(quad) rot('Tail', 0, S(4)*.7, 0); }
    if(kind === 'ladybug'){ scl('Body', 1, 1, 1); }
  }
  /* the harness and curious people can reach the renderer here */
  window.tigPets = { parse:pet3Parse, peek:function(){ return { state:PET3.state, err:PET3.err, insts:PET3.insts.map(function(i){ return { kind:i.ufo ? 'ufo' : i.kind, joints:i.j ? Object.keys(i.j).sort() : [], drawn:i.drawn, px:i.px, py:i.py, mini:i.mini, mood:i.mood, fail:i.fail || '' }; }), nodes:PET3.glb ? PET3.glb.children.map(function(c){ return c.name; }) : [] }; },
    pose:function(kind){ var i = PET3.insts.filter(function(x){ return x.kind === kind && x.j; })[0]; if(!i) return null; var out = {}; Object.keys(i.j).forEach(function(k){ var o = i.j[k]; out[k] = { p:[o.position.x, o.position.y, o.position.z].map(function(v){ return +v.toFixed(3); }), r:[o.rotation.x, o.rotation.y, o.rotation.z].map(function(v){ return +v.toFixed(3); }), s:[o.scale.x, o.scale.y, o.scale.z].map(function(v){ return +v.toFixed(3); }), vis:o.visible }; }); out._yaw = +i.g.rotation.y.toFixed(3); return out; } };
/* tigOS core app.js, part 13: pets. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- pets (terminal: pet cat | dog | cow | penguin | ladybug | aki | tiger | alien | llama | off) ----------------
     Names, lines and the SVG fallback live in pets.js (TIG_PETS); the 3D models and the rig in 13-pets-gl.js. Behaviour is a tiny state machine: exactly one mood at a time, the next action is only
     scheduled once the current mood has finished (so nothing can walk while asleep), and wandering stays within a home
     radius of wherever the user last dropped the pet. */
  var petsEl = $('#pets');
  var PETS = window.TIG_PETS || {};
  var PET_ALIAS = { tiger:'tiger', tig:'tiger', rawr:'tiger', ladybug:'ladybug', bug:'ladybug', hailey:'ladybug', penguin:'penguin', pip:'penguin', cow:'cow', moo:'cow', dog:'dog', shepherd:'dog', 'german shepherd':'dog', germanshepherd:'dog', gsd:'dog', khloe:'dog', 'khlo\u00e9':'dog', puppy:'dog', cat:'cat', kitty:'cat', goob:'cat', aki:'aki', robot:'aki', bot:'aki', alien:'alien', zorp:'alien', et:'alien', martian:'alien', ufo:'alien', llama:'llama', kuzco:'llama', alpaca:'llama', lama:'llama' };
  var PET = { el:null, t:0, face:1, mood:'', home:0, busy:false }, petBin = $('#petBin');
  var PET_HOME = 130;   /* max px a pet wanders from where it was put down */
  function petEl(){ return $('.pet', petsEl); }
  function petApply(){
    var want = PREF.pet, cur = petEl();
    if(!want || !PETS[want]){ if(!PETS[want]) PREF.pet = ''; if(cur){ cur.remove(); } PET.el = null; clearTimeout(PET.t); return; }
    if(cur && cur.getAttribute('data-pet') === want) return;
    if(cur) cur.remove();
    var pt = PETS[want], el = document.createElement('div');
    el.className = 'pet'; el.setAttribute('data-pet', want); el.setAttribute('title', pt.name+' the '+pt.label);
    el.innerHTML = '<span class="shadow"></span><span class="body"><span class="art">'+pt.svg+'</span></span><span class="zz"><i>z</i><i>z</i><i>z</i></span><span class="hearts"><i>\u2665</i><i>\u2665</i><i>\u2665</i></span><span class="say"></span><span class="pname">'+esc(pt.name)+'</span>';
    petsEl.appendChild(el);
    var W = root.clientWidth, H = root.clientHeight, sz = el.offsetWidth || 112;
    el.style.left = Math.max(8, W - sz - 36)+'px';
    el.style.top = Math.max(48, H - sz - (isMobile() ? 104 : 112))+'px';
    PET.el = el; PET.face = 1; PET.mood = ''; PET.busy = false; PET.home = el.offsetLeft; petDrag(el); pet3Attach(el); petLoop();
  }
  var MOODS = ['walk', 'nap', 'hop', 'look', 'trick', 'say', 'sit', 'scratch', 'abduct'];
  function petClear(el){ MOODS.forEach(function(m){ el.classList.remove(m); }); el.classList.remove('drop'); }
  function petLoop(ms){ clearTimeout(PET.t); if(!PET.el) return; PET.t = setTimeout(petAct, ms != null ? ms : 1800 + Math.random()*3200); }
  /* run one mood for ms, then idle briefly, then pick the next one. Nothing else can start while busy. */
  function petMood(cls, ms, after){
    var el = PET.el; if(!el || PET.busy) return false;
    PET.busy = true; PET.mood = cls; el.classList.add(cls);
    clearTimeout(PET.t);
    PET.t = setTimeout(function(){ if(el.parentNode) el.classList.remove(cls); PET.busy = false; PET.mood = ''; if(after) after(); if(PET.el === el) petLoop(); }, ms);
    return true;
  }
  function petSay(txt, ms){ var el = PET.el; if(!el) return; var b = $('.say', el); b.textContent = txt; el.classList.add('talk'); clearTimeout(PET.sayT); PET.sayT = setTimeout(function(){ el.classList.remove('talk'); }, ms || 1800); }
  function petWalk(){
    var el = PET.el; if(!el || PET.busy) return false;
    var rr = root.getBoundingClientRect(), w = el.offsetWidth, x = el.offsetLeft;
    var lo = Math.max(0, PET.home - PET_HOME), hi = Math.min(rr.width - w, PET.home + PET_HOME);
    var nx = lo + Math.random()*(hi - lo), dist = nx - x;
    if(Math.abs(dist) < 28) return false;
    PET.face = dist < 0 ? -1 : 1; el.style.setProperty('--face', PET.face);
    var speed = { aki:60, alien:52, llama:50, tiger:48, penguin:36, ladybug:40 }[el.getAttribute('data-pet')] || 44, dur = Math.abs(dist)/speed;
    el.style.setProperty('--wd', dur.toFixed(2)+'s');
    petMood('walk', dur*1000 + 60);
    el.style.left = nx+'px';
    return true;
  }
  function petAct(){
    var el = PET.el; if(!el){ return; }
    if(PET.busy || el.classList.contains('drag') || PREF.motion === 'off' || document.hidden || !$('#sleep').hidden || root.classList.contains('poweroff')){ petLoop(1200); return; }
    var kind = el.getAttribute('data-pet'), pt = PETS[kind] || {}, r = Math.random();
    if(kind === 'cow' && r < .04){ petUfo(el); return; }                         /* rare: abducted, then dropped back off */
    if(r < .30){ if(!petWalk()) petLoop(600); }
    else if(r < .44) petMood('look', 1700);
    else if(r < .54) petMood('hop', 700);
    else if(r < .64) petMood('nap', 7000 + Math.random()*6000);
    else if(r < .76) petMood('trick', { cat:1800, ladybug:1900, penguin:1900, alien:1900, llama:1900 }[kind] || 1700);
    else if(r < .86){ petMood('say', 1900); petSay((pt.say || ['\u2665'])[Math.floor(Math.random()*(pt.say || [1]).length)], 1800); }
    else if(r < .94) petMood('sit', 3200 + Math.random()*2400);
    else petMood('scratch', 1400);
  }
  /* the cow's UFO: saucer descends, beam, cow rises and vanishes, saucer leaves; 2.4s later it returns and drops the cow back on the same spot */
  var ufoEl = null;
  function petUfo(el, forGood){
    if(PET.busy && !forGood) return; PET.busy = true; PET.mood = 'abduct';
    clearTimeout(PET.t);
    if(ufoEl) ufoEl.remove();
    ufoEl = document.createElement('div'); ufoEl.className = 'ufo'; ufoEl.innerHTML = '<span class="art">'+(window.TIG_UFO || '')+'</span>'; petsEl.appendChild(ufoEl); pet3Attach(ufoEl, { ufo:true, aspect:PET3_UFO_ASPECT });
    var w = el.offsetWidth, uw = w*1.8, rr = root.getBoundingClientRect(), cx = el.offsetLeft + w/2, top = el.offsetTop;
    ufoEl.style.width = uw+'px'; ufoEl.style.left = Math.max(4, Math.min(rr.width - uw - 4, cx - uw/2))+'px'; ufoEl.style.top = Math.max(-10, top - w*0.98)+'px';
    el.classList.add('abduct');
    ufoEl.classList.add('arrive');
    setTimeout(function(){ if(!ufoEl) return; ufoEl.classList.add('beam'); el.classList.add('beamed'); }, 900);
    setTimeout(function(){ if(!ufoEl) return; ufoEl.classList.remove('beam'); ufoEl.classList.add('leave'); }, 2300);
    setTimeout(function(){
      if(!ufoEl) return;
      if(forGood){ ufoEl.remove(); ufoEl = null; el.remove(); PET.el = null; PET.busy = false; PREF.pet = ''; applyPrefs(); petUIs(); return; }
      ufoEl.classList.remove('leave', 'arrive'); void ufoEl.offsetWidth;
      setTimeout(function(){ if(!ufoEl) return; ufoEl.classList.add('arrive'); setTimeout(function(){ if(!ufoEl) return; ufoEl.classList.add('beam'); el.classList.remove('beamed'); el.classList.add('returned'); }, 800);
        setTimeout(function(){ if(!ufoEl) return; ufoEl.classList.remove('beam'); ufoEl.classList.add('leave'); el.classList.remove('abduct', 'returned'); el.classList.add('drop'); setTimeout(function(){ el.classList.remove('drop'); }, 560); petSay('moo?!', 2000); }, 1900);
        setTimeout(function(){ if(ufoEl){ ufoEl.remove(); ufoEl = null; } PET.busy = false; PET.mood = ''; if(PET.el === el) petLoop(); }, 3100); }, 2400);
    }, 3100);
  }
  function petDrag(el){
    var on = false, ox = 0, oy = 0, moved = false, hot = false;
    var overBin = function(){ var b = petBin.getBoundingClientRect(), r = el.getBoundingClientRect(), cx = r.left + r.width/2, cy = r.top + r.height/2; return cx > b.left - 24 && cx < b.right + 24 && cy > b.top - 24 && cy < b.bottom + 24; };
    el.addEventListener('pointerdown', function(e){
      if(el.classList.contains('poof') || el.classList.contains('abduct') || e.button > 0 || e.ctrlKey) return;   /* a right-click is for the pet's menu (27-menus.js), not a pick-up */
      on = true; moved = false; hot = false;
      var r = el.getBoundingClientRect();
      ox = e.clientX - r.left; oy = e.clientY - r.top;
      clearTimeout(PET.t); petClear(el); PET.busy = false; PET.mood = ''; el.classList.add('drag'); root.classList.add('pet-dragging');
      el.setPointerCapture(e.pointerId); e.preventDefault();
    });
    el.addEventListener('pointermove', function(e){
      if(!on) return; moved = true;
      var rr = root.getBoundingClientRect(), w2 = el.offsetWidth, h2 = el.offsetHeight;
      el.style.left = Math.max(-w2*.3, Math.min(rr.width - w2*.7, e.clientX - rr.left - ox))+'px';
      el.style.top = Math.max(30, Math.min(rr.height - h2*.6, e.clientY - rr.top - oy))+'px';
      var h = overBin(); if(h !== hot){ hot = h; petBin.classList.toggle('hot', h); el.classList.toggle('doomed', h); }
    });
    var end = function(){
      if(!on) return; on = false; el.classList.remove('drag'); root.classList.remove('pet-dragging'); petBin.classList.remove('hot');
      if(hot){ hot = false; el.classList.remove('doomed'); petGoodbye(el); return; }
      el.classList.remove('doomed');
      if(moved){ el.classList.add('drop'); setTimeout(function(){ el.classList.remove('drop'); }, 560); var rr = root.getBoundingClientRect(); el.style.left = Math.max(0, Math.min(rr.width - el.offsetWidth, el.offsetLeft))+'px'; PET.home = el.offsetLeft; }
      else { el.classList.remove('happy'); void el.offsetWidth; el.classList.add('happy'); setTimeout(function(){ el.classList.remove('happy'); }, 1400); }
      petLoop();
    };
    el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
  }
  function petGoodbye(el){
    var kind = el.getAttribute('data-pet'), pt = PETS[kind] || { name:'Your pet' };
    clearTimeout(PET.t);
    toast('Bye, '+pt.name, 'Type pet in the Terminal whenever you want company again.', 'heart');
    if(kind === 'cow'){                                                   /* the cow gets beamed up instead of poofing: step clear of the corner first */
      PET.busy = false; var rr = root.getBoundingClientRect(), w = el.offsetWidth;
      var tx = Math.max(w*.6, Math.min(rr.width - w*1.6, el.offsetLeft - w*1.3)), ty = Math.max(48, Math.min(rr.height - w*1.9, el.offsetTop - w*.6));
      el.style.setProperty('--wd', '.55s'); el.classList.add('walk', 'flee'); el.style.setProperty('--face', -1); el.style.left = tx+'px'; el.style.top = ty+'px';
      setTimeout(function(){ el.classList.remove('walk', 'flee'); petUfo(el, true); }, 620);
      return;
    }
    el.classList.add('poof'); PET.el = null;
    setTimeout(function(){ PREF.pet = ''; applyPrefs(); petUIs(); }, 430);
  }
  function petUIs(){ var sw = WM.wins.settings; if(sw) RENDER.settings(sw); var pw = WM.wins.pets; if(pw) RENDER.pets(pw); }   /* every surface that shows the pet state redraws together */
  function petSet(name){
    PREF.pet = name || ''; applyPrefs();
    petUIs();
    return PREF.pet;
  }

  var eggT = {};
  function eggShow(id){ var e = $('#'+id); e.hidden = false; clearTimeout(eggT[id]); eggT[id] = setTimeout(function(){ e.hidden = true; }, 5000); }
  $$('.egg').forEach(function(e){ e.addEventListener('click', function(){ e.hidden = true; clearTimeout(eggT[e.id]); }); });

  var TIGER = [
    '      /\\  _  /\\      ',
    '     /  \\/ \\/  \\     ',
    '    | |\\  _  /| |    ',
    '    | | \\/ \\/ | |    ',
    '   /|   O   O   |\\   ',
    '  | |  \\  V  /  | |  ',
    '   \\| ( .___. ) |/   ',
    '     \\__\\|_|/__/     '
  ];
  var TIGOS_WORD = [
    ' _   _        ___  ____  ',
    '| |_(_) __ _ / _ \\/ ___| ',
    '| __| |/ _` | | | \\___ \\ ',
    '| |_| | (_| | |_| |___) |',
    ' \\__|_|\\__, |\\___/|____/ ',
    '       |___/             '
  ];
  var TUX = [
    '    .--.    ', '   |o_o |   ', '   |:_/ |   ', '  //   \\ \\  ', ' (|     | ) ', "/'\\_   _/`\\ ", '\\___)=(___/ '
  ];
  var COW = function(msg){ var l = msg.length; return [' '+'_'.repeat(l+2), '< '+msg+' >', ' '+'-'.repeat(l+2), '        \\   ^__^', '         \\  (oo)\\_______', '            (__)\\       )\\/\\', '                ||----w |', '                ||     ||']; };
  var FORTUNES = ['Clear beats clever. Every time.', 'The best campaign is the one people can explain to a friend.', 'You will ship something today. Probably a deck.', 'A brief without a metric is a wish.', 'Ask the customer. Then ask again.', 'Nothing converts like a good headline and a short form.'];

  RENDER.terminal = function(w){
    var ps1 = function(){ var t = sh ? esc(sh.tilde()) : '~'; return USER.name === 'greggyd' ? 'greggyd@tigos:'+t+'$' : USER.name+'@tigos '+t+' '+USERS[USER.name].shell; };   /* the folder you are in (27-shell.js), ~ at home */
    var prompt = function(){ return '<span class="p">'+ps1()+'</span>'; };
    w.body.innerHTML = '<div class="term" id="termBody"><div class="line dim">tigOS 2.0 \u2014 type <span class="o">help</span> and press return.</div><div class="in"><span class="p" id="termP"></span><span class="tinw"><input id="termIn" type="text" autocomplete="off" spellcheck="false" aria-label="Terminal input"><span class="ghost" aria-hidden="true"><span class="gv" id="termGv"></span><i class="tcur" id="termCur"></i></span></span></div></div>';
    var body = $('#termBody', w.el), inp = $('#termIn', w.el), pEl = $('#termP', w.el), gv = $('#termGv', w.el);
    var syncCur = function(){ var n = inp.selectionStart == null ? inp.value.length : inp.selectionStart; gv.textContent = inp.type === 'password' ? '\u2022'.repeat(n) : inp.value.slice(0, n); };   /* the block sits at the caret, not at the end, so left/right arrows move it between letters */
    var syncSoon = function(){ requestAnimationFrame(syncCur); };
    inp.addEventListener('input', syncCur); inp.addEventListener('keyup', syncCur); inp.addEventListener('keydown', syncSoon); inp.addEventListener('select', syncCur); inp.addEventListener('pointerup', syncSoon); inp.addEventListener('focus', syncSoon); syncCur();
    var mode = null;   // { kind:'pw', user:'ariel', tries:n }
    var hist = [], hi = 0, draft = '';   // up/down arrow history
    var refreshPrompt = function(){ pEl.innerHTML = mode ? '<span class="dim">Password for '+mode.user+':</span>' : ps1(); inp.type = mode ? 'password' : 'text'; syncCur(); };
    refreshPrompt();
    var print = function(html, cls){ var d = document.createElement('div'); d.className = 'line '+(cls||''); d.innerHTML = html; body.insertBefore(d, $('.in', body)); body.parentNode.scrollTop = 1e9; };
    var art = function(lines, cls){ print(lines.map(esc).join('\n'), 'art'+(cls ? ' '+cls : '')); };
    var o = function(t){ return '<span class="o">'+t+'</span>'; };
    var login = function(name){
      setUser(name); if(sh) sh.reset(); refreshPrompt();   /* another user, another desktop: back home */
      if(name === 'ariel'){ print('Welcome back, ariel. Everything is pink now.', 'ok'); toast('i love you!', 'ariel@tigos is logged in'); }
      if(name === 'greggyd'){ art(TUX); print('Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.9.0-tigos x86_64)\n\n * Documentation:  help\n * Support:        hire\n\n0 updates can be applied immediately. You have mail.', 'ok'); toast('Tux has entered the chat', 'greggyd@tigos is logged in'); }
      if(name === 'chase'){ print('Welcome back, chase.', 'ok'); }
    };
    var CMD = {
      help: function(){
        print('portfolio:  '+['about','experience','journey','projects','skills','resume','contact','open &lt;app&gt;'].map(o).join('  '));
        print('files:      '+['ls','cd &lt;folder&gt;','cat &lt;note&gt;','nano &lt;note&gt;','mkdir','mv','rm','brew install &lt;app&gt;'].map(o).join('  '));
        print('system:     '+['neofetch','weather','uptime','fps','debug','users','su &lt;user&gt;','settings','theme light|dark','clear','exit'].map(o).join('  '));
        print('this is a real enough shell. most unix, mac, linux and windows commands do something. explore.', 'dim');
      },
      weather: function(arg){
        var q = (arg || '').trim().toLowerCase(), c = CITY;
        if(q){ var m = CITIES.filter(function(x){ return x.name.toLowerCase() === q || x.short.toLowerCase() === q || x.id === q; })[0]; if(!m){ print('no city called '+esc(q)+'. try: '+CITIES.map(function(x){ return o(x.short.toLowerCase()); }).join(' '), 'err'); return; } c = m; }
        var line = document.createElement('div'); line.className = 'line'; line.innerHTML = '<span class="dim">fetching '+esc(c.name)+'\u2026</span>'; body.insertBefore(line, $('.in', body));
        var render = function(w){
          if(!w){ line.innerHTML = '<span class="err">weather for '+esc(c.name)+' is not available right now.</span>'; return; }
          var glyph = { sun:'\u2600', moon:'\u263E', partly:'\u26C5', cloud:'\u2601', fog:'\u2592', rain:'\u2614', snow:'\u2744', storm:'\u26A1' }[w.now.kind] || '\u2600';
          var days = w.days.map(function(d){ return '  '+esc(d.d).padEnd(5, ' ')+' '+esc(WX_LABEL[d.k] || d.k).padEnd(15, ' ')+'  '+o(d.hi+'\u00b0')+' / '+d.lo+'\u00b0'; });
          line.className = 'line wx'; line.innerHTML = '<span class="wx-g">'+glyph+'</span> '+o(esc(c.name))+'  '+w.now.t+'\u00b0F  '+esc(w.now.label)+(days.length ? '\n'+days.join('\n') : '')+'\n<span class="dim">'+(c === CITY ? 'weather &lt;city&gt; for somewhere else. ' : 'your clock stays on '+esc(CITY.name)+'. ')+'source: open-meteo.</span>';
          body.parentNode.scrollTop = 1e9;
        };
        if(c === CITY && WX.now) render({ now:WX.now, days:WX.days }); else wxFetch(c).then(render);
      },
      wx: function(a){ CMD.weather(a); }, forecast: function(a){ CMD.weather(a); }, temp: function(a){ CMD.weather(a); },
      game: function(arg){ arcade(function(){ CMD._game(arg); }); },   /* hidden from help on purpose: an arcade you find by poking around */
      _game: function(arg){
        var a = (arg || '').trim().toLowerCase();
        if(!a || a === 'list' || a === 'ls' || a === '-l' || a === 'help'){ print('tigOS arcade  \u00b7  '+GAMES.length+' games, all built into this page'); GAMES.forEach(function(g, i){ if(g.premium && (!GAMES[i-1] || !GAMES[i-1].premium)) print('premium arcade games', 'dim'); print(o(String(i+1).padStart(2, ' '))+'  '+o(g.id.padEnd(10, ' '))+' '+esc(g.name).padEnd(12, ' ')+' <span class="dim">'+esc(g.blurb)+'</span>'); }); print('game &lt;name&gt; starts one. p pauses, r restarts, the green light goes full screen, esc comes back.', 'dim'); return; }
        var g = gameById(a); if(!g){ print('no game called '+esc(a)+'. try: '+GAMES.map(function(x){ return o(x.id); }).join(' '), 'err'); return; }
        open('games', { route:g.id }); print('launching '+o(esc(g.name))+'  \u00b7  '+esc(g.keys)+'. '+o('p')+' pauses, '+o('r')+' restarts.');
      },
      games: function(a){ CMD.game(a); }, play: function(a){ CMD.game(a); }, arcade: function(a){ CMD.game(a); },
      pets: function(a){ if((a || '').trim()){ CMD.pet(a); return; } open('pets'); print('opening Pets  \u00b7  pick one to bring it out, drag it anywhere, drop it on the X to say goodbye.'); },
      whoami: function(){ if(USER.name === 'chase') print(esc(P.name)+' \u2014 '+esc(P.title)+', '+esc(P.company)+'. '+esc(P.location)+'.'); else print(USER.name+' (uid=50'+(USER.name === 'ariel' ? '2' : '3')+') \u2014 guest of tigOS.'); },
      about: function(){ print(esc(P.summary)); },
      experience: function(){ TIG.experience.forEach(function(j){ print(o(esc(j.company))+'  '+esc(j.role)+'  <span class="dim">'+esc(j.dates)+'</span>'); }); },
      projects: function(){ TIG.projects.forEach(function(p){ print(o(p.n)+'  '+esc(p.name)+'  <span class="dim">'+esc(p.company)+'</span>'); }); print('tip: '+o('open projects'), 'dim'); },
      skills: function(){ TIG.skills.groups.forEach(function(g){ print(o(esc(g.name)+':')+' '+g.items.map(esc).join(' \u00b7 ')); }); },
      education: function(){ print(esc(TIG.education.school)+' \u2014 '+esc(TIG.education.degree)+' ('+esc(TIG.education.year)+')'); },
      contact: function(){ print(esc(TIG.contact.email)+'  \u00b7  '+esc(TIG.contact.phone)+'  \u00b7  '+esc(TIG.contact.linkedinLabel)); },
      stats: function(){ TIG.stats.forEach(function(s){ print(o(esc(s.big))+'  '+esc(s.label)+'  <span class="dim">'+esc(s.sub)+'</span>'); }); },
      resume: function(){ open('resume'); print('opening Resume.app'); },
      journey: function(a){ open('journey', a ? { route:a } : {}); TIG.journey.forEach(function(s, i){ var c = TIG.cities[s.city]; print(o(i+1)+'  '+esc(c.city)+', '+esc(c.state)+'  <span class="dim">'+esc(s.years)+'</span>  '+esc(s.company)); }); }, map: function(){ CMD.journey(); }, travel: function(){ CMD.journey(); },
      open: function(arg){ if(arg === '.' || arg === '') { if(denOpen('')){ print('opening Den'); return; } print('opening Finder\u2026 just kidding, this is a portfolio.'); return; } var nt = !APPS[arg] && jnoteNamed(arg); if(nt){ jotOpen(nt.id); print('opening '+esc(nt.name)+' in Jot'); return; } if(APPS[arg]){ open(arg); print('opening '+arg); } else print('no app named "'+esc(arg)+'". try: '+VIS().join(', ')); },
      clear: function(){ $$('.line', body).forEach(function(l){ l.remove(); }); },
      users: function(){ print(Object.keys(USERS).map(function(u){ return (u === USER.name ? o(u)+' <span class="dim">(you)</span>' : u); }).join('   ')); print('switch with '+o('su &lt;user&gt;'), 'dim'); },
      su: function(arg){
        var u = (arg || 'chase').replace(/^-\s*/, '').trim().toLowerCase();
        if(u === 'root' || u === 'admin'){ print('su: root is disabled on tigOS. chase is the admin.', 'err'); return; }
        if(!USERS[u]){ print('su: user '+esc(u)+' does not exist', 'err'); return; }
        if(u === USER.name){ print('su: you are already '+u+'.', 'dim'); return; }
        if(u === 'chase'){ login('chase'); return; }
        mode = { kind:'pw', user:u, tries:0 }; refreshPrompt();
      },
      logout: function(){ print('logging out '+USER.name+'\u2026'); setTimeout(loginScreen, 400); },
      exit: function(){ CMD.logout(); },
      sudo: function(arg){ if(/make me a sandwich/i.test(arg)) { print('okay.'); return; } print(USER.name === 'chase' ? 'nice try. chase is already the admin here.' : USER.name+' is not in the sudoers file. This incident will be reported.', 'err'); },
      dir: function(a){ CMD.ls(a); },
      cat: function(arg){ var cn = jnoteNamed(arg); if(cn){ jotFlush(); print(esc(nbody(cn.id)) || '<span class="dim">('+esc(cn.name)+' is empty)</span>'); } else if(/resume/.test(arg)){ open('resume'); print('binary file. opening Resume.app instead.'); } else if(/\.env|passwd|shadow/.test(arg)){ print('cat: '+esc(arg)+': permission denied. nice try though.', 'err'); } else print('cat: '+esc(arg||'')+': no such file. try '+o('ls')); },
      rm: function(arg){ if(/-rf\s+\/|\*|~/.test(arg)){ print('rm: refusing to remove everything. Chase worked hard on this.', 'err'); toast('Phew', 'rm -rf / has been politely declined.'); } else print('rm: '+esc(arg||'')+': operation not permitted'); },
      echo: function(arg){ print(esc(arg.replace(/^["']|["']$/g, '')) || ''); },
      date: function(){ print(new Date().toString()); },
      uptime: function(){ var s = Math.round(performance.now()/1000); print('up '+Math.floor(s/60)+' min '+(s%60)+' sec, 1 user, load averages: 0.42 0.42 0.42'); },
      neofetch: function(){
        /* tiger face on the left, tigOS wordmark on the right (wordmark drops on narrow phones) */
        var rows = [], n = Math.max(TIGER.length, TIGOS_WORD.length), wide = body.clientWidth > 560;
        for(var i = 0; i < n; i++){ var l = TIGER[i] || ' '.repeat(TIGER[0].length), r = TIGOS_WORD[i - 1] || ''; rows.push(wide ? l+'  '+r : l); }
        print(rows.map(function(row, i){ var cut = TIGER[0].length; return '<span class="tig">'+esc(row.slice(0, cut))+'</span><span class="word">'+esc(row.slice(cut))+'</span>'; }).join('\n'), 'art logo');
        var up = Math.round(performance.now()/1000), wins = Object.keys(WM.wins), pet = PREF.pet && PETS[PREF.pet];
        var cap = function(x){ return x.charAt(0).toUpperCase()+x.slice(1); };
        print(o('OS')+': tigOS 2.0 (portfolio edition)\n'+o('Host')+': chasetiger.com\n'+o('Kernel')+': vanilla-js 1.0\n'+o('Shell')+': '+(USER.name === 'greggyd' ? 'bash' : 'tigsh')+'\n'+
          o('Uptime')+': '+Math.floor(up/60)+' min '+(up%60)+' sec\n'+o('Resolution')+': '+root.clientWidth+'x'+root.clientHeight+(isMobile() ? ' (phone)' : '')+'\n'+
          o('Theme')+': '+(PREF.theme === 'light' ? 'Light' : 'Dark')+' \u00b7 '+cap(PREF.accent)+' accent\n'+o('Text')+': '+PREF.text.toUpperCase()+'  '+o('Dock')+': '+PREF.dock+(PREF.dockpos !== 'bottom' ? ' \u00b7 '+PREF.dockpos : '')+(PREF.dockhide === 'on' ? ' \u00b7 auto-hide' : '')+'\n'+
          o('Cursor')+': '+PREF.cursor+'  '+o('Motion')+': '+(PREF.motion === 'off' ? 'reduced' : 'on')+'\n'+
          o('Windows')+': '+(wins.length ? wins.join(', ') : 'none')+'\n'+o('Pet')+': '+(pet ? pet.name+' the '+pet.label : 'none (try pet cat)')+'\n'+
          o('City')+': '+CITY.name+(WX.now ? ' \u00b7 '+WX.now.t+'\u00b0 '+WX.now.label : '')+'\n'+o('User')+': '+USER.name);
      },
      fortune: function(){ print(FORTUNES[Math.floor(Math.random()*FORTUNES.length)]); },
      cowsay: function(arg){ art(COW(arg || 'moo')); },
      sl: function(){ art(['      ====        ________', '  _D _|  |_______/        \\__I_I_____===__|_________|', '   |(_)---  |   H\\________/ |   |        =|___ ___|', '   /     |  |   H  |  |     |   |         ||_| |_||', '  |      |  |   H  |__--------------------| [___] |', '  | ________|___H__/__|_____/[][]~\\_______|       |', '  |/ |   |-----------I_____I [][] []  D   |=======|__']); print('you meant ls. we both know it.', 'dim'); },
      vim: function(){ print('vim: opened. good luck getting out. (hint: :q!)'); }, vi: function(){ CMD.vim(); }, nano: function(){ print('nano: too easy. try vim.'); }, emacs: function(){ print('emacs: this terminal has a 4 MB limit.'); },
      ':q': function(){ print('you\u2019re free.'); }, ':q!': function(){ print('you\u2019re free.'); }, ':wq': function(){ print('saved nothing, exited anyway.'); },
      man: function(arg){ print(arg ? 'No manual entry for '+esc(arg)+'. Chase writes the docs here, and he wrote '+o('help')+'.' : 'What manual page do you want?'); },
      history: function(){ if(!hist.length){ print('history is empty. type something first.', 'dim'); return; } print(hist.map(function(h, i){ return '  '+String(i+1).padStart(String(hist.length).length, ' ')+'  '+esc(h); }).join('\n')); },
      top: function(){ print('PID   COMMAND        %CPU  MEM\n1     tigos          0.4   12M\n2     coffee         98.0  \u221e\n3     marketing      42.0  4x'); }, htop: function(){ CMD.top(); },
      ping: function(arg){ print('PING '+esc(arg||'chasetiger.com')+': 64 bytes: icmp_seq=0 ttl=64 time=0.042 ms\n--- 1 packets transmitted, 1 received, 0% loss. we\u2019re good.'); },
      ssh: function(arg){ print('ssh: connect to host '+esc(arg||'?')+': the only way in is the dock.', 'err'); },
      curl: function(arg){ print('curl: (7) '+esc(arg||'')+' \u2014 this box is offline by design. try '+o('contact')+'.'); }, wget: function(a){ CMD.curl(a); },
      git: function(arg){ var c = (arg||'').split(' ')[0]; if(c === 'status') print('On branch main\nnothing to commit, working tree clean (Chase ships).'); else if(c === 'push') print('Everything up-to-date'); else if(c === 'blame') print('it was marketing.'); else print('git: ask nicely. try '+o('git status')); },
      npm: function(){ print('added 1,204 packages in 0.3s (none of them needed)'); }, yarn: function(){ CMD.npm(); }, pip: function(){ print('Successfully installed confidence-1.0'); }, brew: function(){ print('\u{1F37A}  brew: everything is already up to date.'); }, apt: function(a){ if(USER.name === 'greggyd'){ print('Reading package lists... Done\nBuilding dependency tree... Done\nAll packages are up to date. (as if)'); } else print('E: Could not open lock file. Chase has it.'); }, 'apt-get': function(){ CMD.apt(); },
      python: function(){ print('Python 3.12.0\n>>> print("hire chase")\nhire chase\n>>> exit()'); }, python3: function(){ CMD.python(); }, node: function(){ print('> [1,2,3].map(x => "clear")\n[ \'clear\', \'clear\', \'clear\' ]'); },
      cls: function(){ CMD.clear(); }, ipconfig: function(){ print('Windows IP Configuration\n\n   IPv4 Address. . . . . . : 127.0.0.1 (you are home)'); }, ifconfig: function(){ CMD.ipconfig(); },
      chmod: function(){ print('chmod: permissions are perfect already.'); }, kill: function(){ print('kill: nothing here deserves it.'); }, killall: function(){ CMD.kill(); },
      reboot: function(){ print('rebooting\u2026'); setTimeout(restart, 500); }, shutdown: function(){ print('shutting down\u2026'); setTimeout(powerOff, 600); },
      sleep: function(){ print('going to sleep\u2026'); setTimeout(function(){ $('#sleep').hidden = false; saverStart(); tick(); }, 500); },
      say: function(arg){ print('\u{1F5E3} '+esc(arg||'hello')); },
      hello: function(){ print('hi there. type '+o('help')+' if you want the map.'); }, hi: function(){ CMD.hello(); }, hey: function(){ CMD.hello(); },
      coffee: function(){ print('\u2615  brewing. estimated time: as long as it takes.'); },
      matrix: function(){ print('there is no spoon.', 'ok'); }, hack: function(){ print('ACCESS GRANTED. just kidding. it\u2019s a marketing site.', 'ok'); },
      cal: function(){ var d = new Date(); print(d.toLocaleString('en-US', { month:'long', year:'numeric' })+'\n Su Mo Tu We Th Fr Sa\n ...it\u2019s the '+d.getDate()+'th. probably a good day to email chase.'); },
      hire: function(){ open('contact'); print('good call. opening Contact.', 'ok'); },
      bug: function(){ bugsRun(); print('\u{1F41E} You found Hailey Bug! Look out\u2026', 'ok'); },
      bugs: function(){ CMD.bug(); }, ladybug: function(){ CMD.bug(); },
      pet: function(arg){
        var a = (arg || '').trim().toLowerCase();
        if(!a){ print('pets: '+Object.keys(PETS).map(function(k){ return o(k)+' <span class="dim">('+PETS[k].name+')</span>'; }).join('  ')); print('usage: '+o('pet cat')+'  \u00b7  '+o('pet off')+' to send them home  \u00b7  '+o('pets')+' opens the window. Drag a pet anywhere on screen.', 'dim'); return; }
        if(a === 'ui' || a === 'window' || a === 'app' || a === 'list'){ CMD.pets(); return; }
        if(/^(off|none|no|bye|stop|away)$/.test(a)){ if(!PREF.pet){ print('no pet is out right now.', 'dim'); return; } var was = PETS[PREF.pet], wasKey = PREF.pet, pel = petEl(); if(pel) petGoodbye(pel); else petSet(''); print(wasKey === 'cow' ? was.name+' gets beamed up. she will be fine, probably.' : wasKey === 'aki' ? was.name+' powers down. beep.' : wasKey === 'alien' ? was.name+' phones home. the saucer is already double-parked.' : wasKey === 'llama' ? was.name+' hums off into the sunset. no drama.' : was.name+' waddles off. come back soon.', 'ok'); return; }
        var key = PET_ALIAS[a];
        if(!key){ print('no pet called '+esc(a)+'. try: '+Object.keys(PETS).map(o).join(', '), 'err'); return; }
        petSet(key); var pt = PETS[key];
        print(pt.name+' the '+pt.label+' pops in, bottom right. drag them around \u2014 they stay close to wherever you put them.', 'ok');
        toast(pt.name+' is here', 'Drag your '+pt.label+' anywhere, tap for hearts. Drop onto the X to say goodbye.', 'heart');
      },

      tour: function(){ print('starting the tour\u2026 your windows step aside and come back when it ends.', 'ok'); setTimeout(tourStart, 250); },
      cursor: function(a){
        var v = (a || '').trim().toLowerCase();
        if(isMobile()){ print('cursor styles are a desktop thing.', 'dim'); return; }
        if(!/^(block|line|bar|beam|underline|under)$/.test(v)){ print('usage: '+o('cursor block')+' | '+o('cursor line')+' | '+o('cursor underline')+'  (now: '+PREF.cursor+')'); return; }
        var k = /^(line|bar|beam)$/.test(v) ? 'line' : /^(under|underline)$/.test(v) ? 'underline' : 'block';
        setPref('cursor', k); print('cursor: '+k, 'ok');
      },
      settings: function(){ open('settings'); print('opening Settings'); }, prefs: function(){ CMD.settings(); }, theme: function(a){ if(/light|dark/i.test(a)){ setPref('theme', a.toLowerCase().match(/light|dark/)[0]); print('appearance: '+PREF.theme); } else print('usage: theme light | theme dark'); },
      tigos: function(){ print('tigOS 2.0 \u2014 built by Chase Johnston. A portfolio that pretends to be an operating system, because a PDF felt boring.'); },
      /* ---- the wider unix / mac / linux / windows / bash surface: everything here does *something* ---- */
      sw_vers: function(){ print('ProductName:\t\ttigOS\nProductVersion:\t\t2.0\nBuildVersion:\t\t26A'+new Date().getDate()); },
      system_profiler: function(){ print('Hardware Overview:\n  Model Name: Portfolio\n  Chip: Vanilla JS\n  Memory: as much as your tab allows\n  Serial Number: CHASE-2026'); },
      defaults: function(a){ if(/write/.test(a)) print('defaults: use Settings for that. '+o('settings')); else print('{\n    theme = '+PREF.theme+';\n    accent = '+PREF.accent+';\n    dock = '+PREF.dock+';\n}'); },
      softwareupdate: function(){ print('Software Update Tool\n\nFinding available software\nNo new software available. (Chase ships continuously.)'); },
      diskutil: function(){ print('/dev/disk0 (internal):\n   #:  TYPE NAME       SIZE\n   0:  tigOS Portfolio  822 KB\n   1:  Resume            117 KB'); },
      caffeinate: function(){ print('\u2615 caffeinate: this site never sleeps. unless you tell it to. ('+o('sleep')+')'); },
      screencapture: function(){ print('screencapture: saved to ~/Desktop/Screenshot '+new Date().toLocaleDateString()+'.png (it is the whole portfolio)'); },
      mdfind: function(a){ print(a ? 'mdfind: try '+o('\u2318K')+' \u2014 that is Spotlight here.' : 'usage: mdfind <query>'); },
      launchctl: function(){ print('PID\tStatus\tLabel\n1\t0\tcom.chase.tigos\n42\t0\tcom.chase.coffee'); },
      osascript: function(){ print('execution error: this portfolio does not do AppleScript, but it does do '+o('say hello')); },
      'xcode-select': function(){ print('xcode-select: note: no developer tools were found. this is a marketing site.'); },
      pbcopy: function(){ print('copied to the clipboard. (not really, but '+o('contact')+' has a real copy button.)'); }, pbpaste: function(){ print('hire chase'); },
      df: function(){ print('Filesystem      Size   Used  Avail  Use%  Mounted on\n/dev/tigos     822K   822K     0K  100%  /'); }, du: function(){ print('822K\t.'); }, free: function(){ print('               total        used        free\nMem:         \u221e           some        plenty'); },
      ps: function(){ CMD.top(); }, pstree: function(){ print('tigos\u2500\u252c\u2500dock\n     \u251c\u2500menubar\n     \u2514\u2500terminal\u2500\u2500you'); },
      grep: function(a){ print(a ? 'grep: '+esc(a.split(' ')[0])+': found in every project on this site.' : 'usage: grep [pattern]'); }, egrep: function(a){ CMD.grep(a); }, fgrep: function(a){ CMD.grep(a); }, rg: function(a){ CMD.grep(a); }, ag: function(a){ CMD.grep(a); },
      locate: function(a){ CMD.find(a); }, fd: function(a){ CMD.find(a); },
      which: function(a){ var c = (a||'').split(' ')[0]; print(c ? (CMD[c] ? '/usr/bin/'+esc(c) : esc(c)+' not found') : 'usage: which <command>'); }, whereis: function(a){ CMD.which(a); }, type: function(a){ var c = (a||'').split(' ')[0]; print(c ? (CMD[c] ? esc(c)+' is a tigsh builtin' : 'type: '+esc(c)+': not found') : 'usage: type <command>'); }, command: function(a){ CMD.type(a.replace(/^-v\s*/, '')); }, hash: function(){ print('hits\tcommand\n   1\t/usr/bin/help'); },
      alias: function(){ print("alias ll='ls -la'\nalias hire='open contact'\nalias gs='git status'"); }, unalias: function(){ print(''); },
      env: function(){ print('USER='+USER.name+'\nHOME='+USERS[USER.name].home+'\nSHELL=/bin/tigsh\nTERM=xterm-256color\nTHEME='+PREF.theme+'\nCITY='+CITY.short); }, printenv: function(){ CMD.env(); }, export: function(a){ print(a ? '' : 'declare -x USER="'+USER.name+'"'); }, set: function(){ CMD.env(); }, unset: function(){ print(''); },
      head: function(a){ print(/resume/.test(a) ? 'Chase Johnston \u2014 Marketing Manager \u00b7 Product Marketing, GTM & Growth' : 'head: '+esc(a||'')+': try '+o('head resume.pdf')); }, tail: function(a){ print(/resume/.test(a) ? 'EDUCATION \u2014 University of Washington, BA Marketing Communications' : 'tail: '+esc(a||'')+': no such file'); },
      less: function(a){ CMD.cat(a); }, more: function(a){ CMD.cat(a); }, bat: function(a){ CMD.cat(a); }, wc: function(a){ print(/resume/.test(a) ? '       1     412    3172 resume.pdf  (one page, as promised)' : 'wc: '+esc(a||'')+': no such file'); },
      sort: function(a){ print(esc((a||'').split(/\s+/).sort().join(' '))); }, uniq: function(a){ print(esc((a||'').split(/\s+/).filter(function(x, i, arr){ return arr.indexOf(x) === i; }).join(' '))); }, rev: function(a){ print(esc((a||'').split('').reverse().join(''))); }, tac: function(a){ CMD.rev(a); }, nl: function(a){ print('     1\t'+esc(a||'')); },
      awk: function(){ print("awk: '{ print \"hire chase\" }'  \u2192  hire chase"); }, sed: function(){ print('sed: s/boring PDF/operating system/g \u2014 done, that is this site.'); }, cut: function(a){ print(esc((a||'').slice(0, 12))); }, tr: function(a){ print(esc((a||'').toUpperCase())); }, xargs: function(a){ print(esc(a||'')); }, tee: function(a){ print(esc(a||'')); },
      tar: function(){ print('tar: portfolio.tar.gz created (822K). it is just this page.'); }, zip: function(){ print('  adding: tigOS.html (deflated 87%)'); }, unzip: function(){ print('Archive: portfolio.zip\n  inflating: tigOS.html'); }, gzip: function(){ CMD.zip(); }, gunzip: function(){ CMD.unzip(); },
      ln: function(){ print('ln: the only link that matters is '+o('linkedin')); }, chown: function(){ print('chown: chase already owns everything here.'); }, chgrp: function(){ CMD.chown(); },
      passwd: function(){ print('passwd: changing password for '+USER.name+'\npasswd: nope. this is a portfolio.', 'err'); }, useradd: function(){ print('useradd: only chase, ariel and greggyd live here.'); }, adduser: function(){ CMD.useradd(); }, userdel: function(){ print('userdel: absolutely not.'); },
      w: function(){ print(USER.name+'\tconsole\t'+new Date().toLocaleTimeString()+'\tbrowsing the portfolio'); }, who: function(){ CMD.w(); }, finger: function(a){ print('Login: '+esc(a||USER.name)+'\nName: '+(/chase/.test(a||USER.name) ? 'Chase Johnston' : esc(a||USER.name))+'\nPlan: hire chase.'); }, last: function(){ print(USER.name+'  console  '+new Date().toDateString()+'  still logged in'); },
      id: function(){ print('uid=501('+USER.name+') gid=20(staff) groups=20(staff),80(admin),1000(marketing)'); }, groups: function(){ print('staff admin marketing'); }, hostname: function(){ print('chasetiger.com'); }, arch: function(){ print('arm64'); }, lsb_release: function(){ print('Distributor ID: tigOS\nRelease: 2.0\nCodename: clear'); },
      systemctl: function(a){ print(/status/.test(a) ? '\u25cf tigos.service - Portfolio\n   Active: active (running) since boot\n   Main PID: 1 (tigos)' : 'systemctl: '+esc(a||'')+': permission denied. chase runs the daemons.'); }, service: function(a){ CMD.systemctl(a); }, journalctl: function(){ print('-- Logs begin at boot --\ntigos[1]: booted\ntigos[1]: dock ready\ntigos[1]: you arrived. welcome.'); }, dmesg: function(){ print('[    0.000000] tigOS 2.0 booting\n[    0.420000] dock: 8 tiles\n[    1.000000] wallpaper: purple, obviously'); },
      crontab: function(){ print('# m h dom mon dow command\n0 9 * * 1-5  coffee\n0 * * * *    ship'); }, nohup: function(a){ print('appending output to nohup.out'); }, jobs: function(){ print('[1]+  Running    marketing &'); }, bg: function(){ print(''); }, fg: function(){ print('marketing'); }, tmux: function(){ print('tmux: sessions should be nested with care. this one is nested in a portfolio.'); }, screen: function(){ CMD.tmux(); },
      'ssh-keygen': function(){ print('Generating public/private ed25519 key pair.\nYour identification has been saved in ~/.ssh/hire_chase'); }, scp: function(){ print('scp: nothing to copy. download the resume instead: '+o('resume')); }, rsync: function(){ CMD.scp(); },
      nc: function(){ print('nc: connection refused. the only open port is '+o('contact')); }, netstat: function(){ print('Proto  Local Address        Foreign Address     State\ntcp    chasetiger.com:443   you:*               ESTABLISHED'); }, ss: function(){ CMD.netstat(); }, traceroute: function(a){ print('traceroute to '+esc(a||'chasetiger.com')+'\n 1  your browser  0.1 ms\n 2  this page     0.2 ms\n 3  chase         hired'); }, tracert: function(a){ CMD.traceroute(a); },
      dig: function(a){ print(';; ANSWER SECTION:\n'+esc(a||'chasetiger.com')+'.\t300\tIN\tA\t127.0.0.1'); }, nslookup: function(a){ CMD.dig(a); }, host: function(a){ CMD.dig(a); }, whois: function(a){ print('Domain Name: '+esc(a||'chasetiger.com')+'\nRegistrant: Chase Johnston\nStatus: shipping'); }, ip: function(){ print('1: lo0: <LOOPBACK> 127.0.0.1\n2: en0: <UP> you are here'); }, route: function(){ print('default via dock dev en0'); },
      docker: function(a){ print(/ps/.test(a) ? 'CONTAINER ID  IMAGE      STATUS\nc0ffee        tigos:2.0  Up since boot' : 'docker: this site runs in a single HTML file. no containers were harmed.'); }, kubectl: function(){ print('kubectl: 1 pod, 1 node, 0 problems. wildly over-engineered for a portfolio.'); }, k: function(){ CMD.kubectl(); }, terraform: function(){ print('Plan: 0 to add, 0 to change, 0 to destroy. it is a static site.'); },
      make: function(){ print('make: Nothing to be done for \'portfolio\'.'); }, gcc: function(){ print('gcc: fatal error: no input files. also this is javascript.'); }, java: function(){ print('java version "21" \u2014 but honestly, try '+o('node')); }, ruby: function(){ print('ruby 3.3 \u2014 puts "hire chase"'); }, go: function(){ print('go: fmt.Println("hire chase")'); }, rustc: function(){ print('rustc: compiled hire_chase in 0.4s. zero unsafe blocks.'); }, cargo: function(){ CMD.rustc(); }, perl: function(){ print('perl -e \'print "hire chase"\'  \u2192  hire chase'); }, php: function(){ print('PHP 8.3 \u2014 <?php echo "hire chase"; ?>'); },
      yes: function(a){ print(esc(a||'y')+'\n'+esc(a||'y')+'\n'+esc(a||'y')+'\n... (ok, that is enough)'); }, 'true': function(){ print(''); }, 'false': function(){ print(''); }, test: function(){ print(''); }, '[': function(){ print(''); },
      bc: function(a){ try { var e = (a||'').replace(/[^0-9+\-*\/().% ]/g, ''); print(e ? String(Function('return ('+e+')')()) : 'bc: type an expression, e.g. '+o('bc 2+2')); } catch(err){ print('bc: syntax error', 'err'); } }, expr: function(a){ CMD.bc(a); }, calc: function(a){ CMD.bc(a); },
      banner: function(a){ art(COW(a||'hire chase')); }, figlet: function(a){ CMD.banner(a); }, toilet: function(a){ CMD.banner(a); }, lolcat: function(){ print('\u{1F308} everything is already colourful here.'); }, cmatrix: function(){ CMD.matrix(); },
      telnet: function(){ print('Trying... telnet is from 1969. so is the tux logo. connection closed.'); }, ftp: function(){ print('ftp: use the Download button in '+o('resume')+'.'); }, mail: function(){ open('contact'); print('mail: opening Contact. email is fastest.'); }, mutt: function(){ CMD.mail(); },
      info: function(a){ CMD.man(a); }, tldr: function(a){ print(a ? esc(a)+': does the obvious thing, with a joke.' : 'tldr: this is a portfolio shaped like an OS. '+o('help')); }, apropos: function(a){ print('help (1) - the map\nresume (1) - the one-pager\npet (6) - a friend'); }, whatis: function(a){ CMD.tldr(a); },
      source: function(){ print(''); }, '.': function(){ print(''); }, bash: function(){ print('bash-5.2$ you are already in a shell. it is called tigsh.'); }, zsh: function(){ print('tigsh is zsh-flavoured. you are home.'); }, sh: function(){ CMD.bash(); }, fish: function(){ print('\u{1F41F} fish: welcome to fish, the friendly interactive shell. (kidding, still tigsh.)'); }, exec: function(a){ var c = (a||'').split(' ')[0]; if(CMD[c]) CMD[c](a.split(' ').slice(1).join(' ')); else print('exec: '+esc(c)+': not found'); }, time: function(a){ var t0 = performance.now(); var c = (a||'').split(' ')[0]; if(CMD[c]) CMD[c](a.split(' ').slice(1).join(' ')); print('real\t0m'+((performance.now()-t0)/1000).toFixed(3)+'s'); },
      // windows
      powershell: function(){ print('Windows PowerShell\nPS C:\\Users\\'+USER.name+'> this is a mac. sort of.'); }, pwsh: function(){ CMD.powershell(); }, cmd: function(){ print('Microsoft Windows [Version 10.0.tigos]\nC:\\Users\\'+USER.name+'> welcome to the wrong OS. try '+o('help')); },
      tasklist: function(){ print('Image Name          PID  Mem Usage\ntigos.exe             1   12,000 K\ncoffee.exe           42  \u221e K\nmarketing.exe       420    4x K'); }, taskkill: function(){ print('ERROR: The process "marketing.exe" could not be terminated. It ships.'); },
      systeminfo: function(){ print('OS Name:      tigOS 2.0\nOS Version:   2.0 Build 26\nSystem Type:  portfolio-based PC\nTotal Memory: enough'); }, copy: function(){ print('        0 file(s) copied. read-only file system.'); }, del: function(){ CMD.rm(); }, erase: function(){ CMD.rm(); }, move: function(){ CMD.mv(); }, ren: function(){ CMD.mv(); }, rename: function(){ CMD.mv(); }, md: function(){ CMD.mkdir(); }, rd: function(){ print('rd: access denied'); }, attrib: function(){ print('R    resume.pdf'); }, chkdsk: function(){ print('Windows has scanned the file system and found no problems. Chase is thorough.'); }, sfc: function(){ print('Windows Resource Protection did not find any integrity violations.'); },
      netsh: function(){ print('netsh: wlan show profiles \u2014 chasetiger.com (connected)'); }, winget: function(){ print('winget: Found Chase [Chase.Johnston] 2.0. Already installed.'); }, choco: function(){ print('Chocolatey v2.0 \u2014 hire-chase v1.0 already installed.'); }, scoop: function(){ CMD.choco(); }, explorer: function(){ open('projects'); print('opening Explorer\u2026 well, Projects.'); }, start: function(a){ CMD.open(a); }, notepad: function(){ print('notepad: untitled.txt \u2014 "hire chase"'); }, mspaint: function(){ open('projects'); print('mspaint: the creative work lives in Projects.'); }, wsl: function(){ print('Windows Subsystem for Linux is already running. it is called this terminal.'); }, regedit: function(){ print('regedit: absolutely not.', 'err'); },
      'get-process': function(){ CMD.tasklist(); }, 'get-childitem': function(a){ CMD.ls(a); }, gci: function(a){ CMD.ls(a); }, 'clear-host': function(){ CMD.clear(); }, 'write-host': function(a){ CMD.echo(a); }, 'get-help': function(){ CMD.help(); }, 'get-date': function(){ CMD.date(); }, 'get-location': function(){ CMD.pwd(); }, 'set-location': function(a){ CMD.cd(a); }
      ,
      version: function(){ CMD.tigos(); }, ver: function(){ CMD.tigos(); }, uname: function(){ print('tigOS chasetiger.com 2.0 vanilla-js arm64'); }
    };
    Object.keys(EXTRA_CMDS).forEach(function(k){ CMD[k] = function(arg){ EXTRA_CMDS[k](arg, { print:print, art:art, o:o, cmd:CMD }); }; });   /* screensaver, party, do, sl, konami (27-eggs.js) */
    var sh = shellInstall(CMD, { print:print, o:o, refresh:function(){ refreshPrompt(); } });   /* ls, cd, cat, mkdir, rm, mv, nano, brew install... over the desktop's own files (27-shell.js) */
    /* tab completion: one match fills it in, several extend to the common prefix and a second tab lists them, like bash */
    var ARGS = { open:function(){ return VIS(); }, cat:function(){ return VIS(); }, cd:function(){ return VIS(); }, man:function(){ return Object.keys(CMD).filter(function(k){ return /^[a-z]/.test(k); }); }, su:function(){ return Object.keys(USERS); }, pet:function(){ return Object.keys(PETS).concat(['off']); }, pets:function(){ return Object.keys(PETS).concat(['off']); }, game:function(){ return GAMES.map(function(g){ return g.id; }); }, games:function(){ return GAMES.map(function(g){ return g.id; }); }, play:function(){ return GAMES.map(function(g){ return g.id; }); } };
    sh.complete(ARGS);   /* file and app names from where you are */
    var lastTab = '';
    var tabComplete = function(){
      var at = inp.selectionStart == null ? inp.value.length : inp.selectionStart, head = inp.value.slice(0, at), tail = inp.value.slice(at), m = /(\S*)$/.exec(head), word = m[1], before = head.slice(0, head.length - word.length), first = !before.trim();
      var pool = first ? Object.keys(CMD).filter(function(k){ return /^[a-z]/.test(k); }).concat(VIS()) : (ARGS[before.trim().split(/\s+/)[0].toLowerCase()] || function(){ return []; })();
      pool = pool.filter(function(k, i, a){ return a.indexOf(k) === i; }).sort();
      var lw = word.toLowerCase(), cands = pool.filter(function(k){ return k.toLowerCase().indexOf(lw) === 0; });   /* Wo finds Work, as zsh does */
      if(!word || !cands.length){ lastTab = ''; return; }
      var set = function(w2, done){ inp.value = before + w2 + (done && !tail ? ' ' : '') + tail; var pos = (before + w2).length + (done && !tail ? 1 : 0); try { inp.setSelectionRange(pos, pos); } catch(err){} syncCur(); };
      if(cands.length === 1){ set(cands[0], true); lastTab = ''; return; }
      var pre = cands.reduce(function(a, b){ var i = 0; while(i < a.length && i < b.length && a[i].toLowerCase() === b[i].toLowerCase()) i++; return a.slice(0, i); });
      if(pre.length > word.length){ set(pre, false); lastTab = before + pre; return; }
      if(lastTab === head){ var cw = Math.max.apply(null, cands.map(function(k){ return k.length; })) + 2, cols = Math.max(1, Math.floor(72 / cw)), rows = [];
        for(var i = 0; i < cands.length; i += cols) rows.push(cands.slice(i, i + cols).map(function(k){ return k + ' '.repeat(cw - k.length); }).join('').replace(/\s+$/, ''));
        print(prompt()+' '+esc(inp.value)); print(rows.map(esc).join('\n'), 'dim'); lastTab = ''; }
      else lastTab = head;
    };
    inp.addEventListener('keydown', function(e){
      if(e.key === 'Tab' && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey){ e.preventDefault(); if(mode) return; tabComplete(); return; }
      if(e.ctrlKey && !e.metaKey && !e.altKey){   /* the readline keys people reach for out of habit; they stop here so ctrl+k does not open Spotlight (cmd+k still does) */
        var kk = e.key.toLowerCase(); if(/^[lcukae]$/.test(kk)) e.stopPropagation();
        if(kk === 'l'){ e.preventDefault(); CMD.clear(); return; }
        if(kk === 'c'){ e.preventDefault(); print((mode ? '<span class="dim">Password for '+mode.user+':</span>' : prompt())+' '+(mode ? '' : esc(inp.value))+'^C'); inp.value = ''; if(mode){ mode = null; refreshPrompt(); } hi = hist.length; draft = ''; syncCur(); return; }
        if(kk === 'u'){ e.preventDefault(); inp.value = inp.value.slice(inp.selectionStart || 0); try { inp.setSelectionRange(0, 0); } catch(err){} syncCur(); return; }
        if(kk === 'k'){ e.preventDefault(); inp.value = inp.value.slice(0, inp.selectionStart == null ? inp.value.length : inp.selectionStart); syncCur(); return; }
        if(kk === 'a' || kk === 'e'){ e.preventDefault(); var pos = kk === 'a' ? 0 : inp.value.length; try { inp.setSelectionRange(pos, pos); } catch(err){} syncCur(); return; }
      }
      if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
        if(mode || !hist.length) return; e.preventDefault();
        if(hi === hist.length) draft = inp.value;
        hi = e.key === 'ArrowUp' ? Math.max(0, hi - 1) : Math.min(hist.length, hi + 1);
        inp.value = hi === hist.length ? draft : hist[hi]; syncCur();
        var L = inp.value.length; try { inp.setSelectionRange(L, L); } catch(err){}
        return;
      }
      if(e.key !== 'Enter') return;
      var raw = inp.value; inp.value = ''; syncCur();
      if(!mode && raw.trim()){ if(hist[hist.length-1] !== raw.trim()) hist.push(raw.trim()); hi = hist.length; draft = ''; }
      if(mode && mode.kind === 'pw'){
        print('<span class="dim">Password for '+mode.user+':</span> '+'\u2022'.repeat(Math.min(raw.length, 12)));
        if(raw === USERS[mode.user].pw){ var u = mode.user; mode = null; login(u); }
        else { mode.tries++; if(mode.tries >= 3){ print('su: authentication failure (3 attempts). returning to '+USER.name+'.', 'err'); mode = null; } else print('Sorry, try again.', 'err'); }
        refreshPrompt(); return;
      }
      raw = raw.trim(); if(!raw) return;
      print(prompt()+' '+esc(raw));
      var parts = raw.split(/\s+/), c = parts[0].toLowerCase(), arg = parts.slice(1).join(' ');
      if(c === 'switch' && /^user/i.test(arg)){ c = 'su'; arg = arg.replace(/^user\s*/i, ''); if(!arg){ CMD.users(); return; } }
      if(CMD[c]) CMD[c](arg); else if(APPS[c]) CMD.open(c); else print('command not found: '+esc(c)+'  (try '+o('help')+')', 'err');
    });
    setTimeout(function(){ if(!isMobile()) inp.focus(); }, 50);
    w.el.addEventListener('click', function(){ if(!isMobile()) inp.focus(); });
  };

/* tigOS core app.js, part 14: arcade. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- arcade (hidden app: reached only from the terminal's `game` command) ---------------- */
  /* The arcade ships in three hashed bundles. games.js (the registry, the two premium stubs and the 13 small canvas games, ~150 KB) is fetched
     right after boot so the desktop never waits for it; GAMES fills in when it lands and anything that needs the list first goes through
     arcade(cb). Nightshift and Rounds (~200 KB each) carry a `src` key instead of `make` and are fetched the first time they are launched,
     the same way Nightshift fetches Three.js: most visitors are here for the resume and never pay for either. */
  var GAMES = [], PREMIUM = [], NORMAL = [], arcadeQ = [], arcadeState = 0;   /* 0 not asked, 1 loading, 2 ready */
  function indexGames(){
    GAMES = (window.TIG_GAMES || []).map(function(g, i){ g._i = i; return g; }).sort(function(a, b){ return ((a.premium ? 1 : 0) - (b.premium ? 1 : 0)) || ((a.rank || 99) - (b.rank || 99)) || (a._i - b._i); });   /* normal games first, the premium ones at the end */
    PREMIUM = GAMES.filter(function(g){ return g.premium; }); NORMAL = GAMES.filter(function(g){ return !g.premium; });
    IDX = index();   /* Spotlight learns the games */
  }
  function arcade(cb){
    if(arcadeState === 2){ if(cb) cb(); return; }
    if(cb) arcadeQ.push(cb);
    if(arcadeState === 1) return; arcadeState = 1;
    var done = function(){ arcadeState = 2; indexGames(); var q = arcadeQ; arcadeQ = []; q.forEach(function(f){ f(); }); };
    if(window.TIG_GAMES && window.TIG_GAMES.length){ done(); return; }   /* already on the page */
    var sc = document.createElement('script'); sc.src = (window.TIG_ASSETS && window.TIG_ASSETS.games) || 'assets/games.js'; sc.async = true;
    sc.onload = done; sc.onerror = function(){ arcadeState = 0; toast('The arcade did not load. Check the connection and try again.'); };
    document.head.appendChild(sc);
  }
  /* a game can lean on a vendored library (Nightshift: Three.js). It ships as a hashed asset and is fetched the first time such a game starts. */
  var LIBS = {};   /* asset key -> 0 idle, 1 loading, 2 ready */
  function loadLib(key, cb, err){ var glob = { three:'THREE' }[key] || key; if(window[glob] || LIBS[key] === 2){ LIBS[key] = 2; cb(); return; }
    var sc = document.createElement('script'); sc.src = (window.TIG_ASSETS && window.TIG_ASSETS[key]) || key+'.js'; sc.async = true; LIBS[key] = 1;
    sc.onload = function(){ LIBS[key] = 2; cb(); }; sc.onerror = function(){ LIBS[key] = 0; if(err) err(); }; document.head.appendChild(sc); }
  var GSTORE = { get: function(){ try { return JSON.parse(localStorage.getItem('tigos.games') || '{}'); } catch(e){ return {}; } }, set: function(o){ try { localStorage.setItem('tigos.games', JSON.stringify(o)); } catch(e){} } };
  function gameById(q){ q = String(q || '').toLowerCase().trim(); if(!q) return null; if(/^\d+$/.test(q) && GAMES[+q-1]) return GAMES[+q-1]; return GAMES.filter(function(g){ return g.id === q || g.name.toLowerCase() === q; })[0] || null; }
  function isTouch(){ return isMobile() || (window.matchMedia && matchMedia('(pointer:coarse)').matches); }
  /* full screen = the window swallows the whole tigOS surface (menubar, dock and pets fade), plus the browser's own fullscreen when it lets us. Esc, the red light, the ⤡ button or the green light all leave it. */
  function gameFs(w, on){
    var is = w.el.classList.contains('fs'); if(on === undefined) on = !is; if(on === is) return;
    if(on){
      if(w.max) zoom(w);   /* zoomed geometry would otherwise be what we restore to */
      w.fsPrev = w.el.style.cssText; w.el.style.setProperty('--fsTop', (root.getBoundingClientRect().top - desk.getBoundingClientRect().top)+'px');
      w.el.classList.add('fs'); root.classList.add('gaming'); focus(w);
      try { if(document.fullscreenEnabled && root.requestFullscreen && !document.fullscreenElement){ var p = root.requestFullscreen(); if(p && p.catch) p.catch(function(){}); } } catch(e){}
    } else {
      w.el.classList.remove('fs'); root.classList.remove('gaming'); var z = w.el.style.zIndex; w.el.style.cssText = w.fsPrev || ''; w.el.style.zIndex = z; w.el.style.removeProperty('--fsTop');
      try { if(document.fullscreenElement && document.exitFullscreen){ var q = document.exitFullscreen(); if(q && q.catch) q.catch(function(){}); } } catch(e){}
    }
    if(w.onFs) w.onFs(on);
  }
  document.addEventListener('fullscreenchange', function(){ if(!document.fullscreenElement){ var f = $('.win.fs'); if(f && WM.wins[f.dataset.app]) gameFs(WM.wins[f.dataset.app], false); } });
  RENDER.games = function(w){
    if(arcadeState !== 2){ w.body.innerHTML = '<div class="pad gm-loading"><div class="eyebrow">Arcade</div><p>Loading the games\u2026</p></div>'; arcade(function(){ if(w.el.isConnected) RENDER.games(w); }); return; }
    var cur = null, G = null, raf = 0, last = 0, keyH, keyU, visH, ro, stage, cv, ctx, hud = {}, state = { paused:false, over:false, ready:true, score:0, best:0 };
    var PADS = { duel:[['\u25C0','ArrowLeft'],['\u25B2','ArrowUp'],['\u25B6','ArrowRight'],['fire','x'],['block','z'],['jump',' ']], fps:[['\u21B0','ArrowLeft'],['\u25B2','ArrowUp'],['\u25BC','ArrowDown'],['\u21B1','ArrowRight'],['fire','x'],['use','f'],['reload','r'],['swap','q'],['jump',' ']] };
    function bestOf(id){ return +(GSTORE.get()[id] || 0); }
    function saveBest(){ if(!G) return; var o = GSTORE.get(); if(state.score > +(o[G.id] || 0)){ o[G.id] = state.score; GSTORE.set(o); } }
    function stop(){ if(raf) cancelAnimationFrame(raf); raf = 0; if(cur && cur.stop) try { cur.stop(); } catch(e){} window.removeEventListener('blur', releaseAll); document.removeEventListener('pointerup', docUp, true); document.removeEventListener('pointercancel', docUp, true); padHeld = {}; if(ro){ try { ro.disconnect(); } catch(e){} ro = null; } if(keyH){ document.removeEventListener('keydown', keyH); document.removeEventListener('keyup', keyU); document.removeEventListener('visibilitychange', visH); keyH = null; } if(cur){ saveBest(); if(cur.destroy) try { cur.destroy(); } catch(e){} } cur = null; G = null; w.game = null; }
    function home(){
      stop(); if(w.el.classList.contains('fs')) gameFs(w, false); w.tools.innerHTML = '';
      var best = GSTORE.get();
      var card = function(g){ var i = GAMES.indexOf(g); return '<button type="button" class="gm-card'+(g.premium ? ' premium' : '')+'" data-game="'+g.id+'" style="--gc:'+g.color+'"><span class="gm-ico">'+g.icon+'</span><span class="gm-meta"><b>'+esc(g.name)+'</b><small>'+esc(g.blurb)+'</small><em>'+esc(isTouch() && g.tkeys ? g.tkeys : g.keys)+'</em></span><span class="gm-best">'+(best[g.id] ? 'best '+best[g.id] : 'unplayed')+'</span><kbd>'+(i+1)+'</kbd></button>'; };
      w.body.innerHTML = '<div class="gm-home"><div class="gm-head"><h2>Arcade</h2><p>'+GAMES.length+' games, all '+(isTouch() ? 'touch friendly: swipe, drag and tap, no buttons in the way' : 'keyboard friendly and a few happy with a mouse')+'. In the terminal, <code>game &lt;name&gt;</code> jumps straight in.</p></div><div class="gm-grid">'+NORMAL.map(card).join('')+'</div>'+
        (PREMIUM.length ? '<div class="gm-prem"><h3>Premium Arcade Games</h3><p>The headliners: bigger worlds, longer sessions, high scores worth defending.</p><div class="gm-grid">'+PREMIUM.map(card).join('')+'</div></div>' : '')+
        '<p class="gm-foot">'+(isTouch() ? 'Games open full screen on touch. The <kbd>Games</kbd> button up top brings you back here.' : '<kbd>P</kbd> pauses, <kbd>R</kbd> restarts, the green light or <kbd>\u2922</kbd> goes full screen, <kbd>Esc</kbd> brings the desktop back. Type a number to launch.')+'</p></div>';
      $$('.gm-card', w.body).forEach(function(b){ b.addEventListener('click', function(){ play(b.getAttribute('data-game')); }); });
      var numBuf = '', numT = 0;   /* two-digit launch: "1" waits a beat for a second digit when games 10-19 exist */
      keyH = function(e){ if(w.min || !w.el.classList.contains('focus') || e.target.closest('input,textarea,select') || e.metaKey || e.ctrlKey || e.altKey) return; if(!/^[0-9]$/.test(e.key)) return; e.preventDefault(); clearTimeout(numT);
        var n = +(numBuf + e.key); if(numBuf && GAMES[n-1]){ numBuf = ''; play(GAMES[n-1].id); return; } numBuf = '';
        if(e.key === '1' && GAMES.length >= 10){ numBuf = '1'; numT = setTimeout(function(){ numBuf = ''; if(GAMES[0]) play(GAMES[0].id); }, 380); return; }
        if(GAMES[+e.key-1]) play(GAMES[+e.key-1].id); };
      keyU = function(){}; visH = function(){}; document.addEventListener('keydown', keyH); document.addEventListener('keyup', keyU); document.addEventListener('visibilitychange', visH);
    }
    function fit(){ if(!cv || !stage || !G) return; var sw = stage.clientWidth, sh = stage.clientHeight; if(!sw || !sh) return;
      if(G.gl){ cv.style.width = sw+'px'; cv.style.height = sh+'px'; if(cur && cur.resize) try { cur.resize(sw, sh); } catch(e){} return; }   /* a WebGL game fills the stage and sizes its own renderer */
      if(G.fluid){ var fd = Math.min(2, window.devicePixelRatio || 1), pw = Math.round(sw*fd), ph = Math.round(sh*fd); cv.style.width = sw+'px'; cv.style.height = sh+'px';   /* a fluid 2D game takes the whole stage at 1:1 CSS px and lays itself out for that size (Mines: the board fills a phone held upright instead of a 4:3 letterbox); G.W/G.H follow the stage so pointer maths stays exact */
        if(cv.width !== pw || cv.height !== ph){ cv.width = pw; cv.height = ph; if(ctx) ctx.setTransform(fd, 0, 0, fd, 0, 0); } G.W = sw; G.H = sh; if(cur && cur.resize) try { cur.resize(sw, sh); } catch(e){} return; }
      var sc = Math.min(sw / G.W, sh / G.H); cv.style.width = Math.floor(G.W * sc)+'px'; cv.style.height = Math.floor(G.H * sc)+'px'; }
    function setOver(html){ var ov = $('.gm-over', w.body); if(!ov) return; if(html === null){ ov.hidden = true; ov.innerHTML = ''; } else { ov.innerHTML = html; ov.hidden = false; } }
    function overlay(){
      if(state.over){ var nb = state.score > 0 && state.score >= state.best; setOver('<b>'+esc(state.overMsg || 'Game over')+'</b><span>score '+state.score+(nb ? '  \u00b7  new best' : '  \u00b7  best '+state.best)+'</span><div><button type="button" data-again>Play again <kbd>R</kbd></button><button type="button" data-back>All games</button></div>'); }
      else if(state.paused) setOver('<b>Paused</b><span>press <kbd>P</kbd> or tap to keep going</span>');
      else if(state.ready && G.intro) setOver(G.intro(isTouch()));   /* a game may bring its own title card; it must still say "press any key" or "tap" */
      else if(state.ready) setOver('<b>'+esc(G.name)+'</b><span>'+esc(isTouch() && G.tkeys ? G.tkeys : G.keys)+'</span>'+(isTouch() && G.W > G.H * 1.2 && window.innerHeight > window.innerWidth ? '<small>wider than it is tall: turn your phone sideways for a bigger picture</small>' : '')+'<em>'+(isTouch() ? 'tap' : 'press any key')+' to start</em>');
      else setOver(null);
      var ov = $('.gm-over', w.body); if(ov && !ov.hidden){ var ag = $('[data-again]', ov); if(ag) ag.addEventListener('click', function(e){ e.stopPropagation(); restart(); }); var bk = $('[data-back]', ov); if(bk) bk.addEventListener('click', function(e){ e.stopPropagation(); home(); }); }
      hud.pause.textContent = state.paused ? 'Resume' : 'Pause'; hud.pause.disabled = state.over;
    }
    function inMenu(){ return !!(cur && cur.inMenu && cur.inMenu()); }   /* a game with its own front menu (G.menu) is never paused or restarted while it sits there */
    function pause(on){ if(state.over || state.ready || inMenu()) return; state.paused = on === undefined ? !state.paused : !!on; overlay(); }
    function restart(){ if(!cur) return; state.paused = false; state.over = false; state.ready = !G.menu; state.score = 0; state.best = bestOf(G.id); hud.score.textContent = '0'; hud.best.textContent = String(state.best); cur.reset(); overlay(); stage.focus({ preventScroll:true }); }
    function begin(){ if(!state.ready) return; state.ready = false; overlay(); }
    function loop(ts){ raf = requestAnimationFrame(loop); if(!cur) return; var dt = last ? Math.min(.05, (ts - last) / 1000) : 0; last = ts; try { if(!state.paused && !state.over && !state.ready) cur.update(dt); cur.draw(ctx); } catch(e){ stop(); setOver('<b>That game crashed</b><span>'+esc(String(e && e.message || e))+'</span><div><button type="button" data-back>All games</button></div>'); var bk = $('[data-back]', w.body); if(bk) bk.addEventListener('click', home); } }
    function api(){ return { W:G.W, H:G.H, best:state.best, touch:isTouch(), canvas:cv, stage:stage,
      score: function(n){ state.score = +n || 0; hud.score.textContent = String(state.score); if(state.score > state.best){ state.best = state.score; hud.best.textContent = String(state.best); } },
      over: function(msg){ if(state.over) return; state.over = true; state.overMsg = msg || 'Game over'; saveBest(); overlay(); },
      save: function(){ saveBest(); },   /* a game with its own ending screen banks the best without the framework's card */
      status: function(t){ hud.status.textContent = t || ''; } }; }
    /* touch pad (only the two games whose controls have no gesture equivalent: Rounds, Nightshift): arrows become a d-pad cluster on the left, everything else an action cluster on the right, like a handheld */
    function padHtml(pad){ var dir = { ArrowLeft:'l', ArrowUp:'u', ArrowDown:'d', ArrowRight:'r' }, dp = pad.filter(function(p){ return dir[p[1]]; }), ac = pad.filter(function(p){ return !dir[p[1]]; }), btn = function(p, cls){ return '<button type="button" class="'+cls+'" data-key="'+esc(p[1])+'" aria-label="'+esc(p[1] === ' ' ? 'action' : p[1])+'">'+p[0]+'</button>'; };
      return '<div class="gm-pad'+(dp.length && ac.length ? ' both' : '')+'">'+(dp.length ? '<div class="gm-dpad'+(dp.length === 2 ? ' two' : '')+'">'+dp.map(function(p){ return btn(p, 'gm-'+dir[p[1]]); }).join('')+'</div>' : '')+(ac.length ? '<div class="gm-acts n'+ac.length+'">'+ac.map(function(p){ return btn(p, 'gm-act'); }).join('')+'</div>' : '')+'</div>'; }
    var padHeld = {};   /* pointerId -> pad button, so a lost pointerup (finger slid off, tab switch) never leaves a key stuck down */
    function padUp(b){ if(!b) return; b.classList.remove('on'); Object.keys(padHeld).forEach(function(id){ if(padHeld[id] === b) delete padHeld[id]; }); if(cur) try { cur.key(b.getAttribute('data-key'), false); } catch(e){} }
    function releaseAll(){ $$('.gm-pad button.on', w.body).forEach(padUp); padHeld = {}; if(stage && stage.tigRelease) stage.tigRelease(); }
    function docUp(e){ if(padHeld[e.pointerId]) padUp(padHeld[e.pointerId]); }
    function play(id){
      var g = gameById(id); if(!g){ home(); return; }
      stop(); if(w.el.classList.contains('fs')) root.classList.add('gaming');
      if(g.src && !g.make){ w.body.innerHTML = '<div class="pad gm-loading"><div class="eyebrow">Arcade</div><p>Loading '+esc(g.name)+'\u2026</p></div>'; loadLib(g.src, function(){ if(!g.make){ toast(g.name+' did not register. Check the connection and try again.'); home(); return; } if(w.el.isConnected && $('.gm-loading', w.body)) play(id); }, function(){ if(w.el.isConnected){ toast(g.name+' did not load. Check the connection and try again.'); home(); } }); return; }   /* the game's own bundle first; its lib (Three.js) on the next pass */
      if(g.lib && LIBS[g.lib] !== 2 && !window[{ three:'THREE' }[g.lib] || g.lib]){ w.body.innerHTML = '<div class="pad gm-loading"><div class="eyebrow">Arcade</div><p>Loading '+esc(g.name)+'\u2026</p></div>'; loadLib(g.lib, function(){ if(w.el.isConnected && $('.gm-loading', w.body)) play(id); }, function(){ if(w.el.isConnected){ toast(g.name+' did not load. Check the connection and try again.'); home(); } }); return; }
      G = g; state = { paused:false, over:false, ready:!g.menu, score:0, best:bestOf(g.id), overMsg:'' };   /* a G.menu game runs from the first frame and shows its own front menu */
      var touch = isTouch(), pad = touch && PADS[g.pad] ? PADS[g.pad] : null;
      w.body.innerHTML = '<div class="gm'+(touch ? ' touch' : '')+'"><div class="gm-hud"><button type="button" class="gm-backb" data-back>'+ic('back')+'<span>Games</span></button><b class="gm-name" style="--gc:'+g.color+'">'+esc(g.name)+'</b><span class="gm-sc">score <b data-score>0</b></span><span class="gm-sc best">best <b data-best>'+state.best+'</b></span><span class="gm-status" data-status></span><span class="gm-sp"></span><button type="button" data-pause>Pause</button><button type="button" data-restart>Restart</button><button type="button" data-fs title="Full screen (Esc leaves)">'+ic('expand')+'</button></div>'+
        '<div class="gm-stage" tabindex="0" aria-label="'+esc(g.name)+' game"><canvas class="gm-cv" width="'+g.W+'" height="'+g.H+'"></canvas><div class="gm-over" hidden></div></div>'+
        (pad ? padHtml(pad) : '')+'</div>';
      stage = $('.gm-stage', w.body); cv = $('.gm-cv', w.body); hud = { score:$('[data-score]', w.body), best:$('[data-best]', w.body), status:$('[data-status]', w.body), pause:$('[data-pause]', w.body), fs:$('[data-fs]', w.body) };
      if(g.gl){ ctx = null; cv.classList.add('fill'); } else { var dpr = Math.min(2, window.devicePixelRatio || 1); cv.width = g.W * dpr; cv.height = g.H * dpr; ctx = cv.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
      cur = g.make(api()); w.game = cur; stage.tigGame = cur; cur.reset(); overlay();
      $('[data-back]', w.body).addEventListener('click', home); hud.pause.addEventListener('click', function(){ pause(); stage.focus({ preventScroll:true }); }); $('[data-restart]', w.body).addEventListener('click', restart); hud.fs.addEventListener('click', function(){ gameFs(w); stage.focus({ preventScroll:true }); });
      w.onFs = function(on){ hud.fs.innerHTML = ic(on ? 'compress' : 'expand'); hud.fs.title = on ? 'Leave full screen (Esc)' : 'Full screen (Esc leaves)'; setTimeout(fit, 60); setTimeout(fit, 520); };
      /* gestures. A touch game declares a `pad` kind: `swipe` (flick in a direction, the flick fires as soon as the finger has travelled ~24 px so a hop or a slide never waits for the lift; a
         further flick in the same stroke fires again after `rep` px; a still tap hands the game `pointer('tap')` or the `tap` key), `stick` (the first finger is a floating joystick that holds
         the arrow keys, a second finger or a still tap is the action key), `drag` (the game reads pointer moves itself), `tap`, `mines`, or one of the few PADS kinds that still draw buttons. */
      var GD = { L:'ArrowLeft', R:'ArrowRight', U:'ArrowUp', D:'ArrowDown', tap:null, act:' ', rep:56, once:'' }, gest = null;   /* once: directions whose flick ends the stroke (Stacker: a hard drop must never repeat into the next piece) */
      if(g.pad === 'swipe' || g.pad === 'stick'){ gest = { kind:g.pad }; Object.keys(GD).forEach(function(k){ gest[k] = g.gest && k in g.gest ? g.gest[k] : GD[k]; }); }
      var pt = function(e){ var r = cv.getBoundingClientRect(); return { x:(e.clientX - r.left) / r.width * g.W, y:(e.clientY - r.top) / r.height * g.H }; }, sw = null, stick = null, acts = {};
      var stickEl = null, stickNub = null;
      if(gest && gest.kind === 'stick' && touch){ stickEl = document.createElement('div'); stickEl.className = 'gm-stick'; stickEl.hidden = true; stickEl.innerHTML = '<i></i>'; stage.appendChild(stickEl); stickNub = stickEl.firstChild; }
      function tapKey(k){ if(!k || !cur) return; cur.key(k, true); cur.key(k, false); }
      function swipeStep(e){ if(sw.done) return; var dx = e.clientX - sw.x, dy = e.clientY - sw.y, th = sw.n ? gest.rep : 24; if(Math.hypot(dx, dy) <= th) return; var d = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'R' : 'L') : (dy > 0 ? 'D' : 'U'); tapKey(gest[d]); sw.n++; sw.x = e.clientX; sw.y = e.clientY; if(gest.once.indexOf(d) >= 0) sw.done = true; }
      function stickStep(e){ var dx = e.clientX - stick.x, dy = e.clientY - stick.y, d = Math.hypot(dx, dy); if(d > 10) stick.moved = true;
        if(d > 64){ var k = (d - 64) / d; stick.x += dx * k; stick.y += dy * k; dx = e.clientX - stick.x; dy = e.clientY - stick.y; if(stickEl){ var r = stage.getBoundingClientRect(); stickEl.style.left = (stick.x - r.left)+'px'; stickEl.style.top = (stick.y - r.top)+'px'; } }   /* the ring follows a finger that wanders, so a turn never needs a re-grip */
        var want = { L:dx < -(stick.held.L ? 9 : 18), R:dx > (stick.held.R ? 9 : 18), U:dy < -(stick.held.U ? 9 : 18), D:dy > (stick.held.D ? 9 : 18) };
        ['L', 'R', 'U', 'D'].forEach(function(k){ if(!!want[k] !== !!stick.held[k]){ stick.held[k] = want[k]; if(cur) cur.key(gest[k], want[k]); } });
        if(stickNub) stickNub.style.transform = 'translate('+Math.round(dx)+'px,'+Math.round(dy)+'px)'; }
      function stickEnd(){ if(!stick) return; ['L', 'R', 'U', 'D'].forEach(function(k){ if(stick.held[k] && cur) cur.key(gest[k], false); }); if(stickEl){ stickEl.hidden = true; stickNub.style.transform = ''; } stick = null; }
      function actEnd(id){ if(acts[id]){ delete acts[id]; if(cur && gest) cur.key(gest.act, false); } }
      stage.tigRelease = function(){ stickEnd(); Object.keys(acts).forEach(actEnd); sw = null; if(cur && cur.release) try { cur.release(); } catch(x){} };   /* blur, a hidden tab or leaving the game lets every gesture go */
      function gestEnd(e, p){   /* a finger lifted (or the browser cancelled it) */
        if(sw && e.pointerId === sw.id){ if(e.type === 'pointerup') swipeStep(e); if(!sw.n && Date.now() - sw.t < 450 && e.type === 'pointerup'){ if(gest.tap) tapKey(gest.tap); else if(cur) cur.pointer('tap', p.x, p.y, e); } sw = null; }
        if(stick && e.pointerId === stick.id){ var still = !stick.moved && Date.now() - stick.t < 300; stickEnd(); if(still && e.type === 'pointerup'){ if(gest.tap) tapKey(gest.tap); else if(cur) cur.pointer('tap', p.x, p.y, e); } }
        actEnd(e.pointerId); }
      stage.addEventListener('contextmenu', function(e){ e.preventDefault(); });
      /* iOS: the long press that flags a mine (or any held finger) must never become a text-selection highlight, a magnifier or a callout, and a double tap must never zoom */
      var noTouch = function(e){ if(!e.target.closest('.gm-over, .gm-ui')) e.preventDefault(); }; stage.addEventListener('touchstart', noTouch, { passive:false }); stage.addEventListener('touchmove', noTouch, { passive:false });
      stage.addEventListener('pointerdown', function(e){ if(e.target.closest('.gm-over button, .gm-over input, .gm-over select, .gm-over label, .gm-over output, .gm-ui')) return;   /* a title card may carry settings controls; .gm-ui is a game's own menu */ stage.focus({ preventScroll:true }); if(state.over) return; if(state.paused){ pause(false); return; } if(state.ready){ begin(); if(cur && cur.wake) try { cur.wake(); } catch(x){} return; }   /* the click that dismisses "press any key" only starts the game: it never reaches the frog */ var p = pt(e);
        if(gest){ if(gest.kind === 'swipe'){ if(!sw) sw = { id:e.pointerId, x:e.clientX, y:e.clientY, t:Date.now(), n:0 }; }
          else if(!stick){ stick = { id:e.pointerId, x:e.clientX, y:e.clientY, t:Date.now(), held:{}, moved:false }; if(stickEl && e.pointerType !== 'mouse'){ var r = stage.getBoundingClientRect(); stickEl.style.left = (e.clientX - r.left)+'px'; stickEl.style.top = (e.clientY - r.top)+'px'; stickEl.hidden = false; } }
          else if(e.pointerId !== stick.id && !acts[e.pointerId]){ acts[e.pointerId] = 1; if(cur) cur.key(gest.act, true); return; } }   /* second finger: the action button */
        if(cur) cur.pointer('down', p.x, p.y, e); });
      stage.addEventListener('pointermove', function(e){ if(!cur || state.over) return; var p = pt(e); cur.pointer('move', p.x, p.y, e); if(sw && e.pointerId === sw.id) swipeStep(e); if(stick && e.pointerId === stick.id) stickStep(e); });
      stage.addEventListener('pointerup', function(e){ if(!cur) return; var p = pt(e); if(!acts[e.pointerId]) cur.pointer('up', p.x, p.y, e); gestEnd(e, p); });
      stage.addEventListener('pointercancel', function(e){ if(!cur) return; var p = pt(e); if(cur.cancel) try { cur.cancel(p.x, p.y, e); } catch(x){} gestEnd(e, p); });   /* a game tracking its own fingers (Mines: hold to flag, pinch to zoom) hears the browser take one away */
      $$('.gm-pad button', w.body).forEach(function(b){ var k = b.getAttribute('data-key'), dn = function(e){ e.preventDefault(); if(b.setPointerCapture) try { b.setPointerCapture(e.pointerId); } catch(x){} padHeld[e.pointerId] = b; if(state.paused) pause(false); begin(); if(cur && !state.over) cur.key(k, true); b.classList.add('on'); }, up = function(e){ if(e && e.preventDefault) e.preventDefault(); padUp(b); }; b.addEventListener('pointerdown', dn); b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up); b.addEventListener('lostpointercapture', up); b.addEventListener('pointerleave', function(e){ if(e.pointerType === 'mouse') up(e); }); b.addEventListener('contextmenu', function(e){ e.preventDefault(); }); });
      var padEl = $('.gm-pad', w.body); if(padEl){ padEl.addEventListener('touchstart', function(e){ e.preventDefault(); }, { passive:false }); padEl.addEventListener('touchmove', function(e){ e.preventDefault(); }, { passive:false }); }
      window.addEventListener('blur', releaseAll); document.addEventListener('pointerup', docUp, true); document.addEventListener('pointercancel', docUp, true);
      keyH = function(e){
        if(!cur || w.min || !w.el.classList.contains('focus') || e.metaKey || e.ctrlKey || e.altKey) return;
        if(e.target.closest('input,textarea,select')){   /* a title-card setting has focus: arrows, Tab, Space and Enter still drive the control, any other key hands off to the game */
          if(!(((state.ready && e.target.closest('.gm-over')) || e.target.closest('.gm-ui')) && !/^(Arrow|Tab|Home|End|Page|Enter| $)/.test(e.key))) return;
          e.target.blur(); stage.focus({ preventScroll:true });
        }
        if(e.key === 'p' || e.key === 'P'){ e.preventDefault(); pause(); return; }
        if((e.key === 'r' || e.key === 'R') && !(G.ownKeys && !state.over) && !inMenu()){ e.preventDefault(); restart(); return; }   /* the shooter owns R for reload; its restart is the HUD button or the game-over card */
        if(state.over){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); restart(); } return; }
        if(e.key === 'Escape') return;
        if(state.paused){ if(e.key !== 'Tab') e.preventDefault(); return; }
        if(e.repeat){ if(/^Arrow| $/.test(e.key)) e.preventDefault(); return; }
        begin(); var h = cur.key(e.key, true); if(h || /^Arrow|^ $/.test(e.key)) e.preventDefault();
      };
      keyU = function(e){ if(cur) cur.key(e.key, false); };
      visH = function(){ if(document.hidden){ releaseAll(); if(cur && !state.over && !state.ready && !inMenu()) pause(true); } };
      document.addEventListener('keydown', keyH); document.addEventListener('keyup', keyU); document.addEventListener('visibilitychange', visH);
      if(window.ResizeObserver){ ro = new ResizeObserver(fit); ro.observe(stage); } fit(); setTimeout(fit, 50);
      last = 0; raf = requestAnimationFrame(loop);
      if(!w.el.classList.contains('fs')) gameFs(w, true);   /* a game takes the whole screen like an app; the Games button or Esc comes back */
      if(document.activeElement && document.activeElement !== document.body && document.activeElement.blur) document.activeElement.blur();
      setTimeout(function(){ if(stage && stage.isConnected) stage.focus({ preventScroll:true }); }, 30);
    }
    w.route = function(id){ if(gameById(id)) play(id); else home(); };
    w.destroy = function(){ stop(); if(w.el.classList.contains('fs')) gameFs(w, false); root.classList.remove('gaming'); };
    home();
  };

/* tigOS core app.js, part 15: pets window. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- pets window (hidden app: `pets` in the terminal, or search "pet") ---------------- */
  RENDER.pets = function(w){
    var seg = function(key, opts){ return '<div class="seg" data-pref="'+key+'">'+opts.map(function(o){ return '<button type="button" data-v="'+o[0]+'" class="'+(PREF[key] === o[0] ? 'on' : '')+'">'+o[1]+'</button>'; }).join('')+'</div>'; };
    var curKey = PREF.pet && PETS[PREF.pet] ? PREF.pet : '';
    /* each card holds a real .pet (same markup as the desktop one, minus drag/name): the same rig, so it blinks, bobs, wags and hovers in its box */
    var mini = function(k){ return '<div class="pet" data-pet="'+k+'" aria-hidden="true"><span class="shadow"></span><span class="body"><span class="art">'+PETS[k].svg+'</span></span><span class="hearts"><i>\u2665</i><i>\u2665</i><i>\u2665</i></span></div>'; };
    w.body.innerHTML = '<div class="pt-home"><div class="pt-head"><div><h2>Pets</h2><p>'+Object.keys(PETS).length+' desktop companions in 3D, one out at a time. Drag them anywhere on the desktop; they stay close to where you put them. Drop one on the X to say goodbye.</p></div>'+
      '<div class="pt-size"><span>Size</span>'+seg('petsize', [['sm','S'],['md','M'],['lg','L']])+'</div></div><div class="pt-grid">'+
      Object.keys(PETS).map(function(k){ var pt = PETS[k], on = k === curKey; return '<div class="pt-card'+(on ? ' on' : '')+'" data-pet="'+k+'"><div class="pt-art">'+mini(k)+'</div><div class="pt-meta"><b>'+esc(pt.name)+'</b><small>the '+esc(pt.label)+'</small><em>'+(pt.say || []).slice(0, 3).map(esc).join(' \u00b7 ')+'</em></div>'+
        (on ? '<button type="button" class="pt-btn live" data-act="off" title="Click to send '+esc(pt.name)+' home"><span class="a">Out now</span><span class="b">Send home</span></button>' : '<button type="button" class="pt-btn" data-act="on">Bring out</button>')+'</div>'; }).join('')+
      '</div></div>';
    $$('.pt-btn', w.body).forEach(function(b){ b.addEventListener('click', function(){ var k = b.closest('.pt-card').getAttribute('data-pet'); if(b.getAttribute('data-act') === 'off'){ var el = petEl(); if(el) petGoodbye(el); else petSet(''); } else { petSet(k); toast(PETS[k].name+' is out', 'Bottom right. Drag them wherever you like.'); } }); });
    $$('.seg button', w.body).forEach(function(b){ b.addEventListener('click', function(){ setPref(b.parentNode.getAttribute('data-pref'), b.getAttribute('data-v')); }); });
    pet3Scan(w.body);   /* every card is a live 3D pet */
    /* idle moods: every few seconds one card looks around, hops or gets hearts, so the window never sits still */
    clearInterval(w.petTimer); var cards = $$('.pt-card .pet', w.body);
    w.petTimer = setInterval(function(){ if(!w.body.isConnected || w.min || document.hidden || root.classList.contains('rm')) return; var el = cards[(Math.random()*cards.length)|0], mood = ['look','hop','happy','look'][(Math.random()*4)|0]; if(!el || /look|hop|happy/.test(el.className)) return; el.classList.add(mood); setTimeout(function(){ el.classList.remove(mood); }, mood === 'look' ? 1800 : 1300); }, 2600);
    w.destroy = function(){ clearInterval(w.petTimer); };
  };

/* tigOS core app.js, part 16: settings. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- settings (persisted) ---------------- */
  var PREF = { theme:'dark', accent:'orange', text:'md', dock:'md', dockpos:'bottom', dockhide:'off', dockmag:'on', motion:'on', cursor:'block', pet:'', petsize:'md', wall:'live', saver:'drift', idle:'10' };
  var STORE = {
    get: function(){ var raw = null; try { raw = localStorage.getItem('tigos.prefs'); } catch(e){} if(!raw){ try { var m = document.cookie.match(/(?:^|; )tigos\.prefs=([^;]*)/); if(m) raw = decodeURIComponent(m[1]); } catch(e){} } return raw; },
    set: function(raw){ try { localStorage.setItem('tigos.prefs', raw); } catch(e){} try { document.cookie = 'tigos.prefs='+encodeURIComponent(raw)+'; max-age=31536000; path=/; SameSite=None; Secure'; document.cookie = 'tigos.prefs='+encodeURIComponent(raw)+'; max-age=31536000; path=/; SameSite=Lax'; } catch(e){} }
  };
  try { var sp = JSON.parse(STORE.get() || '{}'); Object.keys(sp).forEach(function(k){ if(k in PREF) PREF[k] = sp[k]; }); } catch(e){}
  var ACCENTS = { orange:'#ff8a00', pink:'#ff4d8d', violet:'#a78bfa', teal:'#63e6be', blue:'#8cc7ff', amber:'#ffd166' };
  function applyPrefs(){
    root.classList.toggle('light', PREF.theme === 'light');
    var acc = USER.name === 'greggyd' ? '#e95420' : USER.name === 'ariel' ? '#ff5fa8' : (ACCENTS[PREF.accent] || ACCENTS.orange);   /* Ubuntu orange and Ariel's pink win over the picked accent */
    root.style.setProperty('--accent', acc); root.style.setProperty('--orange', acc);
    root.style.setProperty('--tscale', { sm:1, md:1.06, lg:1.18, xl:1.32 }[PREF.text] || 1.06);
    root.classList.remove('dock-sm', 'dock-lg'); if(PREF.dock !== 'md') root.classList.add('dock-'+PREF.dock);
    root.classList.remove('dock-left', 'dock-right'); if(PREF.dockpos !== 'bottom') root.classList.add('dock-'+PREF.dockpos);
    root.classList.toggle('dock-hide', PREF.dockhide === 'on');
    root.classList.toggle('dock-nomag', PREF.dockmag === 'off');
    root.classList.toggle('rm', PREF.motion === 'off');
    if(typeof WALL !== 'undefined') wallApply();
    root.classList.remove('cur-block', 'cur-line', 'cur-underline'); root.classList.add('cur-'+(PREF.cursor || 'block'));
    root.classList.remove('pet-sm', 'pet-lg'); if(PREF.petsize && PREF.petsize !== 'md') root.classList.add('pet-'+PREF.petsize);
    if(typeof petApply === 'function') petApply();
    if(PREF.dockhide !== 'on') root.classList.remove('dock-peek');
    dockFit();   /* a new size or side may not fit the screen (27-dock-edit.js) */
    if(WM && WM.wins) reclamp();   /* moving or hiding the dock changes the work area, so zoomed and tall windows follow it */
    STORE.set(JSON.stringify(PREF));
    if(typeof reclamp === 'function'){ reclamp(); setTimeout(reclamp, 350); }   // dock size / position / hide all move the dock edge
  }
  /* auto-hide dock: reveal from the pointer position, not :hover (the hidden dock's hover strip and its shown position never overlap, so :hover flickered) */
  root.addEventListener('pointermove', function(e){
    if(PREF.dockhide !== 'on' || e.pointerType === 'touch' || isMobile()) return;
    var rr = root.getBoundingClientRect(), x = e.clientX, y = e.clientY, Z = 22, on = root.classList.contains('dock-peek');
    var edge = PREF.dockpos === 'left' ? x <= rr.left + Z : PREF.dockpos === 'right' ? x >= rr.right - Z : y >= rr.bottom - Z;
    if(!on){ if(edge) root.classList.add('dock-peek'); return; }
    var d = $('#dock').getBoundingClientRect(), M = 28, near = x >= d.left - M && x <= d.right + M && y >= d.top - M && y <= d.bottom + M;
    if(!edge && !near) root.classList.remove('dock-peek');
  });
  root.addEventListener('pointerleave', function(){ root.classList.remove('dock-peek'); });
  function setPref(k, v){ PREF[k] = v; applyPrefs(); petUIs(); }   /* Settings and the Pets window always agree */
  applyPrefs();
  RENDER.settings = function(w){
    var seg = function(key, opts){ return '<div class="seg" data-pref="'+key+'">'+opts.map(function(o){ return '<button type="button" data-v="'+o[0]+'" class="'+(PREF[key] === o[0] ? 'on' : '')+'">'+o[1]+'</button>'; }).join('')+'</div>'; };
    var sw = '<div class="seg" data-pref="accent">'+Object.keys(ACCENTS).map(function(k){ return '<button type="button" class="sw '+(PREF.accent === k ? 'on' : '')+'" data-v="'+k+'" style="background:'+ACCENTS[k]+'" aria-label="'+k+'"></button>'; }).join('')+'</div>';
    var dseg = function(key, opts){ return '<div class="seg" data-dview="'+key+'">'+opts.map(function(o){ return '<button type="button" data-v="'+o[0]+'" class="'+(String(dview(key)) === o[0] ? 'on' : '')+'">'+o[1]+'</button>'; }).join('')+'</div>'; };   /* desktop view, saved per user (27-desktop.js) */
    var phone = isPhone(), touchy = isMobile() || (window.matchMedia && matchMedia('(pointer:coarse)').matches);
    var row = function(t, sub, ctl){ return '<div class="set-row"><div class="lbl"><b>'+t+'</b><span>'+sub+'</span></div><div>'+ctl+'</div></div>'; };
    /* the pet picker: one chip per pet with a live mini of the pet inside, plus None. Chips are .pet elements so the same rig draws them */
    var cur = PREF.pet && PETS[PREF.pet] ? PREF.pet : '';
    var pick = '<div class="pet-pick" role="radiogroup" aria-label="Desktop pet"><button type="button" class="pet-chip none'+(cur ? '' : ' on')+'" data-pet-pick="" data-pet-off aria-pressed="'+(cur ? 'false' : 'true')+'"><span class="pet-chip-art"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></span><b>None</b></button>'+
      Object.keys(PETS).map(function(k){ var pt = PETS[k]; return '<button type="button" class="pet-chip'+(k === cur ? ' on' : '')+'" data-pet-pick="'+k+'" aria-pressed="'+(k === cur ? 'true' : 'false')+'" title="'+esc(pt.name)+' the '+esc(pt.label)+'"><span class="pet-chip-art"><span class="pet" data-pet="'+k+'" aria-hidden="true"><span class="body"><span class="art">'+pt.svg+'</span></span></span></span><b>'+esc(pt.name)+'</b><small>'+esc(pt.label)+'</small></button>'; }).join('')+'</div>';
    w.body.innerHTML = '<div class="pad"><div class="eyebrow">Settings</div><div class="h3" style="margin-bottom:6px">Make it yours</div><p class="sub" style="margin-bottom:8px">Saved on this device. Nothing leaves the browser.</p>'+
      row('Appearance', 'Dark is the default.', seg('theme', [['dark','Dark'],['light','Light']]))+
      row('Accent', 'Highlights, headline, menus.', sw)+
      row('Text size', 'Inside app windows.', seg('text', [['sm','S'],['md','M'],['lg','L'],['xl','XL']]))+
      (isMobile() ? '' :
      row('Dock size', '', seg('dock', [['sm','Small'],['md','Medium'],['lg','Large']]))+
      row('Dock position', 'Bottom, left or right.', seg('dockpos', [['bottom','Bottom'],['left','Left'],['right','Right']]))+
      row('Auto-hide dock', 'Slides away until you reach for it.', seg('dockhide', [['off','Off'],['on','On']]))+
      row('Magnification', 'Icons grow as the pointer passes.', seg('dockmag', [['on','On'],['off','Off']])))+
      (phone ? '' : row('Dock apps', touchy ? 'Hold an icon for its options, or the space beside the icons for the Dock\u2019s own menu.' : 'Drag icons to rearrange them, or off the Dock to remove them.', '<button type="button" class="set-btn" data-dock-reset>Reset Dock\u2026</button>'))+   /* a phone keeps its Dock as it is */
      (phone ? '' :   /* nor has it desktop icons */
      '<div class="set-group"><div class="eyebrow">Desktop</div></div>'+
      row('Desktop icons', 'Hiding them hides the welcome text too.', dseg('icons', [['true','Show'],['false','Hide']]))+
      row('Welcome text', 'The hello on an empty desktop.', dseg('hero', [['true','Show'],['false','Hide']]))+
      row('Icon size', '', dseg('size', [['sm','S'],['md','M'],['lg','L']])))+
      (isMobile() ? '' : row('Terminal cursor', 'Block is the default.', seg('cursor', [['block','Block'],['line','Line'],['underline','Underline']])))+
      row('Wallpaper', 'Live adds depth that follows the mouse.', seg('wall', [['live','Live'],['still','Still']]))+
      row('Screensaver', esc(PREF.saver === 'random' ? 'A different one each time.' : (SAVERS[PREF.saver] || SAVERS.drift).sub+'.'), seg('saver', Object.keys(SAVERS).map(function(k){ return [k, SAVERS[k].name]; }).concat([['random','Random']])))+
      row('Start after', 'Idle time before the screensaver.', seg('idle', [['off','Off'],['2','2 min'],['5','5 min'],['10','10 min'],['20','20 min']]))+
      row('Motion', 'Turn off animations.', seg('motion', [['on','On'],['off','Reduced']]))+
      '<div class="set-group"><div class="eyebrow">Pets</div></div>'+
      row('Desktop pet', PREF.pet && PETS[PREF.pet] ? esc(PETS[PREF.pet].name)+' the '+esc(PETS[PREF.pet].label)+' is out. Drag them anywhere; drop them on the X to say goodbye.' : 'A 3D companion that lives on the desktop. Pick one.', pick)+
      row('Pet size', '', '<div class="pet-ctl">'+seg('petsize', [['sm','Small'],['md','Medium'],['lg','Large']])+'<button type="button" class="pet-more" data-open-pets>Open Pets</button></div>')+
      '<div class="set-foot"><span>tigOS 2.0 \u00b7 '+VIS().filter(function(k){ return !(APPS[k].desk && isPhone()); }).length+' apps</span><button type="button" data-reset>Reset to defaults</button></div></div>';
    $$('.seg[data-pref] button', w.body).forEach(function(b){ b.addEventListener('click', function(){ setPref(b.parentNode.getAttribute('data-pref'), b.getAttribute('data-v')); }); });
    $$('.seg[data-dview] button', w.body).forEach(function(b){ b.addEventListener('click', function(){ var k = b.parentNode.getAttribute('data-dview'), v = b.getAttribute('data-v'); dviewSet(k, v === 'true' ? true : v === 'false' ? false : v); }); });
    var drs = $('[data-dock-reset]', w.body); if(drs) drs.addEventListener('click', dockResetAsk);
    $$('[data-pet-pick]', w.body).forEach(function(b){ b.addEventListener('click', function(){ var k = b.getAttribute('data-pet-pick'); if(!k){ if(!PREF.pet) return; var el = petEl(); if(el) petGoodbye(el); else petSet(''); return; } if(k === PREF.pet) return; petSet(k); toast(PETS[k].name+' is out', 'Bottom right. Drag them wherever you like.'); }); });
    var op = $('[data-open-pets]', w.body); if(op) op.addEventListener('click', function(){ open('pets'); });
    pet3Scan(w.body);
    $('[data-reset]', w.body).addEventListener('click', function(){ PREF = { theme:'dark', accent:'orange', text:'md', dock:'md', dockpos:'bottom', dockhide:'off', dockmag:'on', motion:'on', cursor:'block', pet:'', petsize:'md', wall:'live', saver:'drift', idle:'10' }; applyPrefs(); RENDER.settings(w); toast('Settings reset', 'Back to the defaults.'); });
  };

/* tigOS core app.js, part 17: lightbox. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- lightbox ---------------- */
  var lb = $('#lightbox');
  function lightbox(key, cap){ if(!A[key]) return; $('#lbImg').src = A[key]; $('#lbImg').alt = cap || ''; $('#lbCap').textContent = cap || ''; lb.hidden = false; }
  lb.addEventListener('click', function(){ lb.hidden = true; });

/* tigOS core app.js, part 18: spotlight. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- spotlight ---------------- */
  var spot = $('#spotlight'), spotIn = $('#spotInput'), spotRes = $('#spotResults'), spotSel = 0;
  function index(){
    var items = [];
    Object.keys(APPS).filter(function(k){ return !APPS[k].hidden; }).forEach(function(k){ items.push({ t:APPS[k].title, s:'Open app', k:'App', desk:!!APPS[k].desk, tile:APPS[k].tile, icon:APPS[k].icon, go:function(){ open(k); } }); });   /* all of them: one removed from Terminal drops out at search time (spotRender), so a reinstall brings it straight back */
    /* hidden apps never sit in the default list, but a search for them (or for what is inside them) finds them */
    items.push({ t:APPS.games.title, s:'Open app \u00b7 '+GAMES.length+' games', k:'App', hidden:true, tile:'games', icon:'gamepad', hay:'arcade game games play '+GAMES.map(function(g){ return g.id+' '+g.name; }).join(' '), go:function(){ open('games'); } });
    items.push({ t:APPS.pets.title, s:'Open app \u00b7 desktop companions', k:'App', hidden:true, tile:'paw', icon:'paw', hay:'pet pets companion '+Object.keys(PETS).map(function(k){ return k+' '+PETS[k].name+' '+PETS[k].label; }).join(' '), go:function(){ open('pets'); } });
    items.push({ t:APPS.jot.title, s:'Open app \u00b7 notes, saved as text files', k:'App', hidden:true, desk:true, tile:'jot', icon:'jot', hay:'notes note notepad text txt markdown md write writing jot document doc', go:function(){ jotOpen(); } });
    items.push({ t:APPS.den.title, s:'Open app \u00b7 browse your files and folders', k:'App', hidden:true, desk:true, tile:'den', icon:'den', hay:'finder files file folders folder browse explorer den documents', go:function(){ denOpen(''); } });
    GAMES.forEach(function(g){ items.push({ t:g.name, s:'Arcade game \u00b7 '+g.blurb, k:'Game', tile:'games', icon:'gamepad', art:g.icon, bg:g.color, hay:g.id+' game play arcade', go:function(){ open('games', { route:g.id }); } }); });
    Object.keys(PETS).forEach(function(k){ items.push({ t:PETS[k].name+' the '+PETS[k].label, s:'Pet \u00b7 bring them out', k:'Pet', tile:'paw face', icon:'paw', art:PETS[k].svg, hay:k+' pet pets', go:function(){ petSet(k); open('pets'); } }); });
    items.splice(items.findIndex(function(x){ return x.t === APPS.contact.title; }) + 1, 0, { t:'LinkedIn', s:'Open profile \u2197 \u00b7 '+TIG.contact.linkedinLabel, k:'App', tile:'linkedin', icon:'linkedin', hay:'linkedin social profile network connect message chase', go:function(){ window.open(TIG.contact.linkedin, '_blank', 'noopener'); toast('Opening LinkedIn', TIG.contact.linkedinLabel, 'linkedin'); } });
    TIG.projects.forEach(function(p){ items.push({ t:p.name, s:p.company+' · '+p.tag, k:'Project', tile:'projects', icon:'projects', hay:p.overview+' '+p.execution+' '+p.results, go:function(){ open('projects', { route:p.id }); } }); });
    TIG.experience.forEach(function(j){ items.push({ t:j.role, s:j.company+' · '+j.dates, k:'Role', tile:'experience', icon:'exp', hay:j.bullets.join(' '), go:function(){ open('experience'); } }); });
    TIG.skills.groups.forEach(function(g){ g.items.forEach(function(s){ items.push({ t:s, s:g.name, k:'Skill', tile:'skills', icon:'skills', go:function(){ open('skills'); } }); }); });
    items.push({ t:TIG.education.school, s:TIG.education.degree+' · '+TIG.education.year, k:'Education', tile:'experience', icon:'exp', go:function(){ open('experience'); } });
    TIG.stats.forEach(function(st){ items.push({ t:st.big+' '+st.label, s:st.sub, k:'Stat', tile:'about', icon:'about', go:function(){ open('about'); } }); });
    items.push({ t:'Email Chase', s:TIG.contact.email, k:'Contact', tile:'contact', icon:'contact', go:function(){ open('contact'); } });
    items.push({ t:'Download resume', s:'One page PDF', k:'Action', tile:'resume', icon:'resume', go:function(){ open('resume'); } });

    return items;
  }
  var IDX = index(), spotHits = [];
  /* notes change all the time, so they join the index at search time; phones have no Jot or Den, so neither they nor notes show there */
  function spotNotes(){ return jnotes().map(function(it){ return { t:it.name, s:'Note \u00b7 '+dwhere(it)+' \u00b7 '+jwhen(it.m || it.t), k:'Note', desk:true, tile:'jot', icon:'jot', hay:nbody(it.id).slice(0, 20000), go:function(){ jotOpen(it.id); } }; }); }
  function spotRender(q){
    q = (q||'').trim().toLowerCase();
    var ph = isPhone(), all = (ph ? IDX : IDX.concat(q ? spotNotes() : [])).filter(function(it){ return !(it.desk && ph) && !(APPS[it.tile] && appGone(it.tile)); });   /* a removed app, and what lives inside it, is not offered */
    /* rank: exact title, title prefix, title, subtitle, then the hidden search text, so typing a game or pet's name puts it first, ahead of the app that merely lists it */
    var rank = function(it){ var t = it.t.toLowerCase(), sub = (it.s||'').toLowerCase(), hay = (it.hay||'').toLowerCase(); return t === q ? 0 : t.indexOf(q) === 0 ? 1 : t.indexOf(q) > -1 ? 2 : sub.indexOf(q) > -1 ? 3 : hay.indexOf(q) > -1 ? 4 : 5; };
    spotHits = all.filter(function(it){ if(!q) return it.k === 'App' && !it.hidden; return (it.t+' '+it.s+' '+(it.hay||'')).toLowerCase().indexOf(q) > -1; }).map(function(it, i){ return { it:it, i:i, r:rank(it) }; }).sort(function(a, b){ return a.r - b.r || a.i - b.i; }).map(function(x){ return x.it; }).slice(0, 10);   /* room for the Pets app plus all nine pets */
    spotSel = 0;
    spotRes.innerHTML = spotHits.length ? spotHits.map(function(it, i){ return '<button type="button" data-i="'+i+'" class="'+(i===0?'sel':'')+'"><span class="sm tile '+it.tile+'"'+(it.bg ? ' style="background:linear-gradient(145deg,'+it.bg+', rgba(0,0,0,.35) 140%)"' : '')+'>'+(it.art || ic(it.icon))+'</span><span><b>'+esc(it.t)+'</b><span>'+esc(it.s)+'</span></span><em>'+it.k+'</em></button>'; }).join('') : '<div class="spot-empty">No matches for \u201c'+esc(q)+'\u201d</div>';
    $$('button', spotRes).forEach(function(b){ b.addEventListener('click', function(){ spotGo(+b.getAttribute('data-i')); }); });
  }
  function spotGo(i){ var it = spotHits[i]; spotClose(); if(it) it.go(); }
  function spotOpen(){ spot.hidden = false; spotIn.value = ''; spotRender(''); setTimeout(function(){ spotIn.focus(); }, 30); }
  function spotClose(){ spot.hidden = true; }
  spotIn.addEventListener('input', function(){ spotRender(spotIn.value); });
  spotIn.addEventListener('keydown', function(e){
    if(e.key === 'ArrowDown'){ spotSel = Math.min(spotHits.length-1, spotSel+1); e.preventDefault(); }
    else if(e.key === 'ArrowUp'){ spotSel = Math.max(0, spotSel-1); e.preventDefault(); }
    else if(e.key === 'Enter'){ spotGo(spotSel); return; }
    else if(e.key === 'Escape'){ spotClose(); return; }
    $$('button', spotRes).forEach(function(b, i){ b.classList.toggle('sel', i === spotSel); });
  });
  spot.addEventListener('click', function(e){ if(e.target === spot) spotClose(); });
  $('#mbSearch').addEventListener('click', spotOpen);

/* tigOS core app.js, part 19: logo menu. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- logo menu ---------------- */
  var menu = $('#tgMenu'), mbLogo = $('#mbLogo');
  mbLogo.addEventListener('click', function(e){ e.stopPropagation(); var show = menu.hidden; if(show) closePops('menu'); menu.hidden = !show; mbLogo.classList.toggle('on', show); });
  document.addEventListener('click', function(e){ if(!menu.hidden && !e.target.closest('#tgMenu')){ menu.hidden = true; mbLogo.classList.remove('on'); } });
  $$('[data-action]', menu).forEach(function(b){ b.addEventListener('click', function(){
    var act = b.getAttribute('data-action'); menu.hidden = true; mbLogo.classList.remove('on');
    if(act === 'tour'){ tourStart(); }
  }); });

/* tigOS core app.js, part 20: power. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- power ---------------- */
  var pw = $('#pwMenu'), pwBtn = $('#mbPower'), sleepEl = $('#sleep'), offEl = $('#off');
  pwBtn.addEventListener('click', function(e){ e.stopPropagation(); var show = pw.hidden; if(show) closePops('pw'); pw.hidden = !show; });
  document.addEventListener('click', function(e){ if(!pw.hidden && !e.target.closest('#pwMenu')) pw.hidden = true; });
  var sdEl = $('#shutdown'), sdT = [];
  function shutdownScreen(msgs, then){
    sdT.forEach(clearTimeout); sdT = [];
    sdEl.classList.remove('crt'); sdEl.hidden = false; var m = $('#sdMsg'); m.textContent = msgs[0];
    msgs.forEach(function(t, i){ if(i) sdT.push(setTimeout(function(){ m.textContent = t; }, 520*i)); });
    sdT.push(setTimeout(function(){ sdEl.classList.add('crt'); }, 520*msgs.length + 200));
    sdT.push(setTimeout(function(){ then(); }, 520*msgs.length + 700));
    sdT.push(setTimeout(function(){ sdEl.hidden = true; sdEl.classList.remove('crt'); }, 520*msgs.length + 1000));
  }
  function restart(){
    if(root.classList.contains('poweroff') || !sdEl.hidden) return;
    closePops(); pw.hidden = true; menu.hidden = true; mbLogo.classList.remove('on');
    root.classList.add('poweroff');
    setTimeout(function(){ shutdownScreen(['Restarting', 'Closing apps', 'Saving your settings'], function(){ Object.keys(WM.wins).forEach(function(k){ close(WM.wins[k]); }); root.classList.add('booting'); root.classList.remove('poweroff'); bootSeq(true); }); }, 900);
  }
  var offT;
  function powerOff(){
    if(root.classList.contains('poweroff') || !offEl.hidden) return;
    closePops(); pw.hidden = true; menu.hidden = true; mbLogo.classList.remove('on');
    root.classList.add('poweroff');   /* menubar slides up, dock drops, windows dim and sink, wallpaper fades to black */
    clearTimeout(offT); offT = setTimeout(function(){ shutdownScreen(['Shutting down', 'Closing apps', 'Saving your settings', 'Goodbye'], function(){ offEl.hidden = false; offEl.classList.remove('leaving'); offRestart(); Object.keys(WM.wins).forEach(function(k){ close(WM.wins[k]); }); setTimeout(function(){ root.classList.remove('poweroff'); }, 350); }); }, 900);
  }
  /* Safari can leave a masked pseudo-element's animation stuck after the off screen has been display:none once; restart every animation on the button each time it is shown */
  function offRestart(){
    var btn = $('.off-btn', offEl); if(!btn) return;
    try { btn.getAnimations({ subtree:true }).forEach(function(an){ an.cancel(); an.play(); }); } catch(e){}
  }
  function powerOn(){ root.classList.add('booting'); offEl.classList.add('leaving'); setTimeout(function(){ offEl.hidden = true; offEl.classList.remove('leaving'); }, 480); bootSeq(true); }
  /* screensaver: "Drift" — a field of luminous strands that sway together like kelp, inspired by macOS Drift. Full screen, clock bottom-left. */
  var SAVER = { on:false, raf:0 };
  function driftStart(){   /* started through saverStart(kind) in 26-screensavers.js */
    var cv = $('#saver'); if(!cv || SAVER.on) return; SAVER.on = true; cv.setAttribute('data-run', '1');
    var ctx = cv.getContext('2d'), W, H, strands = [], hue0 = 270 + Math.random()*60, mob = isMobile();
    var size = function(){
      W = cv.width = root.clientWidth; H = cv.height = root.clientHeight; strands = [];
      var cols = mob ? 16 : 34, rows = mob ? 26 : 20, gx = W/cols, gy = H/rows;
      for(var i = 0; i <= cols; i++) for(var j = 0; j <= rows; j++) strands.push({ x:i*gx + (Math.random()-.5)*gx*.6, y:j*gy + (Math.random()-.5)*gy*.6, len:(mob ? 30 : 44) + Math.random()*50, ph:Math.random()*6.28, w:1.2 + Math.random()*2, h:(Math.random()-.5)*50 });
    };
    size(); window.addEventListener('resize', size);
    var last = 0, t0 = performance.now();
    var frame = function(ts){
      if(!SAVER.on){ window.removeEventListener('resize', size); return; }
      SAVER.raf = requestAnimationFrame(frame);
      if(ts - last < (mob ? 40 : 24)) return; last = ts;
      var t = (ts - t0)*.001;
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
      var g = ctx.createRadialGradient(W*.5, H*.55, 0, W*.5, H*.55, Math.max(W, H)*.7); g.addColorStop(0, 'hsla('+(hue0+20)+',60%,10%,1)'); g.addColorStop(1, '#000'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      ctx.lineCap = 'round'; ctx.globalCompositeOperation = 'lighter';
      var hue = hue0 + Math.sin(t*.05)*30;
      for(var k = 0; k < strands.length; k++){
        var s = strands[k];
        var nx = s.x/W*2.2, ny = s.y/H*2.2;
        var ang = Math.sin(nx*1.7 + t*.35 + s.ph*.2)*1.1 + Math.cos(ny*1.4 - t*.27)*1.1 + Math.sin((nx+ny)*.9 + t*.18)*.6 - 1.2;
        var bend = Math.sin(t*.9 + s.ph)*.35;
        var dx = Math.cos(ang), dy = Math.sin(ang), L = s.len*(1 + .18*Math.sin(t*.7 + s.ph));
        var mx = s.x + dx*L*.5 + -dy*L*bend, my = s.y + dy*L*.5 + dx*L*bend, ex = s.x + dx*L, ey = s.y + dy*L;
        var a = .22 + .3*(.5 + .5*Math.sin(t*.6 + s.ph*1.3));
        ctx.strokeStyle = 'hsla('+(hue + s.h)+',85%,68%,'+a+')'; ctx.lineWidth = s.w;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.quadraticCurveTo(mx, my, ex, ey); ctx.stroke();
        if(!mob){ ctx.strokeStyle = 'hsla('+(hue + s.h)+',90%,80%,'+(a*.35)+')'; ctx.lineWidth = s.w*3.2; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.quadraticCurveTo(mx, my, ex, ey); ctx.stroke(); }
      }
      ctx.globalCompositeOperation = 'source-over';
    };
    SAVER.raf = requestAnimationFrame(frame);
  }
  function saverStop(){ SAVER.on = false; cancelAnimationFrame(SAVER.raf); var cv = $('#saver'); if(cv){ cv.removeAttribute('data-run'); cv.removeAttribute('data-kind'); } }
  function wake(){ if(!sleepEl.hidden){ sleepEl.hidden = true; saverStop(); var g = greeting(); toast(g.t, g.s, g.i); } }
  $$('[data-power]', pw).forEach(function(b){ b.addEventListener('click', function(){
    var act = b.getAttribute('data-power'); pw.hidden = true;
    if(act === 'restart') restart();
    if(act === 'logout') loginScreen();
    if(act === 'sleep'){ sleepEl.hidden = false; tick(); saverStart(); }
    if(act === 'off') powerOff();
  }); });
  sleepEl.addEventListener('click', wake);
  $('.off-btn', offEl).addEventListener('click', function(e){ e.stopPropagation(); powerOn(); });

/* tigOS core app.js, part 21: global open handler. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- global open handler ---------------- */
  root.addEventListener('click', function(e){
    var t = e.target.closest('[data-open]'); if(!t) return;
    if(t.closest('#tgMenu')){ menu.hidden = true; mbLogo.classList.remove('on'); }
    var id = t.getAttribute('data-open'), cur = WM.wins[id], top = topWin();
    if(t.classList.contains('dk') && cur && !cur.min && top === cur){ minimize(cur); return; }   /* dock click on the front app tucks it away */
    open(id, { from:t });
  });

/* tigOS core app.js, part 22: keyboard. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- keyboard ---------------- */
  document.addEventListener('keydown', function(e){
    if(!sleepEl.hidden){ wake(); return; }
    if(!offEl.hidden) return;
    if(!loginEl.hidden && !e.target.closest('#loginIn')) return;
    var meta = e.metaKey || e.ctrlKey;
    if(meta && (e.key === 'k' || e.key === 'K')){ e.preventDefault(); spot.hidden ? spotOpen() : spotClose(); return; }
    if(e.key === 'Escape'){
      var fsw = $('.win.fs'); if(fsw && WM.wins[fsw.dataset.app]){ gameFs(WM.wins[fsw.dataset.app], false); return; }
      if(!lb.hidden){ lb.hidden = true; return; }
      if(!spot.hidden){ spotClose(); return; }
      if(!menu.hidden){ menu.hidden = true; mbLogo.classList.remove('on'); return; }
      if(!calPop.hidden){ calToggle(false); return; }
      if(tourEl){ tourEnd(); return; }
      var eg = $('.egg:not([hidden])'); if(eg){ eg.hidden = true; return; }
    }
    if(meta && (e.key === 'w' || e.key === 'W')){ var t = topWin(); if(t){ e.preventDefault(); close(t); } }
    if(!meta && !e.altKey && spot.hidden && !e.target.closest('input,textarea') && !$('.win.focus[data-app="games"]') && /^[1-9]$/.test(e.key)){ var nth = dockList()[+e.key-1]; if(nth) open(nth); }   /* 1 to 9: the Dock's apps in their current order */
  });

/* tigOS core app.js, part 23: tour. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- tour ---------------- */
  var TOUR = [
    { sel:'#dock', t:'The Dock', s:'Every app lives here. Click to open, click again to bring it forward. Press 1\u20137 as shortcuts.', sm:'Every app lives here. Tap one to open it.' },
    { sel:'#mbSearch', t:'Spotlight search', s:'\u2318K (or Ctrl+K) searches projects, roles and skills from anywhere.', sm:'Tap to search projects, roles and skills.' },
    { sel:'[data-dock="resume"]', t:'The one-pager', s:'The full PDF resume, previewed inline and downloadable in one click.' },
    { sel:'#mbWx', t:'Live weather', s:'Current conditions for the city in the menubar. Hover for the next three days.', sm:'Current conditions for the chosen city. Tap for the next three days.' },
    { sel:'#mbLoc', alt:'#mbClock', t:'Pick a city', s:'New York is home, but the clock and weather can follow you: Seattle, Austin, Tokyo\u2026', sm:'Tap the clock. New York is home, but the time and weather can follow you: Seattle, Austin, Tokyo\u2026' },
    { sel:'#mbPower', t:'Power', s:'Sleep, restart, or shut tigOS down. It will come back when you ask.' },
    { sel:'#mbLogo', t:'tigOS menu', s:'Settings (light mode, accent, dock), the tour, and the terminal. Yes, there is a terminal.', sm:'Settings (light mode, accent, text size), the tour, and the terminal. Yes, there is a terminal.', ph:'Settings (light mode, accent, text size) and this tour.' }
  ];
  var tourEl = null;
  function tourEnd(){ if(tourEl){ tourEl.remove(); tourEl = null; } root.classList.remove('touring'); }
  function tourStart(){ if(typeof closePops === 'function') closePops(); if(!spot.hidden) spotClose(); root.classList.add('touring'); tour(0); }
  function tour(i){
    if(tourEl){ tourEl.remove(); tourEl = null; }
    var step = TOUR[i]; if(!step){ tourEnd(); return; }
    var vis = function(el){ return el && el.getClientRects().length > 0; };
    var target = $(step.sel); if(!vis(target) && step.alt) target = $(step.alt); if(!vis(target)) return tour(i+1);
    var r = target.getBoundingClientRect(), rr = root.getBoundingClientRect(), mob = isMobile();
    tourEl = document.createElement('div'); tourEl.className = 'tour-tip';
    tourEl.innerHTML = '<b>'+step.t+'</b>'+((isPhone() && step.ph) || (mob && step.sm) || step.s)+'<div class="row"><button type="button" class="skip">Skip</button><button type="button" class="go">'+(i === TOUR.length-1 ? 'Done' : 'Next')+'</button></div>';
    root.appendChild(tourEl);
    var tw = tourEl.offsetWidth, th = tourEl.offsetHeight;
    var cx = r.left - rr.left + r.width/2, below = r.top - rr.top < rr.height/2;
    tourEl.style.left = Math.max(10, Math.min(rr.width - tw - 10, cx - tw/2))+'px';
    tourEl.style.top = Math.max(8, Math.min(rr.height - th - 8, below ? (r.bottom - rr.top + 12) : (r.top - rr.top - th - 12)))+'px';
    $('.skip', tourEl).addEventListener('click', tourEnd);
    $('.go', tourEl).addEventListener('click', function(){ tour(i+1); });
  }

/* tigOS core app.js, part 24: ios safari share. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- iOS Safari / share-sheet bars: measure how much of our bottom edge is actually visible ---------------- */
  (function(){
    if(!('IntersectionObserver' in window)) return;
    var PH = 200, probe = document.createElement('div'); probe.style.cssText = 'position:absolute;left:0;right:0;bottom:0;height:'+PH+'px;pointer-events:none;visibility:hidden;'; root.appendChild(probe);
    var apply = function(hidden){ var lift = Math.max(0, Math.min(150, Math.round(hidden))); root.style.setProperty('--lift', lift+'px'); root.classList.toggle('lifted', lift > 0); };
    try {
      var th = []; for(var i = 0; i <= 40; i++) th.push(i/40);
      var io = new IntersectionObserver(function(es){ var e = es[es.length-1]; if(!e) return; var b = e.boundingClientRect, r = e.intersectionRect;
        if(e.intersectionRatio > 0 && r.top > b.top + 1){ apply(0); return; }              // our top edge is what is clipped, not the bottom
        if(b.height <= 0 || b.top >= (window.innerHeight || 1e9) + 1){ return; }             // probe sits below our own viewport (not the case in practice)
        apply(b.height - r.height);                                                          // 0 when fully visible; PH when the whole strip is under the browser bar
      }, { threshold:th });
      io.observe(probe);
    } catch(e){}
    if(window.visualViewport){ var vv = window.visualViewport, onvv = function(){ var gap = Math.round(window.innerHeight - vv.height - vv.offsetTop); if(gap > 0 && gap < 200) apply(Math.max(gap, parseInt(root.style.getPropertyValue('--lift')) || 0)); }; vv.addEventListener('resize', onvv); onvv(); }
  })();

/* tigOS core app.js, part 25: live wallpaper. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- live wallpaper: a WebGL aurora with depth. Three layers of noise drift at different speeds and slide with the cursor at
     different rates (far layer barely, near layer most), so the wallpaper reads as deep rather than flat. It sits under the CSS orbs, renders
     at half resolution at 30 fps, and pauses when a game is full screen, the screen is asleep, the tab is hidden, or motion is reduced.
     The CSS gradient stays underneath as the fallback (Settings > Wallpaper > Still, or no WebGL). ---------------- */
  var WALL = { gl:null, cv:null, on:false, raf:0, last:0, t0:0, px:0, py:0, tx:0, ty:0 };
  var WALL_FRAG = [
    'precision mediump float; uniform vec2 R; uniform float T; uniform vec2 P; uniform vec3 B0, B1, C0, C1, C2, C3;',
    'float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
    'float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3. - 2.*f); return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y); }',
    'float fbm(vec2 p){ float v = 0., a = .5; for(int i = 0; i < 5; i++){ v += a*noise(p); p = p*2.03 + vec2(1.7, 9.2); a *= .5; } return v; }',
    'void main(){',
    '  vec2 uv = gl_FragCoord.xy / R; vec2 q = vec2(uv.x * R.x / R.y, uv.y);',
    '  vec3 c = mix(B0, B1, uv.x*.6 + (1. - uv.y)*.4);',           /* the base gradient (Chase: #251639 -> #151b36, the CSS base) */
    '  float far = fbm(q*1.5 + P*.03 + vec2(T*.018, T*.012));',
    '  float mid = fbm(q*2.4 - P*.08 + vec2(-T*.026, T*.02));',
    '  float near = fbm(q*3.8 + P*.17 + vec2(T*.03, -T*.024));',
    '  c += C0 * .52 * smoothstep(.30, .78, far) * (1. - uv.x*1.15) * (uv.y*.7 + .3);',                  /* orange, top left */
    '  c += C1 * .58 * smoothstep(.30, .78, mid) * (uv.x*.75 + .25) * (1. - uv.y*1.1);',                  /* violet, bottom right */
    '  c += C2 * .30 * smoothstep(.36, .82, near) * max(0., 1. - abs(uv.x - .55)*1.7) * max(0., 1. - abs(uv.y - .5)*1.7);', /* pink, centre */
    '  c += C3 * .26 * smoothstep(.38, .84, mid) * uv.x * uv.y;',                            /* blue, top right */
    '  c += (hash(gl_FragCoord.xy + T) - .5) * .012;',                                                     /* grain against banding */
    '  gl_FragColor = vec4(c, 1.);',
    '}'].join('\n');
  function wallInit(){
    var cv = $('#wallgl'); if(!cv || WALL.gl !== null) return;
    var gl = null; try { gl = cv.getContext('webgl', { antialias:false, alpha:false, depth:false, powerPreference:'low-power' }); } catch(e){}
    if(!gl){ WALL.gl = false; return; }
    /* a software renderer (SwiftShader, llvmpipe: no GPU, or a headless browser) would spend the CPU the desktop needs; fall back to the CSS gradient. ?gl=1 forces it on for testing */
    var dbg = gl.getExtension('WEBGL_debug_renderer_info'), renderer = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : '';
    if(/swiftshader|llvmpipe|softpipe|software/i.test(renderer) && !/[?&]gl=1/.test(location.search)){ WALL.gl = false; WALL.soft = renderer; cv.setAttribute('data-soft', '1'); return; }
    var mk = function(type, src){ var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if(!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    try {
      var prog = gl.createProgram();
      gl.attachShader(prog, mk(gl.VERTEX_SHADER, 'attribute vec2 a; void main(){ gl_Position = vec4(a, 0., 1.); }'));
      gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, WALL_FRAG)); gl.linkProgram(prog);
      if(!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
      gl.useProgram(prog);
      var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var a = gl.getAttribLocation(prog, 'a'); gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
      WALL.u = { R:gl.getUniformLocation(prog, 'R'), T:gl.getUniformLocation(prog, 'T'), P:gl.getUniformLocation(prog, 'P') }; ['B0', 'B1', 'C0', 'C1', 'C2', 'C3'].forEach(function(k){ WALL.u[k] = gl.getUniformLocation(prog, k); });
    } catch(e){ WALL.gl = false; return; }
    WALL.gl = gl; WALL.cv = cv; WALL.t0 = performance.now();
    document.addEventListener('pointermove', function(e){ if(e.pointerType === 'touch') return; WALL.tx = (e.clientX/innerWidth - .5)*2; WALL.ty = (e.clientY/innerHeight - .5)*-2; }, { passive:true });
  }
  /* one palette per user: Chase's aurora, Ubuntu aubergine and orange for GreggyD, pinks for Ariel. Colours are linear-ish rgb 0..1 */
  var WALL_PALS = {
    chase:   { B0:[.145, .086, .224], B1:[.082, .106, .212], C0:[1, .59, .27], C1:[.53, .41, 1], C2:[1, .35, .59], C3:[.35, .75, 1] },
    greggyd: { B0:[.19, .0, .13], B1:[.10, .0, .07], C0:[.95, .36, .14], C1:[.55, .15, .48], C2:[.91, .33, .13], C3:[.98, .66, .16] },
    ariel:   { B0:[.24, .05, .16], B1:[.14, .03, .11], C0:[1, .32, .58], C1:[1, .6, .82], C2:[1, .2, .45], C3:[.85, .55, 1] }
  };
  function wallPal(){ return WALL_PALS[USER.name] || WALL_PALS.chase; }
  function wallWants(){ return PREF.wall !== 'still' && PREF.motion !== 'off' && !document.hidden && (!sleepEl || sleepEl.hidden) && !root.classList.contains('gaming'); }
  function wallApply(){
    if(WALL.gl === null) wallInit(); if(!WALL.gl) return;
    WALL.cv.classList.toggle('on', PREF.wall !== 'still' && PREF.motion !== 'off');
    var want = wallWants();
    if(want && !WALL.on){ WALL.on = true; WALL.raf = requestAnimationFrame(wallFrame); }
    if(!want && WALL.on){ WALL.on = false; cancelAnimationFrame(WALL.raf); }
  }
  function wallFrame(ts){
    if(!WALL.on) return; WALL.raf = requestAnimationFrame(wallFrame);
    if(ts - WALL.last < 33) return; WALL.last = ts;
    var gl = WALL.gl, cv = WALL.cv, w = Math.max(2, (cv.clientWidth/2) | 0), h = Math.max(2, (cv.clientHeight/2) | 0);
    if(cv.width !== w || cv.height !== h){ cv.width = w; cv.height = h; gl.viewport(0, 0, w, h); }
    WALL.px += (WALL.tx - WALL.px)*.04; WALL.py += (WALL.ty - WALL.py)*.04;
    gl.uniform2f(WALL.u.R, w, h); gl.uniform1f(WALL.u.T, (ts - WALL.t0)*.001); gl.uniform2f(WALL.u.P, WALL.px, WALL.py);
    var pal = wallPal(); if(WALL.palName !== USER.name){ WALL.palName = USER.name; Object.keys(pal).forEach(function(k){ gl.uniform3fv(WALL.u[k], pal[k]); }); cv.setAttribute('data-pal', USER.name); }
    gl.drawArrays(gl.TRIANGLES, 0, 3); WALL.frames = (WALL.frames || 0) + 1; if((WALL.frames & 7) === 1) cv.setAttribute('data-frames', WALL.frames);
  }
  document.addEventListener('visibilitychange', wallApply);
  new MutationObserver(wallApply).observe(root, { attributes:true, attributeFilter:['class'] });
  new MutationObserver(wallApply).observe(sleepEl, { attributes:true, attributeFilter:['hidden'] });
  wallApply();
/* tigOS core app.js, part 26: screensavers. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- screensavers. Drift (20-power.js, driftStart) was the only one; these join it. saverStart(kind) is the one entry point:
     the power menu and `sleep` use the chosen default (Settings > Screensaver), `screensaver <name>` starts a specific one, and an idle timer
     (Settings > Start after) starts it on its own. Any key, click or real mouse movement wakes. ---------------- */
  var PAL = ['#ff8a00', '#ffd166', '#63e6be', '#8cc7ff', '#ff7ab6', '#a78bfa'];
  var SAVERS = {
    drift: { name:'Drift', sub:'luminous strands that sway like kelp' },
    warp: { name:'Warp', sub:'a starfield at speed',
      init:function(W, H){ var s = []; for(var i = 0; i < (isMobile() ? 220 : 520); i++) s.push({ x:(Math.random()-.5)*2, y:(Math.random()-.5)*2, z:Math.random()*.95 + .05, c:PAL[i % PAL.length] }); return { stars:s }; },
      draw:function(c, S, t, dt, W, H){
        c.fillStyle = 'rgba(4,4,10,.55)'; c.fillRect(0, 0, W, H);
        var sp = .32 + .28*(.5 + .5*Math.sin(t*.35)), cx = W/2, cy = H/2, sc = Math.max(W, H)*.5;
        c.lineCap = 'round';
        for(var i = 0; i < S.stars.length; i++){
          var s = S.stars[i], z0 = s.z; s.z -= dt*sp; if(s.z <= .02){ s.x = (Math.random()-.5)*2; s.y = (Math.random()-.5)*2; s.z = 1; z0 = 1; }
          var x0 = cx + s.x/z0*sc, y0 = cy + s.y/z0*sc, x1 = cx + s.x/s.z*sc, y1 = cy + s.y/s.z*sc;
          if(x1 < -20 || x1 > W+20 || y1 < -20 || y1 > H+20) continue;
          c.strokeStyle = s.c; c.globalAlpha = Math.min(1, (1 - s.z)*1.3); c.lineWidth = (1 - s.z)*3 + .5;
          c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
        }
        c.globalAlpha = 1;
      } },
    bounce: { name:'Bounce', sub:'the logo, bouncing. It changes colour on every wall and celebrates a corner',
      init:function(W, H){ var m = isMobile(), w = m ? 132 : 220, h = m ? 78 : 130; return { x:Math.random()*(W-w), y:Math.random()*(H-h), w:w, h:h, vx:(m ? 110 : 170)*(Math.random() < .5 ? -1 : 1), vy:(m ? 90 : 135)*(Math.random() < .5 ? -1 : 1), ci:0, corner:0, corners:0, bits:[] }; },
      draw:function(c, S, t, dt, W, H){
        c.fillStyle = '#000'; c.fillRect(0, 0, W, H);
        S.x += S.vx*dt; S.y += S.vy*dt; var hx = false, hy = false;
        if(S.x <= 0){ S.x = 0; S.vx = Math.abs(S.vx); hx = true; } if(S.x + S.w >= W){ S.x = W - S.w; S.vx = -Math.abs(S.vx); hx = true; }
        if(S.y <= 0){ S.y = 0; S.vy = Math.abs(S.vy); hy = true; } if(S.y + S.h >= H){ S.y = H - S.h; S.vy = -Math.abs(S.vy); hy = true; }
        if(hx || hy){ S.ci = (S.ci + 1) % PAL.length; }
        if(hx && hy){ S.corner = 1.8; S.corners++; for(var i = 0; i < 90; i++) S.bits.push({ x:S.x + S.w/2, y:S.y + S.h/2, vx:(Math.random()-.5)*640, vy:(Math.random()-.9)*640, c:PAL[i % PAL.length], l:1 + Math.random() }); }
        var col = PAL[S.ci], g = c.createLinearGradient(S.x, S.y, S.x + S.w, S.y + S.h); g.addColorStop(0, col); g.addColorStop(1, '#ffffff');
        c.save(); c.shadowColor = col; c.shadowBlur = 40; c.fillStyle = g; c.beginPath(); var r = S.h*.22; c.moveTo(S.x + r, S.y); c.arcTo(S.x + S.w, S.y, S.x + S.w, S.y + S.h, r); c.arcTo(S.x + S.w, S.y + S.h, S.x, S.y + S.h, r); c.arcTo(S.x, S.y + S.h, S.x, S.y, r); c.arcTo(S.x, S.y, S.x + S.w, S.y, r); c.closePath(); c.fill(); c.restore();
        c.fillStyle = '#0b0b10'; c.font = '800 '+Math.round(S.h*.42)+'px -apple-system, BlinkMacSystemFont, Inter, Helvetica, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('tigOS', S.x + S.w/2, S.y + S.h/2 + 2);
        for(var k = S.bits.length - 1; k >= 0; k--){ var b = S.bits[k]; b.l -= dt; if(b.l <= 0){ S.bits.splice(k, 1); continue; } b.vy += 900*dt; b.x += b.vx*dt; b.y += b.vy*dt; c.fillStyle = b.c; c.globalAlpha = Math.min(1, b.l); c.fillRect(b.x, b.y, 6, 6); }
        c.globalAlpha = 1;
        if(S.corner > 0){ S.corner -= dt; c.fillStyle = 'rgba(255,255,255,'+Math.min(1, S.corner)+')'; c.font = '800 '+Math.round(H*.09)+'px -apple-system, BlinkMacSystemFont, Inter, Helvetica, sans-serif'; c.fillText('CORNER!', W/2, H*.5); }
        if(S.corners){ c.fillStyle = 'rgba(255,255,255,.35)'; c.font = '600 13px ui-monospace, Menlo, monospace'; c.textAlign = 'right'; c.fillText('corners: '+S.corners, W - 18, 22); }
      } },
    matrix: { name:'Matrix', sub:'glyph rain. Read the columns',
      init:function(W, H){ var cw = isMobile() ? 14 : 18, n = Math.ceil(W/cw), cols = [], words = ['HIRE CHASE', 'TIGOS', 'MARKETING', 'CLEAR', 'CHASETIGER.COM', 'GTM', 'GROWTH'];
        for(var i = 0; i < n; i++) cols.push({ y:Math.random()*-H, sp:(isMobile() ? 120 : 160) + Math.random()*260, k:0, word:(i % 7 === 3) ? words[Math.floor(Math.random()*words.length)] : null, wi:0, acc:0 });
        return { cw:cw, cols:cols, glyphs:'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789TIGOS<>/*+=' }; },
      draw:function(c, S, t, dt, W, H){
        c.fillStyle = 'rgba(0,0,0,.16)'; c.fillRect(0, 0, W, H);
        c.font = '600 '+Math.round(S.cw*.9)+'px ui-monospace, Menlo, Consolas, monospace'; c.textAlign = 'center'; c.textBaseline = 'top';
        for(var i = 0; i < S.cols.length; i++){
          var col = S.cols[i]; col.acc += col.sp*dt; if(col.acc < S.cw) continue; col.acc = 0; col.y += S.cw;
          if(col.y > H + S.cw*4){ col.y = -S.cw*Math.floor(Math.random()*30); col.wi = 0; continue; }
          var ch = col.word ? col.word[col.wi++ % col.word.length] : S.glyphs[Math.floor(Math.random()*S.glyphs.length)];
          var x = i*S.cw + S.cw/2;
          c.fillStyle = col.word ? '#ffd166' : '#b8ffcf'; c.fillText(ch, x, col.y);
          c.fillStyle = col.word ? 'rgba(255,138,0,.85)' : 'rgba(40,200,64,.85)'; c.fillText(ch, x, col.y - S.cw);
        }
      } }
  };
  function saverStart(kind){
    var cv = $('#saver'); if(!cv || SAVER.on) return;
    kind = kind || PREF.saver || 'drift'; if(kind === 'random' || !SAVERS[kind]){ var ks = Object.keys(SAVERS); kind = ks[Math.floor(Math.random()*ks.length)]; }
    cv.setAttribute('data-kind', kind);
    if(kind === 'drift'){ driftStart(); return; }
    SAVER.on = true; cv.setAttribute('data-run', '1');
    var ctx = cv.getContext('2d'), W, H, S, sv = SAVERS[kind];
    var size = function(){ W = cv.width = root.clientWidth; H = cv.height = root.clientHeight; S = sv.init(W, H); ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H); };
    size(); window.addEventListener('resize', size);
    var last = 0, t0 = performance.now();
    var frame = function(ts){
      if(!SAVER.on){ window.removeEventListener('resize', size); return; }
      SAVER.raf = requestAnimationFrame(frame);
      if(ts - last < (isMobile() ? 40 : 16)) return; var dt = Math.min(.05, (ts - (last || ts))*.001); last = ts;
      sv.draw(ctx, S, (ts - t0)*.001, dt, W, H);
    };
    SAVER.raf = requestAnimationFrame(frame);
  }
  /* idle: no key, click, wheel or mouse movement for Settings > Start after minutes. Never while a game is open, on the login or off screens, or in a hidden tab. */
  var IDLE = { last:performance.now(), shown:0 };
  ['pointermove', 'pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function(ev){ document.addEventListener(ev, function(){ IDLE.last = performance.now(); }, { passive:true, capture:true }); });
  setInterval(function(){
    var m = parseFloat(PREF.idle); if(!(m > 0) || performance.now() - IDLE.last < m*60000) return;
    if(!sleepEl.hidden || !offEl.hidden || !loginEl.hidden || document.hidden || root.classList.contains('booting') || root.classList.contains('gaming') || $('.win[data-app="games"]')) return;
    sleepEl.hidden = false; tick(); saverStart(); IDLE.last = performance.now();
  }, 2000);
  new MutationObserver(function(){ if(!sleepEl.hidden) IDLE.shown = performance.now(); }).observe(sleepEl, { attributes:true, attributeFilter:['hidden'] });
  sleepEl.addEventListener('pointermove', function(e){ if(e.pointerType !== 'touch' && performance.now() - IDLE.shown > 1500) wake(); });
/* tigOS core app.js, part 27: context menus. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- context menus ----------------
     One engine for every right-click (a two-finger click, a control-click, or a long press on a phone). ctxShow(items, x, y, o) draws a
     macOS-style menu at a point in desktop coordinates, or above / beside a dock icon, and keeps it inside the desktop (which is the whole
     iframe when the site is embedded). It runs from the mouse (hover opens submenus, press-drag-release picks an item), the keyboard
     (arrows, Return, Escape, a letter jumps) or a finger. An item is
       { t:label, i:icon, k:shortcut hint (hidden on a phone), note:a quiet aside, on:checked, dis:disabled, fn:action, sub:[items] or a function returning them, dot:colour, id:test hook, danger:red }
     '-' draws a separator, { h:'Label' } a section heading, { tags:current, fn:function(colour) } the row of colour tags. Falsy entries are
     skipped, so a menu reads as a list of conditions. What goes in each menu lives in 27-menus.js; the desktop and dock behind it in
     27-desktop.js and 27-dock-edit.js. The browser keeps its own menu wherever it is the useful one: text, links and everything inside an app window. */
  var CTX = { stack:[], maxB:0, touch:false, held:false, moved:false, x0:0, y0:0, swallow:false, lp:null, touchT:0, last:null, onClose:null, src:null, cls:'', hoverT:0, vw:0 };
  var TAGS = [['red', '#ff5f57', 'Red'], ['orange', '#ff9f0a', 'Orange'], ['yellow', '#ffd60a', 'Yellow'], ['green', '#32d74b', 'Green'], ['blue', '#0a84ff', 'Blue'], ['purple', '#bf5af2', 'Purple'], ['gray', '#98989d', 'Gray']];
  function tagHex(t){ for(var i = 0; i < TAGS.length; i++) if(TAGS[i][0] === t) return TAGS[i][1]; return ''; }
  var CTX_CHECK = '<svg class="cx" viewBox="0 0 12 12"><path d="M2.4 6.5l2.4 2.4 4.8-5.5"/></svg>', CTX_MORE = '<svg class="cv" viewBox="0 0 12 12"><path d="M4.5 2.5L8 6l-3.5 3.5"/></svg>';
  function ctxSlug(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
  function ctxIsItem(it){ return it && typeof it === 'object' && !it.h && !('tags' in it); }
  /* drop falsy entries, doubled and dangling separators; a heading after other items gets its separator like a macOS section */
  function ctxClean(items){
    var out = [];
    (items || []).forEach(function(it){
      if(!it) return;
      if(it === '-'){ if(out.length && out[out.length-1] !== '-') out.push('-'); return; }
      if(it.h && out.length && out[out.length-1] !== '-') out.push('-');
      out.push(it);
    });
    while(out.length && out[out.length-1] === '-') out.pop();
    return out;
  }
  function ctxBuild(items, level){
    var m = document.createElement('div'), ck = items.some(function(it){ return ctxIsItem(it) && 'on' in it; }), hasIc = items.some(function(it){ return ctxIsItem(it) && (it.i || it.dot); });
    m.className = 'menu ctx'+(level ? ' sub' : '')+(ck ? ' has-ck' : '');
    m.setAttribute('role', 'menu');
    m.innerHTML = items.map(function(it, i){
      if(it === '-') return '<hr>';
      if(it.h) return '<div class="ch" role="presentation">'+esc(it.h)+'</div>';
      if('tags' in it) return '<div class="ctags" role="group" aria-label="Tags" data-i="'+i+'">'+TAGS.map(function(t){ return '<button type="button" class="ctag'+(it.tags === t[0] ? ' on' : '')+'" data-tag="'+t[0]+'" style="--tc:'+t[1]+'" aria-label="'+t[2]+'" aria-pressed="'+(it.tags === t[0] ? 'true' : 'false')+'" title="'+t[2]+'"></button>'; }).join('')+'</div>';
      var chk = 'on' in it;
      return '<button type="button" class="ci'+(it.dis ? ' dis' : '')+(it.sub ? ' has-sub' : '')+(it.danger ? ' danger' : '')+'" role="'+(chk ? 'menuitemcheckbox' : 'menuitem')+'" data-i="'+i+'" data-ctx="'+esc(it.id || ctxSlug(it.t))+'"'+
        (chk ? ' aria-checked="'+(it.on ? 'true' : 'false')+'"' : '')+(it.dis ? ' aria-disabled="true"' : '')+(it.sub ? ' aria-haspopup="menu" aria-expanded="false"' : '')+'>'+
        (ck ? '<span class="cc">'+(it.on ? CTX_CHECK : '')+'</span>' : '')+
        (it.dot ? '<span class="cdot" style="background:'+it.dot+'"></span>' : it.i ? ic(it.i) : hasIc ? '<span class="ci0"></span>' : '')+
        '<span class="cl">'+esc(it.t)+'</span>'+(it.k ? '<span class="kb">'+esc(it.k)+'</span>' : it.note ? '<span class="kb kn">'+esc(it.note)+'</span>' : '')+(it.sub ? CTX_MORE : '')+'</button>';
    }).join('');
    return m;
  }
  /* x, y are desktop (root) coordinates. A plain menu opens down and right of the pointer and slides up or flips left to stay on screen,
     the way macOS does; side:'top' | 'left' | 'right' hangs it off a dock icon; sub:true opens beside its parent row (or on its far side) */
  function ctxPlace(m, x, y, o){
    o = o || {};
    var W = root.clientWidth, H = root.clientHeight, M = 6;
    m.style.left = '0px'; m.style.top = '0px'; m.style.maxHeight = (H - 2*M)+'px';
    var mw = m.offsetWidth, mh = m.offsetHeight, l, t;
    if(o.side === 'top'){ l = x - mw/2; t = y - mh - 10; }
    else if(o.side === 'right'){ l = x + 12; t = y - mh/2; }
    else if(o.side === 'left'){ l = x - mw - 12; t = y - mh/2; }
    else if(o.sub){ l = x; t = y; if(l + mw > W - M) l = o.x2 - mw; }
    else if(o.at){ l = x; t = y; }
    else { l = x + 2; t = y + 2; if(l + mw > W - M) l = x - mw - 2; if(t + mh > H - M) t = H - M - mh; }
    var B = o.maxB > mh + M ? o.maxB : H - M;   /* a submenu of a menu hung over the bottom dock stays above the dock too */
    l = Math.max(M, Math.min(W - M - mw, l)); t = Math.max(M, Math.min(B - mh, t));
    m.style.left = Math.round(l)+'px'; m.style.top = Math.round(t)+'px';
  }
  function ctxOpen(){ return CTX.stack.length > 0; }
  function ctxShow(items, x, y, o){
    o = o || {};
    ctxClose(true);
    if(typeof closePops === 'function') closePops('ctx');
    if(!spot.hidden) spotClose();
    items = ctxClean(items); if(!items.length) return;
    var m = ctxBuild(items, 0); root.appendChild(m);
    CTX.stack = [{ el:m, items:items, sel:-1, parent:-1 }];
    ctxPlace(m, x, y, o); ctxWire(m, 0);
    CTX.onClose = o.onClose || null; CTX.src = o.src || null; CTX.cls = o.cls || ''; CTX.maxB = o.side === 'top' ? y - 4 : 0;
    if(CTX.src) CTX.src.classList.add('ctx-on');
    if(CTX.cls) root.classList.add(CTX.cls);
    root.classList.add('ctx-up');
    CTX.vw = root.clientWidth;
    return m;
  }
  function ctxClose(instant){
    clearTimeout(CTX.hoverT);
    if(!CTX.stack.length) return;
    CTX.stack.forEach(function(L){ var m = L.el; m.classList.add('out'); if(instant) m.remove(); else setTimeout(function(){ m.remove(); }, 150); });
    CTX.stack = []; CTX.held = false;
    if(CTX.src){ CTX.src.classList.remove('ctx-on'); CTX.src = null; }
    if(CTX.cls){ root.classList.remove(CTX.cls); CTX.cls = ''; }
    root.classList.remove('ctx-up');
    var f = CTX.onClose; CTX.onClose = null; if(f) f();
  }
  function ctxMark(level, i){
    var L = CTX.stack[level]; if(!L) return; L.sel = i;
    $$(':scope > .ci', L.el).forEach(function(b){ b.classList.toggle('on', +b.getAttribute('data-i') === i); });
  }
  function ctxTrim(n){
    while(CTX.stack.length > n){ var L = CTX.stack.pop(); L.el.remove(); }
    var P = CTX.stack[n-1]; if(P){ P.el.classList.remove('under'); $$('.ci.open', P.el).forEach(function(b){ b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }); }
  }
  function ctxSub(level, i){
    ctxTrim(level + 1);
    var L = CTX.stack[level], it = L && L.items[i]; if(!it || !it.sub || it.dis) return;
    var items = ctxClean(typeof it.sub === 'function' ? it.sub() : it.sub); if(!items.length) return;
    var drill = CTX.touch || isMobile();   /* a phone has no room beside a menu: the submenu takes its place, with a way back, like iOS */
    if(drill) items = [{ t:it.t, i:'back', id:'back', back:true }, '-'].concat(items);
    var m = ctxBuild(items, level + 1); root.appendChild(m);
    var b = $('.ci[data-i="'+i+'"]', L.el), br = b.getBoundingClientRect(), pr = L.el.getBoundingClientRect(), rr = root.getBoundingClientRect();
    if(drill){ m.classList.add('drill'); ctxPlace(m, pr.left - rr.left, pr.top - rr.top, { at:true, maxB:CTX.maxB }); L.el.classList.add('under'); }
    else ctxPlace(m, pr.right - rr.left - 4, br.top - rr.top - 6, { sub:true, x2:pr.left - rr.left + 4, maxB:CTX.maxB });
    CTX.stack.push({ el:m, items:items, sel:-1, parent:i });
    b.classList.add('open'); b.setAttribute('aria-expanded', 'true');
    ctxWire(m, level + 1);
  }
  /* the mouse: hovering a row highlights it, a submenu row opens its submenu after a beat, any other row closes an open one after a
     slightly longer beat (time enough to cut the corner into the submenu, macOS's forgiving diagonal) */
  function ctxHover(level, i){
    var L = CTX.stack[level]; if(!L) return;
    ctxMark(level, i); clearTimeout(CTX.hoverT);
    if(level > 0) { ctxMark(level - 1, L.parent); var pb = $('.ci[data-i="'+L.parent+'"]', CTX.stack[level-1].el); if(pb) pb.classList.add('open'); }
    var it = L.items[i], deeper = CTX.stack.length > level + 1;
    if(it.sub && !it.dis){ if(deeper && CTX.stack[level+1].parent === i){ ctxTrim(level + 2); return; } CTX.hoverT = setTimeout(function(){ if(CTX.stack[level] === L) ctxSub(level, i); }, deeper ? 160 : 70); }
    else if(deeper){ CTX.hoverT = setTimeout(function(){ if(CTX.stack[level] === L) ctxTrim(level + 1); }, 220); }
  }
  function ctxAct(level, i, kb){
    var L = CTX.stack[level], it = L && L.items[i]; if(!ctxIsItem(it) || it.dis) return;
    if(it.back){ var p = L.parent; ctxTrim(level); ctxMark(level - 1, p); return; }
    if(it.sub){ if(!(CTX.stack.length > level + 1 && CTX.stack[level+1].parent === i)) ctxSub(level, i); if(kb && CTX.stack[level+1]) ctxMark(level + 1, ctxNext(level + 1, -1, 1)); return; }   /* the keys land on its first row; a click just opens it */
    ctxClose();
    if(it.fn) it.fn();
  }
  function ctxWire(m, level){
    m.addEventListener('pointermove', function(e){
      if(e.pointerType === 'touch') return;   /* a finger sliding over a row is a scroll or a tap, not a hover */
      var b = e.target.closest('.ci'); if(!b || !m.contains(b)) return;
      var i = +b.getAttribute('data-i'), L = CTX.stack[level]; if(!L) return;
      if(L.sel !== i || (level > 0 && CTX.stack[level-1].sel !== L.parent)) ctxHover(level, i);
    });
    m.addEventListener('pointerleave', function(){ var L = CTX.stack[level]; if(L && CTX.stack.length === level + 1) ctxMark(level, -1); });
    m.addEventListener('click', function(e){
      var tg = e.target.closest('.ctag');
      if(tg){ var row = tg.closest('.ctags'), L = CTX.stack[level], it = L && L.items[+row.getAttribute('data-i')], v = tg.getAttribute('data-tag'); ctxClose(); if(it && it.fn) it.fn(v === it.tags ? '' : v); return; }
      var b = e.target.closest('.ci'); if(b) ctxAct(level, +b.getAttribute('data-i'));
    });
  }
  function ctxNext(level, from, dir){
    var L = CTX.stack[level]; if(!L) return -1; var n = L.items.length;
    for(var k = 1; k <= n; k++){ var j = ((from < 0 && dir < 0 ? n : from) + dir*k + n*4) % n, it = L.items[j]; if(ctxIsItem(it) && !it.dis) return j; }
    return -1;
  }
  /* the keyboard owns a menu while it is up: arrows move, right/left walk submenus, Return or Space picks, Escape backs out, a letter jumps */
  document.addEventListener('keydown', function(e){
    if(!CTX.stack.length) return;
    var lv = CTX.stack.length - 1, L = CTX.stack[lv], k = e.key;
    if(e.metaKey || e.ctrlKey){ ctxClose(); return; }
    e.preventDefault(); e.stopPropagation();
    if(k === 'Escape'){ if(lv){ var p = L.parent; ctxTrim(lv); ctxMark(lv - 1, p); } else ctxClose(); return; }
    if(k === 'ArrowDown' || k === 'ArrowUp'){ ctxMark(lv, ctxNext(lv, L.sel, k === 'ArrowDown' ? 1 : -1)); return; }
    if(k === 'ArrowRight'){ var it = L.items[L.sel]; if(it && it.sub && !it.dis){ ctxSub(lv, L.sel); ctxMark(lv + 1, ctxNext(lv + 1, -1, 1)); } return; }
    if(k === 'ArrowLeft' || (k === 'Backspace' && lv)){ if(lv){ var pp = L.parent; ctxTrim(lv); ctxMark(lv - 1, pp); } return; }
    if(k === 'Enter' || k === ' '){ if(L.sel >= 0) ctxAct(lv, L.sel, true); return; }
    if(k === 'Tab'){ ctxMark(lv, ctxNext(lv, L.sel, e.shiftKey ? -1 : 1)); return; }
    if(k.length === 1 && /\S/.test(k)){
      var n = L.items.length, low = k.toLowerCase();
      for(var s = 1; s <= n; s++){ var j = ((L.sel < 0 ? -1 : L.sel) + s + n) % n, x = L.items[j]; if(ctxIsItem(x) && !x.dis && String(x.t).toLowerCase().indexOf(low) === 0){ ctxMark(lv, j); break; } }
    }
  }, true);
  /* dismissal. A click outside closes the menu and goes no further (macOS: the first click only dismisses). CTX.swallow eats the one
     click that can follow the press which opened a menu (control-click, a long press), so a dock icon under a finger never also opens */
  document.addEventListener('pointerdown', function(e){
    CTX.swallow = false;
    if(!CTX.stack.length) return;
    if(e.target.closest && e.target.closest('.ctx')) return;
    ctxClose(); CTX.swallow = true;
  }, true);
  document.addEventListener('click', function(e){ if(CTX.swallow && e.isTrusted){ CTX.swallow = false; e.preventDefault(); e.stopPropagation(); } }, true);
  /* press, drag to an item, release: picks it, like holding the right button on a Mac. A release without moving leaves the menu up */
  document.addEventListener('pointermove', function(e){ if(CTX.held && !CTX.moved && Math.abs(e.clientX - CTX.x0) + Math.abs(e.clientY - CTX.y0) > 6) CTX.moved = true; }, true);
  document.addEventListener('pointerup', function(e){
    if(!CTX.held) return; CTX.held = false;
    if(!CTX.moved || !CTX.stack.length) return;
    var b = e.target.closest && e.target.closest('.ctx .ci');
    if(!b){ if(!(e.target.closest && e.target.closest('.ctx'))) ctxClose(); return; }
    var m = b.closest('.ctx'), lv = -1; CTX.stack.forEach(function(L, n){ if(L.el === m) lv = n; });
    var it = lv > -1 && CTX.stack[lv].items[+b.getAttribute('data-i')];
    if(it && !it.sub && !it.dis) ctxAct(lv, +b.getAttribute('data-i'));
  }, true);
  window.addEventListener('blur', function(){ ctxClose(); });
  window.addEventListener('resize', function(){ if(CTX.stack.length && root.clientWidth !== CTX.vw) ctxClose(true); });   /* a phone's browser bar sliding changes only the height: keep the menu */
  root.addEventListener('wheel', function(e){ if(CTX.stack.length && !(e.target.closest && e.target.closest('.ctx'))) ctxClose(); }, { passive:true });
  /* what was right-clicked. null = leave the browser's own menu; 'none' = no menu at all (the menubar, the lock and sleep screens) */
  function ctxTarget(t, touch){
    if(!t || !t.closest || !root.contains(t)) return null;
    if(t.closest('.ctx')) return { kind:'none' };
    var jw = t.closest('.win[data-app="jot"]');   /* Jot: its notes and its text get menus of their own; the name field keeps the browser's */
    if(jw && !t.closest('.jsheet-bg')){
      var jt = t.closest('.jot-text'); if(jt) return touch ? null : { kind:'jotdoc', el:jt };
      var ji = t.closest('.jot-it'); if(ji) return { kind:'jot', el:ji };
      if(t.closest('.jot-side') && !t.closest('button')) return { kind:'jotside', el:t.closest('.jot-side') };
    }
    if(t.closest('input, textarea, select, [contenteditable="true"]')) return null;
    if(t.closest('#login, #sleep, #off, #shutdown, #boot, .dlg-bg')) return touch ? null : { kind:'none' };
    if(t.closest('#spotlight, #lightbox, .egg, .tour-tip, .toast')) return null;
    var fw = t.closest('.fw');
    if(fw){ var fi = t.closest('.dicon'); return fi ? { kind:'icon', el:fi } : { kind:'fbg', el:fw }; }
    var da = t.closest('.den-app'); if(da) return { kind:'denapp', el:da };
    if(t.closest('.win-body')) return null;
    var bar = t.closest('.win-bar');
    if(bar){ if(touch || isMobile() || t.closest('a[href]')) return null; return { kind:'win', el:bar.closest('.win') }; }
    if(t.closest('.win')) return null;
    var dk = t.closest('#dock .dk');
    if(dk) return { kind:dk.classList.contains('trash') ? 'trash' : dk.tagName === 'A' ? 'link' : 'dock', el:dk };
    if(t.closest('#dock')) return isPhone() ? { kind:'none' } : { kind:'dockbg', el:$('#dock') };   /* a phone's dock is not edited, so the space beside its icons has no menu */
    var pet = t.closest('#pets .pet');
    if(pet) return touch ? null : { kind:'pet', el:pet };
    var di = t.closest('.dicon');
    if(di) return { kind:'icon', el:di };
    if(t.closest('a[href]')) return null;   /* a link in the welcome text keeps the browser's link menu */
    if(t.closest('#desktop')) return { kind:'desk', el:desk };
    if(t.closest('.menubar')) return touch || t.closest('a[href]') ? null : { kind:'none' };
    return null;
  }
  function dockSide(){ if(isMobile()) return 'bottom'; if(root.classList.contains('u-greggyd')) return 'left'; return PREF.dockpos === 'left' || PREF.dockpos === 'right' ? PREF.dockpos : 'bottom'; }
  /* build the menu for a target (27-menus.js) and show it at the pointer, or hung off the dock icon it belongs to */
  function ctxOpenAt(tg, x, y, o){
    o = o || {};
    var f = CTX_MENUS[tg.kind]; if(!f) return null;
    var rr = root.getBoundingClientRect(), lx = x - rr.left, ly = y - rr.top;
    var spec = f(tg, lx, ly, o); if(!spec || !spec.items) return null;
    var side = '', px = lx, py = ly;
    if(spec.anchor || spec.atDock){   /* atDock: the Dock's own menu, at the pointer along the dock but clear of it */
      var r = spec.anchor ? spec.anchor.getBoundingClientRect() : { left:x, top:y, width:0, height:0 }, d = $('#dock').getBoundingClientRect(), s = dockSide();
      if(s === 'left'){ side = 'right'; px = d.right - rr.left; py = r.top + r.height/2 - rr.top; }
      else if(s === 'right'){ side = 'left'; px = d.left - rr.left; py = r.top + r.height/2 - rr.top; }
      else { side = 'top'; px = r.left + r.width/2 - rr.left; py = d.top - rr.top; }
    }
    CTX.touch = !!o.touch;
    var m = ctxShow(spec.items, px, py, { side:side, src:spec.src || null, cls:spec.cls || '', onClose:spec.onClose });
    if(!m) return null;
    CTX.held = !!o.held; CTX.moved = false; CTX.x0 = x; CTX.y0 = y; CTX.swallow = true;
    return m;
  }
  root.addEventListener('contextmenu', function(e){
    var touchy = Date.now() - CTX.touchT < 1500, tg = ctxTarget(e.target, touchy);
    if(!tg) return;
    e.preventDefault();
    if(tg.kind === 'none') return;
    if(touchy){ if(CTX.lp) lpFire(); return; }   /* Android sends contextmenu for a long press; the long-press timer is the one path for touch, so just fire it now */
    ctxOpenAt(tg, e.clientX, e.clientY, { held:(e.buttons & 3) !== 0 });
  });
  /* touch: hold still for half a second. Moving more than 10px (a scroll, a drag), a second finger (a pinch) or lifting early cancels it */
  function lpCancel(){ if(CTX.lp){ clearTimeout(CTX.lp.t); if(CTX.lp.tg.el) CTX.lp.tg.el.classList.remove('lp'); CTX.lp = null; } }
  function lpFire(){
    var lp = CTX.lp; if(!lp) return; clearTimeout(lp.t); CTX.lp = null; if(lp.tg.el) lp.tg.el.classList.remove('lp');
    if(ctxOpenAt(lp.tg, lp.x, lp.y, { touch:true })){ try { if(navigator.vibrate) navigator.vibrate(10); } catch(_){} }
  }
  root.addEventListener('pointerdown', function(e){
    if(e.pointerType !== 'touch') return;
    CTX.touchT = Date.now();
    if(CTX.lp){ lpCancel(); return; }   /* a second finger: a pinch, not a press */
    if(!e.isPrimary) return;
    var tg = ctxTarget(e.target, true); if(!tg || tg.kind === 'none') return;
    CTX.lp = { id:e.pointerId, x:e.clientX, y:e.clientY, tg:tg, t:setTimeout(lpFire, 500) };
    if(tg.el && tg.kind !== 'desk') tg.el.classList.add('lp');
  }, true);
  root.addEventListener('pointermove', function(e){ if(CTX.lp && e.pointerId === CTX.lp.id && Math.abs(e.clientX - CTX.lp.x) + Math.abs(e.clientY - CTX.lp.y) > 10) lpCancel(); }, true);
  ['pointerup', 'pointercancel'].forEach(function(ev){ root.addEventListener(ev, function(e){ if(CTX.lp && e.pointerId === CTX.lp.id) lpCancel(); CTX.touchT = e.pointerType === 'touch' ? Date.now() : CTX.touchT; }, true); });
  /* a small macOS sheet for the questions that need one (Empty Trash). Return confirms, Escape cancels */
  function sheet(title, text, ok, fn){
    var old = $('.dlg-bg'); if(old) old.remove();
    ctxClose(true);
    var bg = document.createElement('div'); bg.className = 'dlg-bg';
    bg.innerHTML = '<div class="dlg" role="alertdialog" aria-modal="true" aria-label="'+esc(title)+'"><svg class="dlg-logo" viewBox="0 0 96 96"><use href="#tgLogo"/></svg><b>'+esc(title)+'</b><p>'+esc(text)+'</p><div class="dlg-row"><button type="button" data-no>Cancel</button><button type="button" class="ok" data-ok>'+esc(ok)+'</button></div></div>';
    root.appendChild(bg);
    var done = function(yes){ bg.classList.add('out'); setTimeout(function(){ bg.remove(); }, 160); if(yes) fn(); };
    $('[data-ok]', bg).addEventListener('click', function(){ done(true); });
    $('[data-no]', bg).addEventListener('click', function(){ done(false); });
    bg.tabIndex = -1;
    bg.addEventListener('pointerdown', function(e){ if(e.target === bg){ e.preventDefault(); var d = $('.dlg', bg); d.classList.remove('nope'); void d.offsetWidth; d.classList.add('nope'); } });   /* a click beside a sheet nudges it, like macOS, and keeps the keyboard on it */
    bg.addEventListener('keydown', function(e){ e.stopPropagation(); if(e.key === 'Escape'){ e.preventDefault(); done(false); } if(e.key === 'Enter' && !e.target.closest('[data-no]')){ e.preventDefault(); done(true); } });
    setTimeout(function(){ try { $('[data-ok]', bg).focus({ preventScroll:true }); } catch(e){} }, 20);
    return bg;
  }
/* tigOS core app.js, part 27: Den, the file browser. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- Den ----------------
     tigOS's Finder (a tiger keeps its things in a den). A sidebar of places (the Desktop, every note wherever it is, the apps, each
     folder, the Trash) beside that place's icons. The icons are the desktop's own (27-desktop.js): click to select, drag them onto a
     folder, a place in the sidebar, the desktop or the Trash, rename, Get Info and the same right-click menus. A folder opens in place,
     with Back and Forward. Den sits at the far left of the Dock, and the Trash in the Dock opens here, at the Trash. Phones have no Den. */
  var DEN = { loc:'', back:[], fwd:[], want:null, seen:null };
  function denOk(loc){ if(loc === '' || loc === '*notes' || loc === '*apps' || loc === 'trash') return true; var it = ditem(loc); return !!(it && it.kind === 'folder' && it.in !== 'trash'); }
  function denLabel(loc){ return loc === '' ? 'Desktop' : loc === '*notes' ? 'Notes' : loc === '*apps' ? 'Applications' : loc === 'trash' ? 'Trash' : (ditem(loc) || { name:'Desktop' }).name; }
  function denApps(){ return appsInstalled(); }
  /* open Den at a place, optionally with one item selected (Show in Den) */
  function denOpen(loc, sel){
    if(isPhone()) return null;
    loc = loc || ''; var w = WM.wins.den;
    if(!w){ DEN.want = loc; w = open('den'); if(!w) return null; }
    else { if(w.min) restore(w); focus(w); denGo(loc); }
    if(sel){ var e = $('.den-fw .dicon[data-id="'+sel+'"]', w.body); if(e){ dselOnly(e); try { e.scrollIntoView({ block:'nearest' }); } catch(x){} } }
    return w;
  }
  function denGo(loc, quiet){
    if(!denOk(loc)) loc = '';
    if(loc !== DEN.loc && !quiet){ DEN.back.push(DEN.loc); if(DEN.back.length > 40) DEN.back.shift(); DEN.fwd = []; }
    DEN.loc = loc; denDraw();
  }
  function denStep(dir){
    var from = dir < 0 ? DEN.back : DEN.fwd, to = dir < 0 ? DEN.fwd : DEN.back;
    while(from.length){ var l = from.pop(); if(denOk(l) && l !== DEN.loc){ to.push(DEN.loc); DEN.loc = l; break; } }
    denDraw();
  }
  RENDER.den = function(w){
    w.el.classList.add('den-win');
    w.tools.innerHTML = '<button type="button" data-den="back" aria-label="Back" title="Back">'+ic('back')+'</button><button type="button" data-den="fwd" aria-label="Forward" title="Forward">'+ic('fwd')+'</button>'+
      '<button type="button" data-den="folder" aria-label="New Folder" title="New Folder">'+ic('folder-plus')+'</button><button type="button" data-den="note" aria-label="New Note" title="New Note">'+ic('jot')+'</button>';
    w.body.innerHTML = '<div class="denw"><nav class="den-side" aria-label="Places"></nav><section class="den-main"></section></div>';
    $$('[data-den]', w.tools).forEach(function(b){ b.addEventListener('click', function(){
      var k = b.getAttribute('data-den'), L = DEN.loc;
      if(k === 'back') denStep(-1);
      if(k === 'fwd') denStep(1);
      if(k === 'folder' && L === ''){ DFOCUS = $('.den-fw', w.body) || DFOCUS; dnewFolder(null); }
      if(k === 'note') jotNewIn(L === '*notes' || !denOk(L) || L === 'trash' || L === '*apps' ? '' : L);
    }); });
    $('.den-side', w.body).addEventListener('click', function(e){ var b = e.target.closest('[data-loc]'); if(b) denGo(b.getAttribute('data-loc')); });
    /* Applications: click selects, a double-click (or a tap) opens, as in Finder */
    var main = $('.den-main', w.body);
    main.addEventListener('click', function(e){ if(e.target.closest('[data-den="empty"]')){ demptyAsk(); return; } var b = e.target.closest('.den-app'); $$('.den-app.sel', main).forEach(function(x){ if(x !== b) x.classList.remove('sel'); }); if(!b) return; b.classList.add('sel'); if(Date.now() - CTX.touchT < 900) open(b.getAttribute('data-app'), { from:b }); });
    main.addEventListener('dblclick', function(e){ var b = e.target.closest('.den-app'); if(b) open(b.getAttribute('data-app'), { from:b }); });
    main.addEventListener('keydown', function(e){ var b = e.target.closest && e.target.closest('.den-app'); if(b && e.key === 'Enter'){ e.preventDefault(); open(b.getAttribute('data-app'), { from:b }); } });
    DEN.loc = DEN.want != null ? DEN.want : ''; DEN.want = null;   /* a fresh window starts on the Desktop, unless it was opened somewhere (the Trash) */
    DEN.back = []; DEN.fwd = []; DEN.seen = null;
    denDraw();
  };
  function denDraw(){
    var w = WM.wins.den; if(!w) return;
    var side = $('.den-side', w.body), main = $('.den-main', w.body); if(!side || !main) return;
    if(!denOk(DEN.loc)) DEN.loc = '';
    var L = DEN.loc, folders = ditems('').filter(function(x){ return x.kind === 'folder'; }).sort(dcmp('name'));
    var row = function(loc, icon, label, tag){ return '<button type="button" class="'+(L === loc ? 'on' : '')+'" data-loc="'+esc(loc)+'"'+(L === loc ? ' aria-current="page"' : '')+'>'+ic(icon)+'<span>'+esc(label)+'</span>'+(tag ? '<i class="dtag" style="background:'+tagHex(tag)+'"></i>' : '')+'</button>'; };
    var ss = side.scrollTop;
    side.innerHTML = '<div class="den-sh">Favorites</div>'+row('', 'wall', 'Desktop')+row('*notes', 'jot', 'Notes')+row('*apps', 'grid', 'Applications')+
      (folders.length ? '<div class="den-sh">Folders</div>'+folders.map(function(f){ return row(f.id, 'folder', f.name, f.tag); }).join('') : '')+
      '<div class="den-sh">Locations</div>'+row('trash', dtrashed().length ? 'trash-full' : 'trash', 'Trash');
    side.scrollTop = ss;
    var st = main.scrollTop, had = DFOCUS && DFOCUS !== DLAYER && main.contains(DFOCUS), sel = dselIds(main), n, same = DEN.seen && DEN.seen.loc === L, snap = same ? fsnap(main) : null;
    if(L === '*apps'){
      var apps = denApps(); n = apps.length;
      main.innerHTML = '<div class="den-apps" role="list">'+apps.map(function(k){ return '<button type="button" class="den-app" role="listitem" data-app="'+k+'" aria-label="'+esc(APPS[k].title)+'">'+tileHTML(k)+'<span>'+esc(APPS[k].title)+'</span></button>'; }).join('')+'</div><div class="fw-foot">'+n+' apps</div>';
    } else {
      var list = (L === '' ? ditems('') : L === '*notes' ? jnotes() : L === 'trash' ? dtrashed() : dkids(L)).slice();
      list.sort(L === 'trash' ? function(a, b){ return (b.t2 || 0) - (a.t2 || 0); } : L === '*notes' ? function(a, b){ return (b.m || b.t) - (a.m || a.t); } : dcmp('name'));
      n = list.length;
      var empty = L === '' ? 'Nothing on the Desktop yet.' : L === '*notes' ? 'No notes yet. New Note starts one.' : null;
      var head = L !== 'trash' ? '' : '<div class="den-trh"><span class="tile trash">'+ic(n ? 'trash-full' : 'trash')+'</span><div class="den-trt"><b>Trash</b><span>'+(n ? (n === 1 ? '1 item' : n+' items')+' \u00b7 erased for good when you empty it' : 'Nothing in here')+'</span></div><button type="button" data-den="empty"'+(n ? '' : ' disabled')+'>Empty</button></div>';
      main.innerHTML = head+'<div class="fw den-fw'+(L === 'trash' ? ' trashw' : '')+'" data-folder="'+esc(L)+'">'+fgrid(list, L, empty, same ? DEN.seen.ids : null)+'<div class="fw-foot">'+(n === 1 ? '1 item' : n+' items')+'</div></div>';
      sel.forEach(function(s){ var e = $('.dicon[data-id="'+s+'"]', main); if(e) e.classList.add('sel'); });
      if(had) DFOCUS = $('.den-fw', main);   /* a redraw keeps the keyboard here */
      DEN.seen = { loc:L, ids:fseen(list) };
    }
    if(L === '*apps') DEN.seen = { loc:L, ids:{} };
    main.scrollTop = st;
    if(snap) fbye(snap, main, w.el);   /* whatever left this place bows out where it stood */
    var t = $('.win-title', w.el); if(t) t.innerHTML = ic('den')+esc(denLabel(L));
    w.el.setAttribute('aria-label', 'Den, '+denLabel(L));
    var tb = function(k){ return $('[data-den="'+k+'"]', w.tools); };
    tb('back').disabled = !DEN.back.some(denOk); tb('fwd').disabled = !DEN.fwd.some(denOk);
    tb('folder').hidden = L !== ''; tb('note').hidden = L === 'trash' || L === '*apps';
  }
/* tigOS core app.js, part 27: desktop items. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- desktop: icons, folders, the Trash, Get Info ----------------
     Saved per user on this device (localStorage, a cookie fallback for the embed): the desktop items (app aliases and folders, each on a
     grid cell counted from the top right, like macOS), what the desktop shows (icons, the welcome text, icon size, sort order), the dock
     layout (27-dock-edit.js) and the apps that open at login. A fresh visit has none of it: the clean hero, the dock as the launcher.
     An item is { id, kind:'app'|'folder'|'note', app, name, in:'' (desktop) | folder id | 'trash', c, r, t:added, tag, from, fc, fr }; a note
     (27-jot.js) adds m:modified and auto (named from its first line until renamed), and keeps its text in its own store. An app removed
     from Terminal (27-shell.js) waits in the Trash as an item with pkg:1, so Put Back reinstalls it; its aliases hide until it is back. */
  var DSTORE = {
    get: function(){ var raw = null; try { raw = localStorage.getItem('tigos.desk'); } catch(e){} if(!raw){ try { var m = document.cookie.match(/(?:^|; )tigos\.desk=([^;]*)/); if(m) raw = decodeURIComponent(m[1]); } catch(e){} } return raw; },
    set: function(raw){ try { localStorage.setItem('tigos.desk', raw); } catch(e){} try { var v = encodeURIComponent(raw); if(v.length < 3600){ document.cookie = 'tigos.desk='+v+'; max-age=31536000; path=/; SameSite=None; Secure'; document.cookie = 'tigos.desk='+v+'; max-age=31536000; path=/; SameSite=Lax'; } } catch(e){} }
  };
  var DESKS = {}; try { DESKS = JSON.parse(DSTORE.get() || '{}') || {}; if(typeof DESKS !== 'object' || Array.isArray(DESKS)) DESKS = {}; } catch(e){ DESKS = {}; }
  function DK(){
    var d = DESKS[USER.name]; if(!d || typeof d !== 'object') d = DESKS[USER.name] = {};
    if(!d.items || typeof d.items !== 'object') d.items = {}; if(!d.view || typeof d.view !== 'object') d.view = {}; if(!(d.seq > 0)) d.seq = 1; if(!Array.isArray(d.login)) d.login = [];
    return d;
  }
  function deskSave(){ DSTORE.set(JSON.stringify(DESKS)); }
  var DVIEW = { icons:true, hero:true, size:'md', sort:'grid' };
  function dview(k){ var v = DK().view; return k in v ? v[k] : DVIEW[k]; }
  function dviewSet(k, v){ var d = DK(); if(v === DVIEW[k]) delete d.view[k]; else d.view[k] = v; deskSave(); drender(); }
  function ditem(id){ return DK().items[id] || null; }
  function dlive(it){ return it && (it.kind === 'folder' || it.kind === 'note' || (it.kind === 'app' && APPS[it.app] && !APPS[it.app].sys && (it.pkg ? it.in === 'trash' : !appGone(it.app)))); }
  function ditems(where){ var d = DK(); return Object.keys(d.items).map(function(k){ return d.items[k]; }).filter(function(it){ return dlive(it) && (it.in || '') === where; }); }
  function dinside(it){ return it.in && it.in !== 'trash' && ditem(it.in) ? it.in : (it.in === 'trash' ? 'trash' : ''); }
  function dwhere(it){ var w = dinside(it); return w === 'trash' ? 'Trash' : w ? ditem(w).name : 'Desktop'; }
  function dkids(fid){ return ditems(fid); }
  function dnameFree(name, where, skip){ return !ditems(where).some(function(x){ return x.id !== skip && x.name.toLowerCase() === name.toLowerCase(); }); }
  function dnameNew(base, where){ var m = String(base).match(/^(.*\S)(\.(?:txt|md|markdown|text))$/i), b = m ? m[1] : base, x = m ? m[2] : '', n = base, i = 2; while(!dnameFree(n, where)) n = b+' '+(i++)+x; return n; }   /* a note keeps its extension: notes 2.md, never notes.md 2 */
  function dnew(kind, props){
    var d = DK(), id = 'd'+(d.seq++);
    var it = { id:id, kind:kind, app:'', name:'', in:'', c:-1, r:-1, t:Date.now(), tag:'' };
    Object.keys(props || {}).forEach(function(k){ it[k] = props[k]; });
    d.items[id] = it; return it;
  }
  function dalias(app){ return ditems('').filter(function(x){ return x.kind === 'app' && x.app === app; })[0] || null; }
  function dsize(){ return dview('size'); }
  /* the grid: on a desktop, columns from the top right down then leftward (macOS); on a phone, rows from just above the dock up,
     left to right, so icons sit under the thumb and clear of the welcome text */
  function dgrid(){
    var mob = isMobile(), s = (mob ? { sm:40, md:48, lg:56 } : { sm:44, md:58, lg:74 })[dsize()] || 58, cw = s + (mob ? 30 : 40), ch = s + (mob ? 36 : 44);
    var W = desk.clientWidth, H = desk.clientHeight, g = { s:s, cw:cw, ch:ch, mob:mob };
    if(mob){
      var bot = Math.min(H - 8, dockTop() - 6); g.cols = Math.max(1, Math.floor((W - 12)/cw)); g.rows = Math.max(1, Math.floor((bot - 8)/ch));
      g.x = function(c){ return 6 + c*cw; }; g.y = function(r){ return bot - (r + 1)*ch; };
      g.at = function(px, py){ return { c:Math.max(0, Math.min(g.cols - 1, Math.floor((px - 6)/cw))), r:Math.max(0, Math.min(g.rows - 1, Math.floor((bot - py)/ch))) }; };
      g.nth = function(n){ return { c:n % g.cols, r:Math.floor(n / g.cols) }; };
      g.idx = function(c, r){ return r*g.cols + c; };
    } else {
      var a = area(), x1 = a.x1 - 10, top = 10, y1 = Math.min(a.y1, H - 6);
      g.cols = Math.max(1, Math.floor((x1 - a.x0 - 10)/cw)); g.rows = Math.max(1, Math.floor((y1 - top)/ch));
      g.x = function(c){ return x1 - (c + 1)*cw; }; g.y = function(r){ return top + r*ch; };
      g.at = function(px, py){ return { c:Math.max(0, Math.min(g.cols - 1, Math.floor((x1 - px)/cw))), r:Math.max(0, Math.min(g.rows - 1, Math.floor((py - top)/ch))) }; };
      g.nth = function(n){ return { c:Math.floor(n / g.rows), r:n % g.rows }; };
      g.idx = function(c, r){ return c*g.rows + r; };
    }
    return g;
  }
  function dcmp(by){
    var kind = function(x){ return x.kind === 'folder' ? 0 : x.kind === 'note' ? 2 : 1; }, nm = function(a, b){ return a.name.localeCompare(b.name, undefined, { numeric:true, sensitivity:'base' }); };
    if(by === 'kind') return function(a, b){ return kind(a) - kind(b) || nm(a, b); };
    if(by === 'date') return function(a, b){ return b.t - a.t || nm(a, b); };
    return nm;
  }
  /* where each desktop item is drawn: sorted views pack in order; the free grid keeps every saved cell it can and gives the rest the next
     free cell. A cell that fell off a smaller screen is only borrowed, so the icon goes back when the window grows */
  var DPOS = {}, DLAYOUT_NEW = false;
  function dlayout(g){
    var its = ditems(''), taken = {}, pos = {}, sort = dview('sort'), key = function(c, r){ return c+','+r; };
    if(sort !== 'grid'){ its.sort(dcmp(sort)).forEach(function(it, i){ var p = g.nth(i); pos[it.id] = p; }); return pos; }
    its.sort(function(a, b){ return a.t - b.t; });
    var rest = []; DLAYOUT_NEW = false;
    its.forEach(function(it){ if(it.c >= 0 && it.r >= 0 && it.c < g.cols && it.r < g.rows && !taken[key(it.c, it.r)]){ taken[key(it.c, it.r)] = 1; pos[it.id] = { c:it.c, r:it.r }; } else rest.push(it); });
    var n = 0;
    rest.forEach(function(it){ var p; do { p = g.nth(n++); } while(taken[key(p.c, p.r)] && n < 4000); taken[key(p.c, p.r)] = 1; pos[it.id] = p; if(it.c < 0){ it.c = p.c; it.r = p.r; DLAYOUT_NEW = true; } });
    return pos;
  }
  /* the nearest free cell to (c, r), for a drop onto an occupied spot */
  function dnear(g, c, r, taken){
    var best = null, bd = 1e9;
    for(var cc = 0; cc < g.cols; cc++) for(var rr = 0; rr < g.rows; rr++){ if(taken[cc+','+rr]) continue; var dd = (cc - c)*(cc - c) + (rr - r)*(rr - r); if(dd < bd){ bd = dd; best = { c:cc, r:rr }; } }
    return best || { c:c, r:r };
  }
  var FOLDER_SVG = '<svg class="dfold" viewBox="0 0 64 52" aria-hidden="true"><path class="fb" d="M4 9a5 5 0 0 1 5-5h14.6a4 4 0 0 1 3 1.4L30 9h25a5 5 0 0 1 5 5v29a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path class="fbs" d="M4 9a5 5 0 0 1 5-5h14.6a4 4 0 0 1 3 1.4L30 9h25a5 5 0 0 1 5 5v29a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path class="ff" d="M4 18a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v25a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path class="fs" d="M4 18a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v25a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" fill="url(#lgFold)"/><path class="fh" d="M8.5 15.2h47"/></svg>';
  /* a text file: a white page with a folded corner, ruled lines and its extension, like Finder's document icons */
  function noteSVG(name){ return '<svg class="dnote" viewBox="0 0 48 60" aria-hidden="true"><path class="np" d="M7 2.5h24.5L43.5 14.5v41a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-51a2 2 0 0 1 2-2z"/><path class="nf" d="M31.5 2.5v10a2 2 0 0 0 2 2h10z"/><path class="nl" d="M11.5 21h20M11.5 26.5h25M11.5 32h25M11.5 37.5h16"/><text class="nx" x="24" y="51.5" text-anchor="middle">'+(/\.(md|markdown)$/i.test(name || '') ? 'MD' : 'TXT')+'</text></svg>'; }
  function dart(it){ return it.kind === 'folder' ? FOLDER_SVG : it.kind === 'note' ? noteSVG(it.name) : tileHTML(it.app); }
  function dkindLabel(it){ return it.kind === 'folder' ? ', folder' : it.kind === 'note' ? ', text document' : ''; }
  function diconHTML(it){ return '<span class="dart"'+(it.kind === 'folder' && it.tag ? ' style="--fc:'+tagHex(it.tag)+'"' : '')+'>'+dart(it)+'</span><span class="dlab">'+(it.tag ? '<i class="dtag" style="background:'+tagHex(it.tag)+'"></i>' : '')+'<span class="dname">'+esc(it.name)+'</span></span>'; }
  function dmake(it){
    var el = document.createElement('div');
    el.className = 'dicon'; el.setAttribute('data-id', it.id); el.setAttribute('data-kind', it.kind); if(it.app) el.setAttribute('data-app', it.app);
    el.setAttribute('role', 'button'); el.setAttribute('aria-label', it.name+dkindLabel(it));
    el.innerHTML = diconHTML(it); el._sig = diconHTML(it);
    return el;
  }
  function dsync(el, it){ var h = diconHTML(it); if(el._sig !== h && !el.querySelector('input')){ el.innerHTML = h; el._sig = h; el.setAttribute('aria-label', it.name+dkindLabel(it)); } }
  var DLAYER = document.createElement('div'); DLAYER.className = 'dicons'; DLAYER.id = 'dicons'; DLAYER.setAttribute('aria-label', 'Desktop'); desk.insertBefore(DLAYER, winsEl);
  function drender(){
    if(!DLAYER) return;
    var phone = isPhone(), g = dgrid(), pos = phone ? {} : dlayout(g), its = phone ? [] : ditems(''), have = {};   /* a phone has no desktop icons: what was saved stays saved, it is just not drawn */
    DPOS = pos; if(DLAYOUT_NEW){ DLAYOUT_NEW = false; deskSave(); }   /* a new item keeps the cell it was first given */
    root.style.setProperty('--di', g.s+'px'); root.style.setProperty('--dcw', g.cw+'px');
    $$('.dicon:not(.bye)', DLAYER).forEach(function(el){ have[el.getAttribute('data-id')] = el; });
    its.forEach(function(it){
      var el = have[it.id]; delete have[it.id];
      if(!el){ el = dmake(it); el.classList.add('new'); DLAYER.appendChild(el); setTimeout(function(){ el.classList.remove('new'); }, 620); } else dsync(el, it);
      var p = pos[it.id]; el.style.left = g.x(p.c)+'px'; el.style.top = g.y(p.r)+'px'; el.style.width = g.cw+'px';
    });
    Object.keys(have).forEach(function(k){ dbye(have[k]); });
    var icons = dview('icons'), hero = dview('hero');
    root.classList.toggle('desk-noicons', !phone && !icons); root.classList.toggle('desk-nohero', !phone && (!icons || !hero));   /* and its welcome text always shows */
    fsyncAll(); trashLook();
    if(USER.name === 'ariel') heartsOn();
    var sw = WM.wins.settings; if(sw) $$('[data-dview]', sw.body).forEach(function(g){ var k = g.getAttribute('data-dview'); $$('button', g).forEach(function(b){ b.classList.toggle('on', String(dview(k)) === b.getAttribute('data-v')); }); });
  }
  var drT = 0; window.addEventListener('resize', function(){ cancelAnimationFrame(drT); drT = requestAnimationFrame(drender); });
  /* ---------- coming and going: a new icon blows in like a bubble (.new, 41-desktop-menus.css), one that leaves pops where it stood ----------
     A leaving desktop icon stays in place as a nameless copy for its pop; in a folder or Den, whose icons are redrawn, fsnap notes where
     each one stood before the redraw and fbye pops the ones that went, over the window */
  function dbye(el){
    if(PREF.motion === 'off' || !el.isConnected || root.classList.contains('phone')){ el.remove(); return; }
    el.classList.remove('sel', 'new', 'flash', 'drop-on', 'dragging'); el.classList.add('bye');
    el.removeAttribute('data-id'); el.removeAttribute('data-kind'); el.removeAttribute('role'); el.setAttribute('aria-hidden', 'true');
    setTimeout(function(){ el.remove(); }, 420);
  }
  function fseen(list){ var m = {}; list.forEach(function(it){ m[it.id] = 1; }); return m; }
  function fsnap(box){
    var m = {}; if(!box || PREF.motion === 'off') return m;
    $$('.fw .dicon[data-id]', box).forEach(function(e){ var r = e.getBoundingClientRect(); if(r.width) m[e.getAttribute('data-id')] = { el:e, r:r }; });
    return m;
  }
  function fbye(snap, box, host){
    var ids = Object.keys(snap || {}).filter(function(id){ return !$('.fw .dicon[data-id="'+id+'"]', box); }); if(!ids.length || !host || !host.isConnected) return;
    var hr = host.getBoundingClientRect(), b = box.getBoundingClientRect(), layer = document.createElement('div'); layer.className = 'fw fw-bye'; layer.setAttribute('aria-hidden', 'true');
    ids.forEach(function(id){ var s = snap[id], r = s.r; if(r.bottom < b.top || r.top > b.bottom) return;   /* scrolled out of sight: nothing to show */
      var c = s.el.cloneNode(true); c.classList.remove('sel', 'new', 'flash', 'drop-on', 'dragging'); c.classList.add('bye'); c.removeAttribute('data-id'); c.removeAttribute('data-kind');
      c.style.cssText = 'position:absolute;left:'+(r.left - hr.left)+'px;top:'+(r.top - hr.top)+'px;width:'+r.width+'px;height:'+r.height+'px'; layer.appendChild(c); });
    if(!layer.children.length) return;
    host.appendChild(layer); setTimeout(function(){ layer.remove(); }, 420);
  }
  /* selection: one set at a time, inside the desktop or one folder window, like Finder */
  var DFOCUS = null;
  function dhost(el){ return el.closest('.fw') || DLAYER; }
  function dsels(host){ return $$('.dicon.sel', host || root).filter(function(e){ return !e.closest('.dghost'); }); }
  function dselIds(host){ return dsels(host).map(function(e){ return e.getAttribute('data-id'); }); }
  function dselClear(except){ $$('.dicon.sel').forEach(function(e){ if(e !== except) e.classList.remove('sel'); }); }
  function dselOnly(el){ dselClear(el); el.classList.add('sel'); DFOCUS = dhost(el); }
  function dflash(id){ var el = $('.dicon[data-id="'+id+'"]', DLAYER); if(!el) return; dselOnly(el); el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
  /* rename in place: Return or a click away keeps it, Escape puts the old name back */
  var DREN = null;
  function drename(id){
    var it = ditem(id); if(!it) return;
    if(DREN) DREN.done(true);
    var mine = DFOCUS && DFOCUS !== DLAYER && DFOCUS.isConnected && $('.dicon[data-id="'+id+'"]', DFOCUS) ? DFOCUS : null;   /* renamed from a Den window: edit it there, not on a desktop it may cover */
    var host = mine || (dinside(it) === '' ? DLAYER : $('.fw[data-folder="'+dinside(it)+'"]')), el = host && $('.dicon[data-id="'+id+'"]', host); if(!el) return;
    var nm = $('.dname', el), inp = document.createElement('input');
    inp.type = 'text'; inp.className = 'dren'; inp.value = it.name; inp.maxLength = 40; inp.spellcheck = false; inp.setAttribute('aria-label', 'Name');
    nm.replaceWith(inp); dselOnly(el); el.classList.add('renaming');
    var where = dinside(it), live = true;
    DREN = { id:id, done:function(keep){
      if(!live) return; live = false; DREN = null; el.classList.remove('renaming'); if(inp.parentNode) inp.replaceWith(nm);
      var v = inp.value.replace(/\s+/g, ' ').trim().slice(0, 40); if(v && it.kind === 'note') v = nname(v);
      if(keep && v && v !== it.name){
        if(!dnameFree(v, where, id)){ toast('The name \u201c'+v+'\u201d is already taken', 'Please choose a different name.'); }
        else { it.name = v; delete it.auto; deskSave(); }
      }
      el._sig = ''; dsync(el, it); drender(); fsyncAll(); winTitles();
    } };
    inp.addEventListener('keydown', function(e){ e.stopPropagation(); if(e.key === 'Enter'){ e.preventDefault(); DREN && DREN.done(true); } if(e.key === 'Escape'){ e.preventDefault(); DREN && DREN.done(false); } });
    inp.addEventListener('blur', function(){ if(DREN && DREN.id === id) DREN.done(true); });
    inp.addEventListener('pointerdown', function(e){ e.stopPropagation(); });
    setTimeout(function(){ inp.focus(); inp.select(); }, 0);
  }
  function dnewFolder(at, withIds){
    var d = DK(), where = '', it = dnew('folder', { name:dnameNew('untitled folder', '') });
    if(at){ var g = dgrid(), want = g.at(at.x, at.y), taken = {}; Object.keys(DPOS).forEach(function(k){ if((withIds || []).indexOf(k) < 0) taken[DPOS[k].c+','+DPOS[k].r] = 1; }); var p = taken[want.c+','+want.r] ? dnear(g, want.c, want.r, taken) : want; it.c = p.c; it.r = p.r; }
    (withIds || []).forEach(function(id){ var x = d.items[id]; if(x && x.kind !== 'folder'){ x.in = it.id; x.c = -1; x.r = -1; } });
    delete d.view.icons;   /* a new folder always shows, even on a desktop whose icons were hidden */
    deskSave(); drender(); drename(it.id);
    return it;
  }
  function daddApp(app, quiet){
    var ex = dalias(app); if(ex){ if(!dview('icons')) dviewSet('icons', true); dflash(ex.id); return ex; }
    var it = dnew('app', { app:app, name:APPS[app].title });
    delete DK().view.icons;
    deskSave(); drender(); dflash(it.id);
    if(!quiet) toast(APPS[app].title+' is on the Desktop', isMobile() ? 'Tap it to open, hold it for options.' : 'Double-click it to open. Right-click for more.');
    return it;
  }
  function dopen(id, from){
    var it = ditem(id); if(!it) return;
    if(DREN && DREN.id === id) return;
    if(it.in === 'trash'){ toast('\u201c'+it.name+'\u201d is in the Trash', 'Put it back first, then open it.'); return; }
    if(it.kind === 'note'){ jotOpen(id, from); return; }
    if(it.kind === 'folder' && from && from.closest && from.closest('.denw')){ denGo(id); return; }   /* Finder: a folder opens in place */
    if(it.kind === 'folder'){ fopen(id, from); return; }
    if(APPS[it.app]) open(it.app, { from:from });
  }
  function dmove(ids, where){
    var d = DK(), n = 0;
    ids.forEach(function(id){ var it = d.items[id]; if(!it || it.id === where || it.pkg) return; if(it.kind === 'folder' && where !== '' && where !== 'trash') return; if((it.in || '') === where) return; if(!dnameFree(it.name, where, id)) it.name = dnameNew(it.name, where); it.in = where; it.c = -1; it.r = -1; delete it.from; n++; });
    if(n){ deskSave(); drender(); }
    return n;
  }
  /* ---------- the Trash: items keep where they came from, so Put Back works; emptying it is for good ---------- */
  function dtrash(ids){
    var d = DK(), n = 0;
    ids.forEach(function(id){ var it = d.items[id]; if(!it || it.in === 'trash') return; it.from = dinside(it); it.fc = it.c; it.fr = it.r; it.in = 'trash'; it.t2 = Date.now(); n++; var fw = WM.wins['fold-'+id]; if(fw) close(fw); });
    if(n){ deskSave(); drender(); trashGulp(); }
    return n;
  }
  function trashGulp(){ var tk = $('#dock .dk.trash'); if(tk){ tk.classList.remove('gulp'); void tk.offsetWidth; tk.classList.add('gulp'); } }
  function dputBack(ids){
    var d = DK(), g = dgrid(), taken = {}, n = 0;
    Object.keys(DPOS).forEach(function(k){ taken[DPOS[k].c+','+DPOS[k].r] = 1; });
    ids.forEach(function(id){ var it = d.items[id]; if(!it || it.in !== 'trash') return; if(it.pkg){ appInstall(it.app); n++; return; }   /* a removed app: Put Back reinstalls it */
      var back = it.from && it.from !== 'trash' && d.items[it.from] && d.items[it.from].in !== 'trash' ? it.from : '';
      it.in = back; if(back === ''){ if(it.fc >= 0 && !taken[it.fc+','+it.fr]){ it.c = it.fc; it.r = it.fr; } else { it.c = -1; it.r = -1; } if(it.c >= 0) taken[it.c+','+it.r] = 1; it.name = dnameFree(it.name, '', id) ? it.name : dnameNew(it.name, ''); }
      delete it.from; delete it.fc; delete it.fr; delete it.t2; n++; });
    if(n){ deskSave(); drender(); }
    return n;
  }
  function dtrashed(){ return ditems('trash'); }
  /* erasing is for good: these items from the Trash, and whatever a folder there held (rm inside ~/.Trash in Terminal uses it too) */
  function derase(ids){
    var d = DK(), gone = {}, bodies = [], n = 0;
    ids.forEach(function(id){ var it = d.items[id]; if(it && it.in === 'trash' && !gone[id]){ gone[id] = 1; n++; } });
    Object.keys(d.items).forEach(function(k){ var it = d.items[k]; if(gone[k] || (it.in && gone[it.in])) { var fw = WM.wins['fold-'+k]; if(fw) close(fw); if(it.kind === 'note') bodies.push(k); delete d.items[k]; } });
    nforget(bodies); deskSave(); drender();
    return n;
  }
  function dempty(){ return derase(dtrashed().map(function(it){ return it.id; })); }
  function demptyAsk(){
    var n = dtrashed().length; if(!n) return;
    sheet('Are you sure you want to permanently erase the '+(n === 1 ? 'item' : n+' items')+' in the Trash?', 'You can\u2019t undo this action.', 'Empty Trash', function(){ dempty(); toast('Trash emptied', n === 1 ? '1 item erased.' : n+' items erased.'); });
  }
  function trashLook(){ var tk = $('#dock .dk.trash'); if(!tk) return; var full = dtrashed().length > 0; tk.classList.toggle('full', full); var u = $('.tile use', tk); if(u && !u.hasAttribute('data-h0')) u.setAttribute('href', full ? '#i-trash-full' : '#i-trash'); else if(u) u.setAttribute('data-h0', full ? '#i-trash-full' : '#i-trash'); }
  /* ---------- folder and Trash windows: Finder-style icon views ---------- */
  APPS.trash = { title:'Trash', icon:'trash', tile:'trash', w:640, h:430, hidden:true, sys:'trash' };
  APPS.info = { title:'Info', icon:'info', tile:'info', w:320, h:480, hidden:true, sys:'info' };
  function fkey(id){ return 'fold-'+id; }
  function fopen(id, from){
    var it = ditem(id); if(!it || it.kind !== 'folder') return;
    var k = fkey(id);
    APPS[k] = { title:it.name, icon:'folder', tile:'folder', w:640, h:430, hidden:true, sys:'folder', folder:id };
    RENDER[k] = function(w){ fdraw(w, id); };
    return open(k, { from:from });
  }
  /* seen: the ids drawn last time in this same place, so the ones that just arrived blow in */
  function fgrid(list, where, empty, seen){
    if(!list.length) return '<div class="fw-empty">'+(empty || (where === 'trash' ? 'The Trash is empty.' : 'This folder is empty.'+(isMobile() ? '' : ' Drag items here.')))+'</div>';
    return '<div class="fw-grid">'+list.map(function(it){ return '<div class="dicon fi'+(seen && !seen[it.id] ? ' new' : '')+'" data-id="'+it.id+'" data-kind="'+it.kind+'"'+(it.app ? ' data-app="'+it.app+'"' : '')+' role="button" aria-label="'+esc(it.name)+'">'+diconHTML(it)+'</div>'; }).join('')+'</div>';
  }
  function fdraw(w, id){
    var it = ditem(id); if(!it){ return; }
    var list = dkids(id).sort(dcmp('name')), sel = dselIds(w.body), had = DFOCUS && DFOCUS !== DLAYER && w.body.contains(DFOCUS), snap = w._seen ? fsnap(w.body) : null;
    w.body.innerHTML = '<div class="fw" data-folder="'+id+'">'+fgrid(list, id, null, w._seen)+'<div class="fw-foot">'+(list.length === 1 ? '1 item' : list.length+' items')+'</div></div>';
    if(had) DFOCUS = $('.fw', w.body);   /* a redraw keeps the keyboard on this folder */
    sel.forEach(function(s){ var e = $('.dicon[data-id="'+s+'"]', w.body); if(e) e.classList.add('sel'); });
    w._seen = fseen(list); if(snap) fbye(snap, w.body, w.el);
  }
  function fsyncAll(){
    Object.keys(WM.wins).forEach(function(k){ var w = WM.wins[k], a = APPS[k]; if(!a) return;
      if(a.sys === 'folder'){ var it = ditem(a.folder); if(!it || it.in === 'trash'){ close(w); return; } fdraw(w, a.folder); }
      if(a.sys === 'info' && INFO.t) RENDER.info(w);
      if(k === 'den') denDraw();
      if(k === 'jot') jotSync();
    });
  }
  function winTitles(){
    Object.keys(WM.wins).forEach(function(k){ var a = APPS[k]; if(!a || a.sys !== 'folder') return; var it = ditem(a.folder); if(!it || a.title === it.name) return; a.title = it.name;
      var w = WM.wins[k], t = $('.win-title', w.el); if(t) t.innerHTML = ic('folder')+esc(it.name); w.el.setAttribute('aria-label', it.name); var tip = $('.dk.tmp[data-dock="'+k+'"] .tip'); if(tip) tip.textContent = it.name; });
    updateChrome();
  }
  /* ---------- Get Info: one panel, re-aimed at whatever was asked about ---------- */
  var INFO = { t:null };
  function infoFmt(t){ try { return new Date(t).toLocaleString('en-US', { month:'short', day:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit', hour12:false }); } catch(e){ return ''; } }
  function infoShow(t){
    INFO.t = t;
    var w = WM.wins.info;
    if(w){ RENDER.info(w); if(w.min) restore(w); focus(w); return w; }
    return open('info');
  }
  RENDER.info = function(w){
    var t = INFO.t || { type:'desk' }, rows = [], head = '', name = '', kind = '', sub = '', tags = null, ren = null;
    var row = function(k, v){ rows.push('<div class="gi-r"><span>'+esc(k)+'</span><b>'+v+'</b></div>'); };
    if(t.type === 'item'){
      var it = ditem(t.id); if(!it || !dlive(it)){ INFO.t = { type:'desk' }; RENDER.info(w); return; }
      name = it.name; head = '<span class="gi-art">'+(it.kind === 'folder' ? '<span class="dart"'+(it.tag ? ' style="--fc:'+tagHex(it.tag)+'"' : '')+'>'+FOLDER_SVG+'</span>' : it.kind === 'note' ? '<span class="dart">'+noteSVG(it.name)+'</span>' : tileHTML(it.app))+'</span>';
      if(it.kind === 'note'){ if(JOT.id === it.id) jotFlush(); var tx = nbody(it.id), wc = nwords(tx), md = /\.(md|markdown)$/i.test(it.name); kind = md ? 'Markdown Document' : 'Plain Text Document'; sub = wc === 1 ? '1 word' : wc+' words'; row('Kind', kind); row('Size', esc(sub+' \u00b7 '+tx.length+' characters')); row('Opens with', 'Jot'); }
      else if(it.kind === 'folder'){ var n = dkids(it.id).length; kind = 'Folder'; sub = n === 1 ? '1 item' : n+' items'; row('Kind', 'Folder'); row('Contains', esc(sub)); }
      else if(it.pkg){ kind = 'Application'; sub = 'Removed'; row('Kind', 'Application'); row('Status', 'Removed, Put Back reinstalls it'); }
      else { kind = 'Alias'; sub = 'Opens '+esc(APPS[it.app].title); row('Kind', 'Alias'); row('Original', esc(APPS[it.app].title)+' (app)'); row('In the Dock', dockHas(it.app) ? 'Yes' : 'No'); }
      row('Where', esc(dwhere(it))); row(it.kind === 'note' ? 'Created' : 'Added', esc(infoFmt(it.t))); if(it.kind === 'note' && it.m) row('Modified', esc(infoFmt(it.m)));
      if(it.in === 'trash' && it.t2) row('Trashed', esc(infoFmt(it.t2)));
      tags = it.tag || ''; ren = it.id;
    } else if(t.type === 'app'){
      var a = APPS[t.app]; if(!a){ INFO.t = { type:'desk' }; RENDER.info(w); return; }
      name = a.title; kind = 'Application'; sub = 'tigOS 2.0'; head = '<span class="gi-art">'+tileHTML(t.app)+'</span>';
      row('Kind', 'Application'); row('Version', 'tigOS 2.0'); row('In the Dock', dockHas(t.app) ? 'Yes' : 'No'); row('Open at Login', DK().login.indexOf(t.app) > -1 ? 'Yes' : 'No');
      if(t.app === 'resume') row('Document', 'One page \u00b7 PDF');
      if(t.app === 'projects') row('Case studies', String(TIG.projects.length));
    } else if(t.type === 'trash'){
      var tn = dtrashed().length; name = 'Trash'; kind = 'Trash'; sub = tn === 1 ? '1 item' : tn+' items'; head = '<span class="gi-art">'+tileHTML('trash')+'</span>';
      row('Kind', 'Trash'); row('Contains', esc(sub)); row('Where', 'Dock');
    } else {
      var all = Object.keys(DK().items).map(function(k){ return DK().items[k]; }).filter(dlive), on = all.filter(function(x){ return !x.in; }).length, inF = all.filter(function(x){ return x.in && x.in !== 'trash'; }).length;
      name = 'Desktop'; kind = 'Folder'; sub = on === 1 ? '1 item' : on+' items'; head = '<span class="gi-art"><span class="dart">'+FOLDER_SVG+'</span></span>';
      row('Kind', 'Folder'); row('Where', esc(USERS[USER.name] ? USERS[USER.name].home : '/Users/'+USER.name)); row('On the Desktop', esc(sub)); row('In folders', String(inF)); row('In the Trash', String(dtrashed().length));
      row('Display', esc(Math.round(root.clientWidth)+' \u00d7 '+Math.round(root.clientHeight)+(window.devicePixelRatio > 1 ? ' @'+(Math.round(window.devicePixelRatio*10)/10)+'x' : '')));
      row('System', 'tigOS 2.0'+(window.TIG_BUILD && TIG_BUILD.v ? ' ('+esc(TIG_BUILD.v)+')' : ''));
    }
    APPS.info.title = name+' Info';
    var tt = $('.win-title', w.el); if(tt) tt.innerHTML = ic('info')+esc(name)+' Info';
    w.el.setAttribute('aria-label', name+' Info');
    var tagRow = tags === null ? '' : '<div class="gi-sec"><div class="eyebrow">Tags</div><div class="gi-tags">'+TAGS.map(function(tg){ return '<button type="button" class="ctag'+(tags === tg[0] ? ' on' : '')+'" data-tag="'+tg[0]+'" style="--tc:'+tg[1]+'" aria-label="'+tg[2]+'" aria-pressed="'+(tags === tg[0] ? 'true' : 'false')+'" title="'+tg[2]+'"></button>'; }).join('')+'</div></div>';
    var nameRow = ren ? '<div class="gi-sec"><div class="eyebrow">Name</div><input class="gi-name" type="text" maxlength="40" spellcheck="false" aria-label="Name" value="'+esc(name)+'"></div>' : '';
    w.body.innerHTML = '<div class="gi"><div class="gi-head">'+head+'<div><b>'+esc(name)+'</b><span>'+esc(kind)+(sub && sub !== kind ? ' \u00b7 '+sub : '')+'</span></div></div>'+
      '<div class="gi-sec"><div class="eyebrow">General</div>'+rows.join('')+'</div>'+nameRow+tagRow+'</div>';
    $$('.gi-tags .ctag', w.body).forEach(function(b){ b.addEventListener('click', function(){ var v = b.getAttribute('data-tag'); dtag([ren], v === tags ? '' : v); }); });
    var ni = $('.gi-name', w.body);
    if(ni){ var commit = function(){ var it2 = ditem(ren), v = ni.value.replace(/\s+/g, ' ').trim().slice(0, 40); if(v && it2 && it2.kind === 'note') v = nname(v); if(!it2 || !v || v === it2.name) { ni.value = it2 ? it2.name : ''; return; } if(!dnameFree(v, dinside(it2), ren)){ toast('The name \u201c'+v+'\u201d is already taken', 'Please choose a different name.'); ni.value = it2.name; return; } it2.name = v; delete it2.auto; deskSave(); drender(); winTitles(); };
      ni.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); ni.blur(); } if(e.key === 'Escape'){ e.stopPropagation(); var it3 = ditem(ren); ni.value = it3 ? it3.name : ''; ni.blur(); } });
      ni.addEventListener('change', commit); ni.addEventListener('blur', commit); }
  };
  function dtag(ids, v){ var d = DK(); ids.forEach(function(id){ var it = d.items[id]; if(it) it.tag = v || ''; }); deskSave(); drender(); }
  /* ---------- pointer: click selects, double-click opens (a tap opens on a phone), drag moves, drop into a folder, the Trash or the Dock ---------- */
  root.addEventListener('pointerdown', function(e){
    var el = e.target.closest && e.target.closest('.dicon');
    if(DREN && !(el && el.classList.contains('renaming'))) DREN.done(true);
    if(!el || el.closest('.dghost')){
      var t = e.target; if(!t.closest || t.closest('.ctx, .dlg-bg')) return;
      var fw = t.closest('.fw'); if(fw){ DFOCUS = fw; if(e.button === 0 && !(e.metaKey || e.shiftKey)) dselClear(); return; }
      if(!t.closest('#desktop') || t.closest('.win')) DFOCUS = null;
      return;
    }
    if(e.button !== 0 || e.target.closest('input')) return;
    var host = dhost(el); DFOCUS = host;
    if(e.metaKey || e.shiftKey){ el.classList.toggle('sel'); $$('.dicon.sel').forEach(function(x){ if(dhost(x) !== host) x.classList.remove('sel'); }); if(!el.classList.contains('sel')) return; }
    else if(!el.classList.contains('sel')) dselOnly(el);
    if(e.pointerType === 'touch') return;
    e.preventDefault();
    var sx = e.clientX, sy = e.clientY, st = null, plain = !(e.metaKey || e.shiftKey);
    var mv = function(ev){ if(!st){ if(Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) < 6) return; st = idragStart(el, host, sx, sy); } idragMove(st, ev); };
    var up = function(ev){ document.removeEventListener('pointermove', mv, true); document.removeEventListener('pointerup', up, true); document.removeEventListener('pointercancel', up, true); if(st) idragEnd(st, ev); else if(plain && ev.type === 'pointerup') dselOnly(el); };
    document.addEventListener('pointermove', mv, true); document.addEventListener('pointerup', up, true); document.addEventListener('pointercancel', up, true);
  });
  root.addEventListener('dblclick', function(e){ var el = e.target.closest && e.target.closest('.dicon'); if(!el || el.closest('.dghost') || e.target.closest('input')) return; dopen(el.getAttribute('data-id'), el); });
  root.addEventListener('click', function(e){
    var el = e.target.closest && e.target.closest('.dicon'); if(!el || el.closest('.dghost') || e.target.closest('input')) return;
    if(Date.now() - CTX.touchT < 900) dopen(el.getAttribute('data-id'), el);   /* a finger has no double-click: one tap opens */
  });
  function idragStart(el, host, sx, sy){
    var sel = dsels(host); if(sel.indexOf(el) < 0) sel = [el];
    var gh = document.createElement('div'), rr = root.getBoundingClientRect(); gh.className = 'dghost';
    sel.forEach(function(s){ var r = s.getBoundingClientRect(), c = s.cloneNode(true); c.classList.remove('new', 'flash', 'drop-on'); c.style.left = (r.left - rr.left)+'px'; c.style.top = (r.top - rr.top)+'px'; c.style.width = r.width+'px'; gh.appendChild(c); s.classList.add('dragging'); });
    root.appendChild(gh); root.classList.add('icon-dragging');
    return { el:el, host:host, sel:sel, ids:sel.map(function(s){ return s.getAttribute('data-id'); }), gh:gh, sx:sx, sy:sy, over:null, drop:{ kind:'none' }, dx:0, dy:0 };
  }
  function idropAt(t, st){
    if(!t || !t.closest) return { kind:'none' };
    var d = DK(), its = st.ids.map(function(id){ return d.items[id]; }).filter(Boolean), apps = its.every(function(x){ return x.kind === 'app'; }), folders = its.some(function(x){ return x.kind === 'folder'; }), from = st.host === DLAYER ? '' : st.host.getAttribute('data-folder');
    var tk = t.closest('#dock .dk.trash'); if(tk) return from === 'trash' ? { kind:'none' } : { kind:'trash', el:tk };
    if(t.closest('#dock')) return apps && from !== 'trash' ? { kind:'dock', el:$('#dock') } : { kind:'none' };
    var fi = t.closest('.dicon[data-kind="folder"]');
    if(fi && st.ids.indexOf(fi.getAttribute('data-id')) < 0 && !fi.closest('.trashw') && !fi.closest('.dghost')) return folders ? { kind:'none' } : { kind:'folder', id:fi.getAttribute('data-id'), el:fi };
    var side = t.closest('.den-side [data-loc]');   /* a place in Den's sidebar */
    if(side){ var L = side.getAttribute('data-loc'); if(L === '*notes' || L === '*apps') return { kind:'none' }; if(L === 'trash') return from === 'trash' ? { kind:'none' } : { kind:'trash', el:side }; return (folders && L !== '') || L === from ? { kind:'none' } : { kind:'folder', id:L, el:side }; }
    var win = t.closest('.win');
    if(win && win.dataset.app === 'den'){ var D = DEN.loc; if(D === '*notes' || D === '*apps') return { kind:'none' }; if(D === 'trash') return from === 'trash' ? { kind:'none' } : { kind:'trash', el:win }; return (folders && D !== '') || D === from ? { kind:'none' } : { kind:'folder', id:D, el:win }; }
    if(win){ var a = APPS[win.dataset.app] || {};
      if(a.sys === 'folder') return folders || from === a.folder ? { kind:'none', el:null } : { kind:'folder', id:a.folder, el:win };
      if(a.sys === 'trash') return from === 'trash' ? { kind:'none' } : { kind:'trash', el:win };
      return { kind:'none' }; }
    if(t.closest('#desktop')) return { kind:'desk' };
    return { kind:'none' };
  }
  function idragMove(st, ev){
    st.dx = ev.clientX - st.sx; st.dy = ev.clientY - st.sy;
    st.gh.style.transform = 'translate('+st.dx+'px,'+st.dy+'px)';
    var drop = idropAt(document.elementFromPoint(ev.clientX, ev.clientY), st), on = drop.el || null;
    if(st.over !== on){ if(st.over) st.over.classList.remove('drop-on'); st.over = on; if(on) on.classList.add('drop-on'); }
    if(drop.kind === 'dock'){ if(st.addable == null){ var dd = DK(); st.addable = st.ids.some(function(id){ var x = dd.items[id]; return x && x.kind === 'app' && !dockHas(x.app); }); } if(st.addable) dockGapAt(ev.clientX, ev.clientY); }
    else dockGapClear();
    st.gh.classList.toggle('no', drop.kind === 'none'); st.gh.classList.toggle('copy', drop.kind === 'dock');
    st.drop = drop;
  }
  function idragEnd(st, ev){
    idragMove(st, ev);
    if(st.over) st.over.classList.remove('drop-on');
    root.classList.remove('icon-dragging'); CTX.swallow = true;
    var drop = st.drop, d = DK(), gh = st.gh, from = st.host === DLAYER ? '' : st.host.getAttribute('data-folder');
    var unhide = function(){ st.sel.forEach(function(s){ s.classList.remove('dragging'); }); };
    var sink = function(){ gh.classList.add('sink'); setTimeout(function(){ gh.remove(); }, 220); };
    var pk = st.ids.filter(function(id){ return d.items[id] && d.items[id].pkg; });
    if(pk.length && (drop.kind === 'desk' || drop.kind === 'folder')){ sink(); unhide(); dputBack(pk); st.ids = st.ids.filter(function(id){ return pk.indexOf(id) < 0; }); if(!st.ids.length) return; }   /* a removed app dragged out of the Trash goes back to Applications */
    if(drop.kind === 'trash'){ sink(); dtrash(st.ids); unhide(); return; }
    if(drop.kind === 'folder'){ sink(); var n = dmove(st.ids, drop.id); unhide(); if(n && drop.id === '' && !dview('icons')) dviewSet('icons', true); if(n){ var f = $('.dicon[data-id="'+drop.id+'"]', DLAYER); if(f){ f.classList.remove('flash'); void f.offsetWidth; f.classList.add('flash'); } } return; }
    if(drop.kind === 'dock'){ var added = [], at = dockGapIndex(); dockGapClear(true); st.ids.forEach(function(id){ var it = d.items[id]; if(it && it.kind === 'app' && !dockHas(it.app)){ dockPin(it.app, true, at >= 0 ? at++ : -1); added.push(APPS[it.app].title); } else if(it && it.kind === 'app'){ dockBounce(it.app); } });
      if(added.length) toast(added.length === 1 ? added[0]+' is in the Dock' : added.length+' apps added to the Dock', 'Right-click it there for options.');
      snapBack(); return; }
    if(drop.kind === 'desk' && !(from === '' && dview('sort') !== 'grid')){
      var g = dgrid(), dr = desk.getBoundingClientRect(), taken = {}, moving = {}, anchorEl = st.sel[0], ar = anchorEl.getBoundingClientRect();
      st.ids.forEach(function(id){ moving[id] = 1; });
      Object.keys(DPOS).forEach(function(k){ if(!moving[k]) taken[DPOS[k].c+','+DPOS[k].r] = 1; });
      var cx = ar.left + ar.width/2 + st.dx - dr.left, cy = ar.top + Math.min(ar.height, g.s)/2 + st.dy - dr.top, tgt = g.at(cx, cy), a0 = DPOS[st.ids[0]] || null;
      var starts = st.sel.map(function(s){ var r = s.getBoundingClientRect(); return { x:r.left - dr.left + st.dx, y:r.top - dr.top + st.dy }; });
      st.ids.forEach(function(id, i){ var it = d.items[id]; if(!it) return; var p0 = DPOS[id], c = tgt.c, r = tgt.r;
        if(from === '' && a0 && p0){ c = tgt.c + (p0.c - a0.c); r = tgt.r + (p0.r - a0.r); }
        else if(i){ var q = g.nth(g.idx(tgt.c, tgt.r) + i); c = q.c; r = q.r; }
        var p = (c >= 0 && r >= 0 && c < g.cols && r < g.rows && !taken[c+','+r]) ? { c:c, r:r } : dnear(g, c, r, taken);
        taken[p.c+','+p.r] = 1; it.c = p.c; it.r = p.r; if(from !== ''){ it.in = ''; delete it.from; delete it.fc; delete it.fr; delete it.t2; if(!dnameFree(it.name, '', id)) it.name = dnameNew(it.name, ''); } });
      if(from !== '' && !dview('icons')){ delete d.view.icons; }
      deskSave(); gh.remove(); unhide(); drender();
      dselClear(); DFOCUS = DLAYER;
      st.ids.forEach(function(id, i){ var el = $('.dicon[data-id="'+id+'"]', DLAYER); if(!el) return; el.classList.add('sel'); if(!starts[i]) return;
        var L = el.style.left, T = el.style.top; el.classList.add('settle'); el.style.left = starts[i].x+'px'; el.style.top = starts[i].y+'px'; void el.offsetWidth; el.classList.remove('settle'); el.style.left = L; el.style.top = T; });   /* glide from where it was let go into its cell */
      return;
    }
    snapBack();
    function snapBack(){ gh.classList.add('back'); gh.style.transform = 'translate(0,0)'; setTimeout(function(){ gh.remove(); unhide(); }, 240); }
  }
  /* rubber band: drag across the empty desktop to select icons */
  desk.addEventListener('pointerdown', function(e){
    if(e.button !== 0 || e.pointerType === 'touch' || !e.target.closest || e.target.closest('.win, .dicon, a, button, input')) return;
    DFOCUS = DLAYER;
    var add = e.shiftKey || e.metaKey; if(!add) dselClear();
    var dr = desk.getBoundingClientRect(), x0 = e.clientX - dr.left, y0 = e.clientY - dr.top, band = null, base = add ? dselIds(DLAYER) : [];
    var mv = function(ev){
      var x = ev.clientX - dr.left, y = ev.clientY - dr.top;
      if(!band){ if(Math.abs(x - x0) + Math.abs(y - y0) < 5) return; band = document.createElement('div'); band.className = 'dband'; desk.appendChild(band); }
      var L = Math.min(x, x0), T = Math.min(y, y0), R = Math.max(x, x0), B = Math.max(y, y0);
      band.style.left = L+'px'; band.style.top = T+'px'; band.style.width = (R - L)+'px'; band.style.height = (B - T)+'px';
      if(!dview('icons')) return;
      $$('.dicon', DLAYER).forEach(function(el){ var r = el.getBoundingClientRect(), a = $('.dart', el).getBoundingClientRect(), hit = r.left - dr.left < R && r.right - dr.left > L && a.top - dr.top < B && r.bottom - dr.top > T; el.classList.toggle('sel', hit || base.indexOf(el.getAttribute('data-id')) > -1); });
    };
    var up = function(){ document.removeEventListener('pointermove', mv, true); document.removeEventListener('pointerup', up, true); document.removeEventListener('pointercancel', up, true); if(band){ band.remove(); CTX.swallow = true; } };
    document.addEventListener('pointermove', mv, true); document.addEventListener('pointerup', up, true); document.addEventListener('pointercancel', up, true);
  });
  /* keys for a selection on the desktop or in a folder: Return renames, Cmd+Down opens, Cmd+Delete moves to the Trash, Cmd+A selects all */
  document.addEventListener('keydown', function(e){
    if(!DFOCUS || isPhone() || CTX.stack.length || DREN || $('.dlg-bg') || (e.target.closest && e.target.closest('input, textarea, [contenteditable="true"]'))) return;
    if(!root.contains(DFOCUS) || (DFOCUS !== DLAYER && !DFOCUS.isConnected)){ DFOCUS = null; return; }
    var ids = dselIds(DFOCUS), meta = e.metaKey || e.ctrlKey, inTrash = DFOCUS.classList && DFOCUS.classList.contains('trashw');
    if(meta && (e.key === 'a' || e.key === 'A') && (DFOCUS === DLAYER ? dview('icons') : true)){ e.preventDefault(); $$('.dicon:not(.bye)', DFOCUS).forEach(function(el){ el.classList.add('sel'); }); return; }
    if(meta && !e.shiftKey && (e.key === 'i' || e.key === 'I')){ e.preventDefault(); var ff = DFOCUS.getAttribute && DFOCUS.getAttribute('data-folder'); infoShow(ids.length ? { type:'item', id:ids[0] } : ff === 'trash' ? { type:'trash' } : ff ? { type:'item', id:ff } : { type:'desk' }); return; }
    if(!ids.length) return;
    if(e.key === 'Enter' && !meta && ids.length === 1 && !inTrash){ e.preventDefault(); e.stopPropagation(); drename(ids[0]); return; }
    if(meta && e.key === 'ArrowDown'){ e.preventDefault(); ids.forEach(function(id){ var el = $('.dicon[data-id="'+id+'"]', DFOCUS); dopen(id, el); }); return; }
    if(meta && e.key === 'Backspace' && !inTrash){ e.preventDefault(); dtrash(ids); return; }
  });
  drender();
/* tigOS core app.js, part 27: dock editing. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- the Dock: keep, remove, rearrange ----------------
     Laid out like macOS: Den at the far left (fixed, like the Finder; never kept, moved or removed), the kept (pinned) apps, then any app that is running without being kept (behind its own separator, the way
     recent apps sit), then a separator, the LinkedIn link and the Trash. The kept list is saved per user beside the desktop (DK().dock in
     27-desktop.js; absent means the default). Drag an icon along the dock to move it, drag it up and away to remove it (it goes in a puff
     of smoke), drop an app from the desktop to keep it. Right-click options live in 27-menus.js. */
  function dockDefault(){ var l = DOCK_ORDER.slice(); if(USER.name !== 'chase') l.splice(l.indexOf('terminal'), 0, 'games', 'pets'); return l; }   /* GreggyD and Ariel keep the Arcade and Pets beside the portfolio apps */
  function dockList(){
    var d = DK(), l = Array.isArray(d.dock) ? d.dock : dockDefault(), seen = {};
    return l.filter(function(id){ if(seen[id] || id === 'den' || !APPS[id] || APPS[id].sys || appGone(id) || APPS[id].desk && isPhone()) return false; seen[id] = 1; return true; });   /* Jot kept in the Dock stays off a phone's; Den has its own fixed spot; a removed app waits for its reinstall */
  }
  function dockSave(list){
    var d = DK(), old = Array.isArray(d.dock) ? d.dock : dockDefault(); list = list.slice();
    old.forEach(function(id, i){ if((appGone(id) || APPS[id] && APPS[id].desk && isPhone()) && list.indexOf(id) < 0) list.splice(Math.min(i, list.length), 0, id); });   /* a removed app keeps its place for when it comes back, and a phone's edit never drops Terminal or Jot */
    if(list.join() === dockDefault().join()) delete d.dock; else d.dock = list; deskSave();
  }
  function dockHas(app){ return app === 'den' ? !isPhone() : dockList().indexOf(app) > -1; }
  function dockIcon(id, cls){
    var b = document.createElement('button'); b.className = 'dk '+cls; b.type = 'button';
    b.setAttribute('data-open', id); b.setAttribute('data-dock', id); b.setAttribute('aria-label', APPS[id].title);
    b.innerHTML = tileHTML(id)+'<span class="dot"></span><span class="tip">'+esc(APPS[id].title)+'</span>';
    return b;
  }
  /* bring #dock in line with the saved list. Icons that stay are only moved when out of place, so a bounce or a running dot survives */
  function dockBuild(){
    var dock = $('#dock'); if(!dock) return;
    var list = dockList(), have = {}, want = [];
    $$('.dk.pin', dock).forEach(function(b){ have[b.getAttribute('data-dock')] = b; });
    list.forEach(function(id){ var b = have[id]; delete have[id]; if(!b) b = dockIcon(id, 'pin'); b.classList.toggle('xtra', !!APPS[id].hidden); want.push(b); });
    Object.keys(have).forEach(function(k){ have[k].remove(); });
    $$('.dk.tmp', dock).forEach(function(b){ if(list.indexOf(b.getAttribute('data-dock')) > -1) b.remove(); });
    var tsep = $('.sep.tmpsep', dock), order = [$('.dk.denfix', dock), $('.sep.densep', dock)].concat(want, tsep ? [tsep] : [], $$('.dk.tmp', dock), [$('.sep.main', dock), $('a.dk', dock), $('.dk.trash', dock)]).filter(Boolean);
    order.forEach(function(n, i){ if(dock.children[i] !== n) dock.insertBefore(n, dock.children[i] || null); });
    updateChrome();
    trashLook();
    if(USER.name === 'ariel') heartsOn();
    dockFit();
  }
  /* ---------- fitting the Dock to the screen ----------
     Icons keep the size Settings gives them until the Dock would run off the screen (a large Dock on an upright tablet, GreggyD's launcher
     on a short screen, a long row of running apps); then they all shrink together (--fit, never under 30 px). A short screen (a phone held
     sideways) also caps them at 13% of its height, so the Dock never eats the windows. A phone upright shows as many apps as fit at a size a
     thumb can hit (38 px), LinkedIn stepping out first, then the last app; framed in Google Sites the CSS sizes the icons and is only told
     how many there are (--n), at 32 px or more */
  function dockFit(){
    var dock = $('#dock'); if(!dock || root.classList.contains('dk-dragging') || (DGAP && DGAP.isConnected)) return;
    var mob = isMobile(), phone = isPhone(), framed = mob && root.classList.contains('framed'), gd = !mob && root.classList.contains('u-greggyd');
    $$('.dk.ovf', dock).forEach(function(k){ k.classList.remove('ovf'); });
    var kids = $$('#dock > .dk, #dock > .sep').filter(function(k){ return getComputedStyle(k).display !== 'none'; }), icons = kids.filter(function(k){ return k.classList.contains('dk'); });
    if(!icons.length || !dock.offsetWidth) return;
    var px = function(v){ return parseFloat(v) || 0; }, x = dockAxis() === 'x', cs = getComputedStyle(dock), nsep = kids.length - icons.length;
    var gap = px(x ? cs.columnGap : cs.rowGap), pad = x ? px(cs.paddingLeft) + px(cs.paddingRight) + px(cs.borderLeftWidth) + px(cs.borderRightWidth) : px(cs.paddingTop) + px(cs.paddingBottom) + px(cs.borderTopWidth) + px(cs.borderBottomWidth), seps = 0;
    kids.forEach(function(k){ if(k.classList.contains('dk')) return; var ks = getComputedStyle(k); seps += x ? k.offsetWidth + px(ks.marginLeft) + px(ks.marginRight) : k.offsetHeight + px(ks.marginTop) + px(ks.marginBottom); });
    var fixed = function(n){ return pad + seps + gap * Math.max(0, n + nsep - 1); };   /* everything but the icons: padding, dividers, the gaps between */
    var cur = px(dock.style.getPropertyValue('--fit')) || 1, nat = px(getComputedStyle(icons[0]).height) / cur;   /* the used height: square, untouched by hover or a slide in, and not rounded */
    var W = root.clientWidth, H = root.clientHeight;
    var was = dock.style.getPropertyValue('--fit') + '/' + dock.style.getPropertyValue('--n'), now = function(){ return dock.style.getPropertyValue('--fit') + '/' + dock.style.getPropertyValue('--n') !== was; };
    if(mob && (phone || framed)){
      var drops = icons.filter(function(k){ return k.tagName === 'A'; }).concat(icons.filter(function(k){ return k.tagName !== 'A'; }).reverse()), n = icons.length, k = 0;
      var room = root.classList.contains('u-greggyd') ? W : W - 20;   /* the Ubuntu bar spans the screen; the plain dock keeps 10 px each side */
      var size = function(n){ return framed ? Math.min(40, (W - 88 - (n - 1) * 3) / n) : Math.min(nat, (room - fixed(n)) / n); };   /* the framed sum is the one in 31-mobile.css */
      while(n > 1 && size(n) < (framed ? 32 : 38)){ drops[k++].classList.add('ovf'); n--; }
      if(framed){ dock.style.setProperty('--n', n); dock.style.removeProperty('--fit'); }
      else { dock.style.setProperty('--fit', Math.min(1, size(n) / nat).toFixed(4)); dock.style.removeProperty('--n'); }
      return now();
    }
    var mb = $('.menubar'), avail = x ? W - (mob ? 20 : 24) : gd ? H - 28 : H - 2 * ((mb ? mb.offsetHeight : 30) + 8);
    var f = Math.min(1, (avail - fixed(icons.length)) / (icons.length * nat), (x ? H : W) * .13 / nat);
    dock.style.setProperty('--fit', Math.max(f, Math.min(1, 30 / nat)).toFixed(4)); dock.style.removeProperty('--n');
    return now();   /* true when the icons changed size, so windows can follow the dock's new edge */
  }
  var FIT_T = 0;
  function dockFitSoon(){ cancelAnimationFrame(FIT_T); FIT_T = requestAnimationFrame(function(){ if(dockFit()) reclamp(); }); }
  window.addEventListener('resize', dockFitSoon);
  /* a window narrowed past a phone's width, or a phone turned: the dock, the desktop and the menus follow, and windows a phone has no
     place for (the Trash, a folder, Get Info) close */
  var phoneMQ = window.matchMedia(PHONE_MQ), phoneSync = function(){
    var on = isPhone(); if(root.classList.contains('phone') === on) return;
    root.classList.toggle('phone', on); ctxClose(true);
    if(on) Object.keys(WM.wins).forEach(function(k){ if(APPS[k] && (APPS[k].sys || APPS[k].desk) && WM.wins[k]) close(WM.wins[k]); });
    dockBuild(); drender(); updateChrome();   /* the Dock gains or loses Terminal and Den (dockBuild fits it) */
  };
  if(phoneMQ.addEventListener) phoneMQ.addEventListener('change', phoneSync); else if(phoneMQ.addListener) phoneMQ.addListener(phoneSync);
  window.addEventListener('resize', phoneSync);
  function dockBounce(app){ var b = $('#dock .dk[data-dock="'+app+'"]'); if(!b) return; b.classList.remove('bounce'); void b.offsetWidth; b.classList.add('bounce'); }
  function dockPop(app){ var b = $('#dock .dk.pin[data-dock="'+app+'"]'); if(!b) return; b.classList.remove('dk-in'); void b.offsetWidth; b.classList.add('dk-in'); setTimeout(function(){ b.classList.remove('dk-in'); }, 520); }
  /* Keep in Dock: at the end of the kept apps, or at a slot (a drop) */
  function dockPin(app, quiet, at){
    if(!APPS[app] || APPS[app].sys || appGone(app)) return false;
    var l = dockList(); if(l.indexOf(app) > -1 || app === 'den'){ dockBounce(app); return false; }
    if(!(at >= 0 && at <= l.length)) at = l.length;
    l.splice(at, 0, app); dockSave(l); dockBuild(); dockPop(app);
    if(!quiet) toast(APPS[app].title+' is in the Dock', isMobile() ? 'Hold it there for options.' : 'Drag it to move it, or right-click it for options.');
    return true;
  }
  /* Remove from Dock: a running app steps over to the running section and stays open; the last app always stays */
  function dockUnpin(app, quiet){
    var l = dockList(), i = l.indexOf(app); if(i < 0) return false;
    if(l.length < 2){ toast('The Dock needs at least one app', 'Keep another app in the Dock first.'); dockBounce(app); return false; }
    l.splice(i, 1); dockSave(l);
    var b = $('#dock .dk.pin[data-dock="'+app+'"]');
    if(b && !WM.wins[app] && !quiet && PREF.motion !== 'off'){ b.classList.add('dk-out'); setTimeout(dockBuild, 230); } else dockBuild();
    return true;
  }
  function dockReset(){
    delete DK().dock; deskSave();
    PREF.dock = 'md'; PREF.dockpos = 'bottom'; PREF.dockhide = 'off'; PREF.dockmag = 'on'; applyPrefs(); petUIs();
    dockBuild(); toast('Dock reset', 'The default apps, size and position are back.');
  }
  function dockResetAsk(){ sheet('Reset the Dock?', 'The default apps come back in their usual order, at the usual size and position. Your desktop stays as it is.', 'Reset Dock', dockReset); }
  /* Open at Login: opened, a beat apart, once the desktop is up after a boot or a log in */
  function loginHas(app){ return DK().login.indexOf(app) > -1; }
  function loginToggle(app){ var l = DK().login, i = l.indexOf(app); if(i > -1) l.splice(i, 1); else l.push(app); deskSave(); return i < 0; }
  function loginItems(){
    var l = DK().login.filter(function(id){ return APPS[id] && !APPS[id].sys && !appGone(id) && !(APPS[id].desk && isPhone()); }); if(!l.length) return;
    if(isMobile()) l = l.slice(-1);   /* a phone shows one app at a time: the last one wins anyway */
    l.forEach(function(id, i){ setTimeout(function(){ if(loginEl.hidden && !root.classList.contains('booting') && !root.classList.contains('poweroff') && !WM.wins[id]) open(id, { from:$('#dock [data-dock="'+id+'"]') }); }, 700 + i*320); });
  }
  /* ---------- dragging ---------- */
  function dockAxis(){ var s = dockSide(); return s === 'left' || s === 'right' ? 'y' : 'x'; }
  /* close enough to count as on the dock: a little slack along it, more on the side facing the desktop */
  function dockNear(x, y){
    var d = $('#dock').getBoundingClientRect(), s = dockSide(), M = 26, F = 70;
    if(s === 'left') return y > d.top - M && y < d.bottom + M && x > d.left - M && x < d.right + F;
    if(s === 'right') return y > d.top - M && y < d.bottom + M && x > d.left - F && x < d.right + M;
    return x > d.left - M && x < d.right + M && y > d.top - F && y < d.bottom + M;
  }
  /* layout positions (offsets, so a hover magnification or a slide in flight never skews them) */
  function dockPos(el){ var dock = $('#dock'), d = dock.getBoundingClientRect(); return { x:d.left + dock.clientLeft + el.offsetLeft, y:d.top + dock.clientTop + el.offsetTop, w:el.offsetWidth, h:el.offsetHeight }; }
  /* slide the other icons from where they were to where a change puts them */
  function dockFlip(mutate){
    var kids = $$('#dock > .dk, #dock > .sep').filter(function(k){ return k.offsetWidth; }), r0 = kids.map(dockPos);
    mutate();
    if(PREF.motion === 'off') return;
    kids.forEach(function(k, i){ if(!k.isConnected || !k.offsetWidth) return; var r1 = dockPos(k), dx = r0[i].x - r1.x, dy = r0[i].y - r1.y; if(Math.abs(dx) < .5 && Math.abs(dy) < .5) return;
      k.style.transition = 'none'; k.style.translate = dx+'px '+dy+'px'; void k.offsetWidth;
      k.style.transition = 'transform .22s var(--spring), translate .24s var(--ease)'; k.style.translate = '';
      clearTimeout(k._flipT); k._flipT = setTimeout(function(){ k.style.transition = ''; }, 300); });
  }
  /* the slot a point falls in: how many kept icons have their centre before it */
  function dockSlot(x, y, skip){
    var ax = dockAxis(), pins = $$('#dock > .dk.pin').filter(function(b){ return b !== skip && b.offsetWidth; }), n = 0;
    pins.forEach(function(b){ var p = dockPos(b), c = ax === 'x' ? p.x + p.w/2 : p.y + p.h/2; if((ax === 'x' ? x : y) > c) n++; });
    return { n:n, pins:pins };
  }
  /* an empty slot that opens where a dragged icon would land */
  var DGAP = null;
  function dockGapMake(ref){   /* as big as one icon's slot, whatever the dock size */
    if(!DGAP){ DGAP = document.createElement('span'); DGAP.className = 'dk-gap'; DGAP.setAttribute('aria-hidden', 'true'); }
    ref = ref && ref.offsetWidth ? ref : $$('#dock > .dk').filter(function(b){ return b.offsetWidth; })[0];
    if(ref){ DGAP.style.width = ref.offsetWidth+'px'; DGAP.style.height = ref.offsetHeight+'px'; }
    return DGAP;
  }
  function dockGapAt(x, y, skip){
    var dock = $('#dock'), s = dockSlot(x, y, skip), before = s.pins[s.n] || $('.sep.tmpsep', dock) || $('.sep.main', dock), ts = $('.sep.tmpsep', dock);
    if(skip && !skip.classList.contains('pin') && ts){   /* a running app dragged along its own section stays unkept; only crossing into the kept apps keeps it */
      var tp = dockPos(ts), ax = dockAxis();
      if((ax === 'x' ? x : y) > (ax === 'x' ? tp.x + tp.w/2 : tp.y + tp.h/2)){ s.n = -1; before = skip; }
    }
    if(!DGAP || !DGAP.isConnected) dockGapMake();
    if(DGAP.isConnected && (DGAP.nextElementSibling === before || (before === skip && DGAP.nextElementSibling === skip))) return s.n;
    dockFlip(function(){ dock.insertBefore(DGAP, before); });
    return s.n;
  }
  function dockGapIndex(){ if(!DGAP || !DGAP.isConnected) return -1; var n = 0; for(var k = DGAP.previousElementSibling; k; k = k.previousElementSibling) if(k.classList.contains('pin') && !k.classList.contains('dk-away')) n++; return n; }
  function dockGapClear(instant){ if(!DGAP || !DGAP.isConnected) return; if(instant) DGAP.remove(); else dockFlip(function(){ DGAP.remove(); }); }
  function dockPuff(x, y){
    if(PREF.motion === 'off') return;
    var rr = root.getBoundingClientRect(), p = document.createElement('div'); p.className = 'dk-puff'; p.style.left = (x - rr.left)+'px'; p.style.top = (y - rr.top)+'px';
    p.innerHTML = '<i style="--tx:-16px;--ty:-12px"></i><i style="--tx:15px;--ty:-14px"></i><i style="--tx:-12px;--ty:13px"></i><i style="--tx:14px;--ty:12px"></i><i style="--tx:0px;--ty:-20px"></i><i style="--tx:0px;--ty:0px"></i>';
    root.appendChild(p); setTimeout(function(){ p.remove(); }, 650);
  }
  function ddStart(b, x, y){
    var rr = root.getBoundingClientRect(), t = $('.tile', b), tr = t.getBoundingClientRect(), gh = document.createElement('div');
    gh.className = 'dkghost'; gh.innerHTML = t.outerHTML+'<span class="dkg-tip">Remove</span>';
    gh.style.left = (tr.left - rr.left)+'px'; gh.style.top = (tr.top - rr.top)+'px'; gh.style.width = tr.width+'px'; gh.style.height = tr.height+'px';
    root.appendChild(gh);
    dockGapMake(b); b.parentNode.insertBefore(DGAP, b); b.classList.add('dk-away');
    root.classList.add('dk-dragging');
    return { b:b, id:b.getAttribute('data-dock'), pinned:b.classList.contains('pin'), gh:gh, x0:x, y0:y, cx:tr.left + tr.width/2, cy:tr.top + tr.height/2, out:false };
  }
  function ddMove(st, e){
    st.gh.style.transform = 'translate('+(e.clientX - st.x0)+'px,'+(e.clientY - st.y0)+'px)';
    var near = dockNear(e.clientX, e.clientY);
    st.slot = near ? dockGapAt(e.clientX, e.clientY, st.b) : -1; if(!near) dockGapClear();
    st.out = !near;
    st.gh.classList.toggle('rm', !near && st.pinned && dockList().length > 1);
  }
  function ddEnd(st, e){
    root.classList.remove('dk-dragging'); CTX.swallow = true;
    var dock = $('#dock'), gh = st.gh, b = st.b;
    var land = function(el, then){   /* the ghost glides into its slot, then the real icon takes its place */
      var p = dockPos(el), tx = p.x + p.w/2 - st.cx, ty = p.y + p.h/2 - st.cy;
      if(PREF.motion === 'off'){ gh.remove(); then(); return; }
      gh.classList.add('land'); gh.style.transform = 'translate('+tx+'px,'+ty+'px)';
      setTimeout(function(){ gh.remove(); then(); }, 190);
    };
    if(DGAP && DGAP.isConnected){
      var at = dockGapIndex(), list = dockList().filter(function(id){ return id !== st.id; }), was = dockList().join();
      if(st.pinned || st.slot > -1){ list.splice(Math.max(0, at), 0, st.id); }
      land(DGAP, function(){
        b.classList.remove('dk-away'); DGAP.remove();
        if(list.join() !== was){ dockSave(list); dockBuild(); if(!st.pinned) dockPop(st.id); }
      });
      return;
    }
    if(st.pinned && dockList().length > 1){
      var r = gh.getBoundingClientRect();
      dockPuff(r.left + r.width/2, r.top + r.height/2);
      gh.classList.add('poof'); setTimeout(function(){ gh.remove(); }, 260);
      dockUnpin(st.id, true);
      if(!WM.wins[st.id]) toast(APPS[st.id].title+' removed from the Dock', 'Find it again with \u2318K, or right-click the Dock to reset it.');
      return;
    }
    /* nowhere to go (a running app dropped off the dock, or the last app): put it back where it was */
    dockFlip(function(){ if(!DGAP.isConnected) dock.insertBefore(DGAP, b); });
    land(DGAP, function(){ b.classList.remove('dk-away'); DGAP.remove(); });
    if(st.pinned) toast('The Dock needs at least one app', 'Keep another app in the Dock first.');
  }
  $('#dock').addEventListener('pointerdown', function(e){
    if(e.button !== 0 || e.ctrlKey || e.pointerType === 'touch' || isMobile() || CTX.stack.length) return;
    var b = e.target.closest('.dk'); if(!b || b.tagName === 'A' || b.classList.contains('trash') || b.classList.contains('denfix') || !b.hasAttribute('data-dock') || b.classList.contains('gone')) return;
    if(APPS[b.getAttribute('data-dock')] && APPS[b.getAttribute('data-dock')].sys) return;   /* folder, Info and Trash windows are not apps to keep */
    var sx = e.clientX, sy = e.clientY, st = null;
    var mv = function(ev){ if(!st){ if(Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) < 7) return; st = ddStart(b, sx, sy); } ev.preventDefault(); ddMove(st, ev); };
    var up = function(ev){ document.removeEventListener('pointermove', mv, true); document.removeEventListener('pointerup', up, true); document.removeEventListener('pointercancel', up, true); if(st) ddEnd(st, ev); };
    document.addEventListener('pointermove', mv, true); document.addEventListener('pointerup', up, true); document.addEventListener('pointercancel', up, true);
  });
  $('#dock').addEventListener('dragstart', function(e){ if(e.target.closest && e.target.closest('.dk')) e.preventDefault(); });   /* the LinkedIn link would start the browser's own link drag */
  dockBuild();
/* tigOS core app.js, part 27: eggs. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- easter eggs: the Konami code throws a party (wallpaper cycles hue, the dock and pets dance, confetti, a jingle if the
     arcade synth is loaded), `do a barrel roll` rolls the whole desktop once, `sl` runs the classic locomotive across the terminal.
     Terminal commands from this part and the screensavers are registered through EXTRA_CMDS (13-pets.js merges them into CMD). ---------------- */
  var KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], kIdx = 0, PARTY = { t:0, raf:0 };
  document.addEventListener('keydown', function(e){
    var k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    kIdx = (k === KONAMI[kIdx]) ? kIdx + 1 : (k === KONAMI[0] ? 1 : 0);
    if(kIdx === KONAMI.length){ kIdx = 0; party(true, 'You found the Konami code.'); }
  });
  function confetti(on){
    var cv = $('#confetti'); if(!cv) return; cancelAnimationFrame(PARTY.raf);
    if(!on){ cv.hidden = true; return; }
    cv.hidden = false; var c = cv.getContext('2d'), W = cv.width = root.clientWidth, H = cv.height = root.clientHeight, bits = [], last = 0, born = performance.now();
    var spawn = function(n){ for(var i = 0; i < n; i++) bits.push({ x:Math.random()*W, y:-20 - Math.random()*H*.3, vx:(Math.random()-.5)*120, vy:60 + Math.random()*160, r:Math.random()*6.28, vr:(Math.random()-.5)*8, c:PAL[i % PAL.length], w:6 + Math.random()*6, h:8 + Math.random()*8 }); };
    spawn(160);
    var frame = function(ts){
      if(cv.hidden) return; PARTY.raf = requestAnimationFrame(frame);
      var dt = Math.min(.05, (ts - (last || ts))*.001); last = ts; c.clearRect(0, 0, W, H);
      if(ts - born < 6500 && Math.random() < .5) spawn(2);
      for(var k = bits.length - 1; k >= 0; k--){ var b = bits[k]; b.vy += 30*dt; b.x += (b.vx + Math.sin(ts*.002 + b.r)*40)*dt; b.y += b.vy*dt; b.r += b.vr*dt; if(b.y > H + 30){ bits.splice(k, 1); continue; }
        c.save(); c.translate(b.x, b.y); c.rotate(b.r); c.fillStyle = b.c; c.fillRect(-b.w/2, -b.h/2, b.w, b.h); c.restore(); }
      if(!bits.length) cv.hidden = true;
    };
    PARTY.raf = requestAnimationFrame(frame);
  }
  function jingle(){ var s = window.TIG_SFX; if(!s) return; try { [523, 659, 784, 1047, 784, 1047].forEach(function(f, i){ s.tone('triangle', f, f, .16, .12, i*.11); }); } catch(e){} }
  function party(on, why){
    clearTimeout(PARTY.t); if(on === undefined) on = !root.classList.contains('party');
    root.classList.toggle('party', on);
    if(on){ toast('Party mode', why || 'Everything dances for nine seconds.'); confetti(true); jingle(); PARTY.t = setTimeout(function(){ party(false); }, 9000); }
    else confetti(false);
  }
  function barrelRoll(){ if(root.classList.contains('roll') || PREF.motion === 'off') return; root.classList.add('roll'); setTimeout(function(){ root.classList.remove('roll'); }, 1300); }
  var TRAIN = [
    '      ====        ________                ___________ ',
    '  _D _|  |_______/        \\__I_I_____===__|_________| ',
    '   |(_)---  |   H\\________/ |   |        =|___ ___|   ',
    '   /     |  |   H  |  |     |   |         ||_| |_||   ',
    '  |      |  |   H  |__--------------------| [___] |   ',
    '  | ________|___H__/__|_____/[][]~\\_______|       |   ',
    '  |/ |   |-----------I_____I [][] []  D   |=======|__ ',
    '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ',
    ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ',
    '  \\_/      \\O=====O=====O=====O_/      \\_/            '];
  var EXTRA_CMDS = {
    screensaver: function(a, T){
      a = (a || '').trim().toLowerCase(); var p = a.split(/\s+/);
      if(!a || a === 'list' || a === 'help'){ T.print('screensavers: '+Object.keys(SAVERS).map(function(k){ return T.o(k)+(PREF.saver === k ? ' *' : ''); }).join('  ')+'  '+T.o('random')+(PREF.saver === 'random' ? ' *' : '')); T.print('usage: screensaver &lt;name&gt;  \u00b7  screensaver use &lt;name&gt;  \u00b7  screensaver idle &lt;minutes|off&gt;   (starts after '+(PREF.idle === 'off' ? 'never' : PREF.idle+' min')+')'); return; }
      if(p[0] === 'idle'){ if(!p[1]){ T.print('starts after: '+(PREF.idle === 'off' ? 'never' : PREF.idle+' min')); return; } var v = /^off|never|0$/.test(p[1]) ? 'off' : String(parseFloat(p[1]) || 'off'); setPref('idle', v); T.print('screensaver starts after '+(v === 'off' ? 'never' : v+' min'), 'ok'); return; }
      if(p[0] === 'use' || p[0] === 'set'){ if(SAVERS[p[1]] || p[1] === 'random'){ setPref('saver', p[1]); T.print('default screensaver: '+p[1], 'ok'); } else T.print('no screensaver called '+esc(p[1] || '')+'. try: '+Object.keys(SAVERS).join(', ')+', random', 'err'); return; }
      if(SAVERS[p[0]] || p[0] === 'random'){ T.print('starting '+p[0]+'\u2026 move the mouse or press a key to wake'); setTimeout(function(){ sleepEl.hidden = false; tick(); saverStart(p[0]); }, 350); return; }
      T.print('no screensaver called '+esc(p[0])+'. try: '+Object.keys(SAVERS).join(', ')+', random', 'err');
    },
    party: function(a, T){ var off = /^(off|stop|no|end)/i.test(a || ''); party(!off, 'You asked for it.'); T.print(off ? 'party over. back to work.' : 'party mode on for nine seconds.', 'ok'); },
    'do': function(a, T){ if(/barrel\s*roll/i.test(a || '')){ barrelRoll(); T.print('whee.', 'ok'); } else T.print('do what? try: '+T.o('do a barrel roll')); },
    sl: function(a, T){ T.art(TRAIN, 'train'); },
    konami: function(a, T){ T.print('up up down down left right left right b a. anywhere on the desktop.'); }
  };
/* tigOS core app.js, part 27: Jot, notes as text files. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- Jot ----------------
     A note is a desktop item (kind 'note', 27-desktop.js): an icon on the desktop or in a folder with the same menus, Trash and Get Info
     as everything else. Its text lives in its own store (localStorage 'tigos.notes' = { user: { id: text } }) so the desktop store stays
     small enough for the embed's cookie fallback. A note made from the desktop, a folder or Den is saved there at once; New Note inside
     Jot first asks for a name, a place and a starting template. Typing saves as you go, and a note still called untitled takes its name
     from its first line. The text never leaves this browser unless Download or Send to Chase takes it, so both are always one click away.
     The editor writes Markdown the way a word processor behaves (Enter carries a list on, Tab indents it, Cmd+B and Cmd+I wrap the word
     under the caret, a small format bar for the rest) and Preview sets it. Phones have no Jot. */
  var NOTE_EXT = /\.(txt|md|markdown|text)$/i;
  var JOT = { id:null, user:'', prev:false, t:0, pend:null, err:false, warned:false, want:null };
  /* ---------- the text store ---------- */
  function NB(user){
    if(!NB.s){ var s = null; try { s = JSON.parse(localStorage.getItem('tigos.notes') || '{}'); } catch(e){} NB.s = s && typeof s === 'object' && !Array.isArray(s) ? s : {}; }
    var k = user || USER.name, u = NB.s[k]; if(!u || typeof u !== 'object' || Array.isArray(u)) u = NB.s[k] = {};
    return u;
  }
  function nstoreOk(){ if(nstoreOk.v == null){ try { localStorage.setItem('tigos.nt', '1'); localStorage.removeItem('tigos.nt'); nstoreOk.v = true; } catch(e){ nstoreOk.v = false; } } return nstoreOk.v; }
  function nsave(){ try { localStorage.setItem('tigos.notes', JSON.stringify(NB.s || {})); return true; } catch(e){ return false; } }
  function nbody(id, user){ var v = NB(user)[id]; return typeof v === 'string' ? v : ''; }
  function nbodySet(id, v, user){ NB(user)[id] = String(v || ''); return nsave(); }
  function nforget(ids){ if(!ids || !ids.length) return; var u = NB(), n = 0; ids.forEach(function(id){ if(id in u){ delete u[id]; n++; } }); if(n) nsave(); }
  function ncut(s, n){ s = String(s || '').slice(0, n); return /[\ud800-\udbff]$/.test(s) ? s.slice(0, -1) : s; }   /* never split an emoji in two */
  function nwords(t){ t = String(t || '').trim(); return t ? t.split(/\s+/).length : 0; }
  /* ---------- names: always with an extension (.txt unless it is .md), never clashing in one place ---------- */
  function nname(v){ v = String(v || '').replace(/[\/\\:]/g, '-').replace(/\s+/g, ' ').trim(); if(!v || NOTE_EXT.test(v) && !v.replace(NOTE_EXT, '').trim()) v = 'untitled'; if(!NOTE_EXT.test(v)) v = ncut(v, 36).trim()+'.txt'; return ncut(v, 40); }
  function nsplit(n){ var m = String(n || '').match(NOTE_EXT); return m ? { base:n.slice(0, n.length - m[0].length), ext:m[0] } : { base:n || 'untitled', ext:'.txt' }; }
  function nnameNew(name, where, skip){ var p = nsplit(nname(name)), n = p.base+p.ext, i = 2; while(!dnameFree(n, where, skip)) n = p.base+' '+(i++)+p.ext; return n; }
  function ntitleOf(text){ var l = String(text || '').split('\n').map(function(x){ return x.replace(/^\s*(#{1,6}\s+|[-*+]\s+(\[[ xX]\]\s+)?|\d+[.)]\s+|>\s*)/, '').replace(/[*_`~#\[\]]/g, '').trim(); }).filter(Boolean)[0] || ''; return ncut(l, 32).trim(); }
  /* a note by name, for the Terminal (open, cat): "groceries", "groceries.txt" or with quotes */
  function jnoteNamed(n){ if(isPhone()) return null; n = String(n || '').trim().replace(/^["']+|["']+$/g, '').toLowerCase(); if(!n) return null; return jnotes().filter(function(it){ var l = it.name.toLowerCase(); return l === n || nsplit(l).base === n; })[0] || null; }
  function jlive(it){ if(!it || it.kind !== 'note' || it.in === 'trash') return false; var f = it.in && ditem(it.in); return !it.in || !!(f && f.in !== 'trash'); }
  function jnotes(){ var d = DK(); return Object.keys(d.items).map(function(k){ return d.items[k]; }).filter(jlive).sort(function(a, b){ return (b.m || b.t) - (a.m || a.t); }); }
  function jotLast(){ var l = NB()._last, it = l && ditem(l); if(jlive(it)) return it.id; var all = jnotes(); return all.length ? all[0].id : null; }
  function jwhen(t){ try { var d = new Date(t), n = new Date(), y = new Date(n.getTime() - 864e5); return d.toDateString() === n.toDateString() ? d.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' }) : d.toDateString() === y.toDateString() ? 'Yesterday' : d.toLocaleDateString('en-US', { month:'short', day:'numeric' }); } catch(e){ return ''; } }
  /* a desktop cell for a new item at a point (desktop coordinates), the nearest free one if it is taken */
  function dplace(it, at){ var g = dgrid(), want = g.at(at.x, at.y), taken = {}; Object.keys(DPOS).forEach(function(k){ if(k !== it.id) taken[DPOS[k].c+','+DPOS[k].r] = 1; }); var p = taken[want.c+','+want.r] ? dnear(g, want.c, want.r, taken) : want; it.c = p.c; it.r = p.r; DPOS[it.id] = p; }
  /* ---------- making notes ---------- */
  function jotCreate(where, at, text, name){
    var f = where && ditem(where); where = f && f.kind === 'folder' && f.in !== 'trash' ? where : '';   /* the folder may have gone meanwhile */
    var it = dnew('note', { name:nnameNew(name || 'untitled.txt', where), in:where, m:Date.now() });
    if(!name) it.auto = true;   /* named from its first line until someone names it */
    if(!where && at) dplace(it, at);
    nbodySet(it.id, text || '');
    if(!where) delete DK().view.icons;   /* like a new folder, a new note always shows */
    deskSave(); drender();
    return it;
  }
  /* New Note from the desktop, a folder or Den: saved there at once, then open to write in */
  function jotNewIn(where, at){ if(isPhone()) return null; if(appGone('jot')){ open('jot'); return null; }   /* removed from Terminal: say so, make nothing */
    var it = jotCreate(where, at); if(!where) dflash(it.id); jotOpen(it.id); jotFocus(); return it; }
  function jotOpen(id, from){
    if(isPhone()) return null;
    var it = id ? ditem(id) : null; if(id && !jlive(it)) return null;
    var w = WM.wins.jot;
    if(w){ if(w.min) restore(w); focus(w); if(id) jotLoad(id); return w; }
    JOT.want = id || null; return open('jot', { from:from });
  }
  function jotFocus(end){ setTimeout(function(){ var w = WM.wins.jot, ta = w && $('.jot-text', w.body); if(!ta || ta.offsetParent === null) return; try { ta.focus({ preventScroll:true }); } catch(e){ ta.focus(); } var n = ta.value.length; ta.setSelectionRange(n, n); }, 90); }
  /* ---------- the window ---------- */
  var JOT_TPL = [
    ['blank', 'Blank', function(){ return ''; }],
    ['todo', 'Checklist', function(){ return '# To-do\n\n- [ ] \n'; }],
    ['meet', 'Meeting notes', function(){ var d = ''; try { d = new Date().toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' }); } catch(e){} return '# Meeting notes\n\nDate: '+d+'\nWith: \n\n## Notes\n- \n\n## Next steps\n- [ ] \n'; }]
  ];
  RENDER.jot = function(w){
    w.el.classList.add('jot-win');
    var tb = function(k, icon, label, text){ return '<button type="button" data-jot="'+k+'" aria-label="'+label+'" title="'+label+'">'+ic(icon)+(text ? '<span>'+text+'</span>' : '')+'</button>'; };
    var fb = function(k, icon, label){ return '<button type="button" data-fmt="'+k+'" aria-label="'+label+'" title="'+label+'">'+ic(icon)+'</button>'; };
    w.tools.innerHTML = tb('new', 'plus', 'New Note', 'New')+tb('prev', 'eye', 'Preview', 'Preview')+tb('dl', 'download', 'Download a copy')+tb('up', 'upload', 'Open a text file from your computer')+tb('mail', 'mail', 'Send this note to Chase');
    w.body.innerHTML = '<div class="jotw">'+
      '<aside class="jot-side"><div class="jot-list" role="listbox" aria-label="Notes"></div><button type="button" class="jot-den">'+ic('den')+'Show in Den</button></aside>'+
      '<section class="jot-doc">'+
        '<div class="jot-head"><input class="jot-name" type="text" maxlength="40" spellcheck="false" aria-label="Name"><label class="jot-wl">in <select class="jot-where" aria-label="Where it is saved"></select></label></div>'+
        '<div class="jot-bar" role="toolbar" aria-label="Format">'+fb('head', 'head', 'Heading')+fb('bold', 'bold', 'Bold (\u2318B)')+fb('italic', 'italic', 'Italic (\u2318I)')+fb('list', 'list', 'Bulleted list')+fb('check', 'check', 'Checklist')+fb('link', 'link', 'Link (\u2318K)')+'</div>'+
        '<textarea class="jot-text" spellcheck="true" maxlength="100000" aria-label="Note" placeholder="Start writing. Markdown works too: # for a heading, - for a list, - [ ] for a to-do."></textarea>'+
        '<div class="jot-prev jot-md" hidden></div>'+
        '<div class="jot-empty" hidden><span class="tile jot">'+ic('jot')+'</span><b>No notes yet</b><p>Write one here, right-click the desktop for New Note, or drop a text file on this window.</p><button type="button" class="jot-go" data-jot="new">New Note</button></div>'+
        '<div class="jot-foot"><span class="jot-count"></span><span class="jot-state"></span></div>'+
      '</section>'+
      '<input class="jot-file" type="file" accept=".txt,.md,.markdown,.text,text/plain,text/markdown" multiple hidden>'+
    '</div>';
    var q = function(s){ return $(s, w.body); }, ta = q('.jot-text'), nm = q('.jot-name'), wh = q('.jot-where'), file = q('.jot-file');
    $$('[data-jot]', w.el).forEach(function(b){ b.addEventListener('click', function(){
      var k = b.getAttribute('data-jot');
      if(k === 'new') jotNewAsk();
      if(k === 'prev'){ JOT.prev = !JOT.prev; jotPrev(); }
      if(k === 'dl' && JOT.id) jotDownload(JOT.id);
      if(k === 'mail' && JOT.id) jotMail(JOT.id);
      if(k === 'up') file.click();
    }); });
    $$('[data-fmt]', w.body).forEach(function(b){
      b.addEventListener('pointerdown', function(e){ e.preventDefault(); });   /* keep the caret in the text */
      b.addEventListener('click', function(){ var k = b.getAttribute('data-fmt'); if(k === 'bold') jwrap(ta, '**'); else if(k === 'italic') jwrap(ta, '_'); else if(k === 'link') jlink(ta); else jprefix(ta, k); });
    });
    file.addEventListener('change', function(){ nimport(file.files, '', null, function(made){ jotLoad(made[made.length - 1].id); }); file.value = ''; });
    q('.jot-list').addEventListener('click', function(e){ var b = e.target.closest('[data-note]'); if(b && b.getAttribute('data-note') !== JOT.id) jotLoad(b.getAttribute('data-note')); });
    q('.jot-den').addEventListener('click', function(){ var it = JOT.id && ditem(JOT.id); denOpen(it ? dinside(it) : '', it ? it.id : null); });
    ta.addEventListener('input', jotDirty);
    ta.addEventListener('keydown', function(e){ jkeys(ta, e); });
    var commit = function(){ var it = JOT.id && ditem(JOT.id); if(!it) return; var v = nm.value.replace(/\s+/g, ' ').trim(); if(!v){ nm.value = it.name; return; } v = nname(v); if(v === it.name){ nm.value = v; return; }
      if(!dnameFree(v, dinside(it), it.id)){ toast('The name \u201c'+v+'\u201d is already taken', 'Please choose a different name.'); nm.value = it.name; return; }
      it.name = v; delete it.auto; nm.value = v; deskSave(); drender(); winTitles(); };
    nm.addEventListener('keydown', function(e){ e.stopPropagation(); if(e.key === 'Enter'){ e.preventDefault(); commit(); ta.focus(); } if(e.key === 'Escape'){ var it = ditem(JOT.id); nm.value = it ? it.name : ''; ta.focus(); } });
    nm.addEventListener('change', commit); nm.addEventListener('blur', commit);
    wh.addEventListener('change', function(){ var it = JOT.id && ditem(JOT.id); if(!it) return; var to = wh.value; if(to === dinside(it)) return; jotFlush(); if(dmove([it.id], to)){ if(to === '') dshow(); toast('Moved to '+(to ? ditem(to).name : 'the Desktop'), it.name); } });
    w.destroy = function(){ jotFlush(); var sh = $('.jsheet-bg', w.el); if(sh) sh.remove(); };
    var want = JOT.want; JOT.want = null;
    jotLoad(want || jotLast());
  };
  function jotLoad(id){
    var w = WM.wins.jot; if(!w || !$('.jotw', w.body)) return;
    jotFlush();
    var it = id ? ditem(id) : null; if(!jlive(it)) it = null;
    JOT.id = it ? it.id : null; JOT.user = USER.name; JOT.err = false;
    if(it){ NB()._last = it.id; nsave(); }
    var q = function(s){ return $(s, w.body); }, ta = q('.jot-text');
    q('.jot-empty').hidden = !!it;
    ['.jot-head', '.jot-bar', '.jot-foot'].forEach(function(s){ q(s).hidden = !it; });
    ta.hidden = !it;
    if(it){ ta.value = nbody(it.id); ta.scrollTop = 0; q('.jot-name').value = it.name; }
    $$('[data-jot="dl"], [data-jot="mail"], [data-jot="prev"]', w.tools).forEach(function(b){ b.disabled = !it; });
    jotWhere(); jotList(); jotTitle(); jotFoot(); jotPrev();
  }
  /* any change to the desktop (a rename, a move, the Trash) reaches the open note */
  function jotSync(){
    var w = WM.wins.jot; if(!w || !$('.jotw', w.body)) return;
    if(JOT.user !== USER.name){ jotLoad(jotLast()); return; }
    var it = JOT.id && ditem(JOT.id);
    if(JOT.id ? !jlive(it) : jnotes().length){ jotLoad(jotLast()); return; }
    if(it){ var nm = $('.jot-name', w.body); if(document.activeElement !== nm) nm.value = it.name; }
    jotWhere(); jotList(); jotTitle();
  }
  function jotTitle(){ var w = WM.wins.jot; if(!w) return; var it = JOT.id && ditem(JOT.id), t = $('.win-title', w.el); if(t) t.innerHTML = ic('jot')+esc(it ? it.name : 'Jot'); w.el.setAttribute('aria-label', it ? 'Jot, '+it.name : 'Jot'); }
  function jotWhere(){
    var w = WM.wins.jot; if(!w) return; var sel = $('.jot-where', w.body), it = JOT.id && ditem(JOT.id); if(!sel || !it) return;
    var cur = dinside(it), fs = ditems('').filter(function(x){ return x.kind === 'folder'; }).sort(dcmp('name'));
    var html = '<option value="">Desktop</option>'+fs.map(function(f){ return '<option value="'+f.id+'">'+esc(f.name)+'</option>'; }).join('');
    if(sel._h !== html){ sel.innerHTML = html; sel._h = html; }
    sel.value = cur;
  }
  function jotList(){
    var w = WM.wins.jot; if(!w) return; var box = $('.jot-list', w.body); if(!box) return;
    var all = jnotes();
    box.innerHTML = all.length ? all.map(function(it){
      var t = (it.id === JOT.id && JOT.pend ? JOT.pend.ta.value : nbody(it.id)), lines = t.split('\n').map(function(x){ return x.trim(); }).filter(Boolean), first = ntitleOf(t), peek = lines.slice(1).map(function(x){ return x.replace(/^(#{1,6}\s+|[-*+]\s+(\[[ xX]\]\s+)?|\d+[.)]\s+|>\s*)/, ''); }).join(' ').replace(/[#*_`>\[\]]/g, '').trim() || (first ? '' : 'No text yet');
      return '<button type="button" class="jot-it'+(it.id === JOT.id ? ' on' : '')+'" role="option" aria-selected="'+(it.id === JOT.id)+'" data-note="'+it.id+'"><b>'+esc(it.name)+'</b><span>'+esc(peek.slice(0, 80))+'</span><em>'+esc(jwhen(it.m || it.t))+' \u00b7 '+esc(dwhere(it))+'</em></button>';
    }).join('') : '<div class="jot-none">No notes yet</div>';
  }
  function jotFoot(){
    var w = WM.wins.jot; if(!w) return; var ta = $('.jot-text', w.body), c = $('.jot-count', w.body), s = $('.jot-state', w.body); if(!ta || !c) return;
    var n = nwords(ta.value); c.textContent = (n === 1 ? '1 word' : n+' words');
    s.textContent = !nstoreOk() ? 'This browser won\u2019t keep notes. Download to keep a copy.' : JOT.err ? 'Not saved: this browser is out of room. Download a copy.' : JOT.pend ? 'Saving\u2026' : 'Saved in this browser \u00b7 Download to keep a copy';
    s.classList.toggle('bad', !nstoreOk() || JOT.err);
  }
  function jotPrev(){
    var w = WM.wins.jot; if(!w) return; var ta = $('.jot-text', w.body), pv = $('.jot-prev', w.body), bar = $('.jot-bar', w.body), b = $('[data-jot="prev"]', w.tools), on = JOT.prev && !!JOT.id;
    if(b){ b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.classList.toggle('on', on); }
    if(!JOT.id) return;
    ta.hidden = on; pv.hidden = !on; bar.classList.toggle('jb-off', on);
    if(on){ pv.innerHTML = jmd(ta.value); $$('.jbox', pv).forEach(function(x){ x.addEventListener('click', function(){ jtick(ta, +x.closest('[data-ln]').getAttribute('data-ln')); jotPrev(); }); }); }
  }
  /* typing saves after a short pause; closing, switching notes or Cmd+S saves at once */
  function jotDirty(){ var w = WM.wins.jot; if(!w || !JOT.id) return; clearTimeout(JOT.t); JOT.pend = { id:JOT.id, user:JOT.user, ta:$('.jot-text', w.body) }; JOT.t = setTimeout(jotFlush, 400); jotFoot(); }
  function jotFlush(){
    clearTimeout(JOT.t); var p = JOT.pend; JOT.pend = null; if(!p) return;
    var d = DESKS[p.user], it = d && d.items && d.items[p.id]; if(!it) return;
    var v = p.ta.value, ok = nbodySet(p.id, v, p.user); it.m = Date.now();
    if(it.auto){ var t = ntitleOf(v); if(t && p.user === USER.name){ var nn = nnameNew(t, dinside(it), it.id); if(nn !== it.name) it.name = nn; } }
    deskSave(); JOT.err = !ok;
    if(!ok && !JOT.warned){ JOT.warned = true; toast('Jot couldn\u2019t save', 'This browser is out of room for notes. Download a copy to keep it.'); }
    if(p.user === USER.name){ drender(); winTitles(); }
    jotFoot();
  }
  function jotNewAsk(){
    if(isPhone()) return;
    var w = WM.wins.jot || open('jot'); if(!w) return; if(w.min) restore(w); focus(w);
    var old = $('.jsheet-bg', w.el); if(old) old.remove();
    var cur = JOT.id && ditem(JOT.id), pick = cur ? dinside(cur) : '', tpl = 'blank';
    if(pick === 'trash') pick = '';
    var bg = document.createElement('div'); bg.className = 'jsheet-bg';
    bg.innerHTML = '<div class="jsheet" role="dialog" aria-modal="true" aria-label="New Note"><b>New Note</b>'+
      '<label class="js-f"><span>Name</span><input class="js-name" type="text" maxlength="40" spellcheck="false" value="untitled.txt"></label>'+
      '<div class="js-f"><span>Where</span><div class="js-where" role="listbox" aria-label="Where"></div></div>'+
      '<div class="js-f"><span>Start from</span><div class="js-tpl" role="radiogroup" aria-label="Start from">'+JOT_TPL.map(function(t){ return '<button type="button" role="radio" data-tpl="'+t[0]+'">'+t[1]+'</button>'; }).join('')+'</div></div>'+
      '<div class="js-row"><button type="button" class="js-nf">'+ic('folder-plus')+'New Folder</button><span class="sp"></span><button type="button" data-no>Cancel</button><button type="button" class="ok" data-ok>Create</button></div></div>';
    var bar = $('.win-bar', w.el); bg.style.top = (bar ? bar.offsetHeight : 44)+'px';
    w.el.appendChild(bg);
    var name = $('.js-name', bg), list = $('.js-where', bg);
    var drawWhere = function(){
      var fs = ditems('').filter(function(x){ return x.kind === 'folder'; }).sort(dcmp('name')); if(pick && !fs.some(function(f){ return f.id === pick; })) pick = '';
      list.innerHTML = [{ id:'', name:'Desktop', i:'wall' }].concat(fs.map(function(f){ return { id:f.id, name:f.name, i:'folder' }; })).map(function(o){ return '<button type="button" role="option" aria-selected="'+(o.id === pick)+'" class="'+(o.id === pick ? 'on' : '')+'" data-w="'+o.id+'">'+ic(o.i)+'<span>'+esc(o.name)+'</span></button>'; }).join('');
    };
    var drawTpl = function(){ $$('[data-tpl]', bg).forEach(function(b){ var on = b.getAttribute('data-tpl') === tpl; b.classList.toggle('on', on); b.setAttribute('aria-checked', on ? 'true' : 'false'); }); };
    drawWhere(); drawTpl();
    var done = function(){ bg.classList.add('out'); setTimeout(function(){ bg.remove(); }, 160); };
    var make = function(){
      var v = name.value.replace(/\s+/g, ' ').trim(), named = v && nname(v) !== 'untitled.txt';
      var t = JOT_TPL.filter(function(x){ return x[0] === tpl; })[0], it = jotCreate(pick, null, t ? t[2]() : '', named ? v : null); pick = it.in || '';
      done(); jotLoad(it.id); if(JOT.prev){ JOT.prev = false; jotPrev(); } jotFocus();
      toast(it.name+' saved', 'In '+(pick ? ditem(pick).name : 'the Desktop')+'. It saves as you type.');
    };
    list.addEventListener('click', function(e){ var b = e.target.closest('[data-w]'); if(!b) return; pick = b.getAttribute('data-w'); drawWhere(); });
    list.addEventListener('dblclick', function(e){ if(e.target.closest('[data-w]')) make(); });
    $('.js-tpl', bg).addEventListener('click', function(e){ var b = e.target.closest('[data-tpl]'); if(!b) return; tpl = b.getAttribute('data-tpl'); drawTpl(); });
    $('.js-nf', bg).addEventListener('click', function(){   /* a new folder, named right here, then picked */
      var b = this, inp = document.createElement('input'); inp.className = 'js-nfin'; inp.type = 'text'; inp.maxLength = 40; inp.placeholder = 'Folder name'; inp.setAttribute('aria-label', 'Folder name'); b.replaceWith(inp); inp.focus();
      var gone = false, fin = function(keep){ if(gone || !inp.isConnected) return; gone = true; var v = inp.value.replace(/\s+/g, ' ').trim().slice(0, 40); inp.replaceWith(b);   /* removing the field blurs it: once only */ if(!keep) return; var f = dnew('folder', { name:dnameNew(v || 'untitled folder', '') }); delete DK().view.icons; deskSave(); drender(); pick = f.id; drawWhere(); name.focus(); };
      inp.addEventListener('keydown', function(e){ e.stopPropagation(); if(e.key === 'Enter'){ e.preventDefault(); fin(true); } if(e.key === 'Escape'){ e.preventDefault(); fin(false); name.focus(); } });
      inp.addEventListener('blur', function(){ fin(!!inp.value.trim()); });
    });
    $('[data-no]', bg).addEventListener('click', done);
    $('[data-ok]', bg).addEventListener('click', make);
    bg.addEventListener('keydown', function(e){ if(e.target.classList.contains('js-nfin')) return; e.stopPropagation(); if(e.key === 'Escape'){ e.preventDefault(); done(); } if(e.key === 'Enter' && !e.target.closest('[data-no], .js-nf, [data-tpl]')){ e.preventDefault(); make(); } });
    bg.addEventListener('pointerdown', function(e){ if(e.target === bg){ e.preventDefault(); var s = $('.jsheet', bg); s.classList.remove('nope'); void s.offsetWidth; s.classList.add('nope'); } });
    setTimeout(function(){ name.focus(); name.setSelectionRange(0, nsplit(name.value).base.length); }, 30);
  }
  /* ---------- out of the browser: download a copy, email it to Chase ---------- */
  function jotDownload(id){
    var it = ditem(id); if(!it) return; if(JOT.id === id) jotFlush();
    var md = /\.(md|markdown)$/i.test(it.name), b = new Blob([nbody(id)], { type:(md ? 'text/markdown' : 'text/plain')+';charset=utf-8' }), u = URL.createObjectURL(b), a = document.createElement('a');
    a.href = u; a.download = it.name; a.rel = 'noopener'; root.appendChild(a); a.click(); a.remove(); setTimeout(function(){ URL.revokeObjectURL(u); }, 4000);
    toast('Downloading '+it.name, 'A copy to keep outside this browser.');
  }
  function jotMail(id){
    var it = ditem(id); if(!it) return; if(JOT.id === id) jotFlush();
    var C = TIG.contact, full = nbody(id), long = full.length > 1800, body = long ? ncut(full, 1800).replace(/\s+\S*$/, '')+'\n\n[The rest of this note is on my clipboard.]' : full;
    if(long){ try { navigator.clipboard.writeText(full).catch(function(){}); } catch(e){} }
    var a = document.createElement('a'); a.href = 'mailto:'+C.email+'?subject='+encodeURIComponent('A note for Chase: '+nsplit(it.name).base)+'&body='+encodeURIComponent(body); root.appendChild(a); a.click(); a.remove();
    toast('Opening your email app', long ? 'The note is long, so the full text is on your clipboard to paste in.' : 'Addressed to '+C.email+'.');
  }
  function noteActions(id){ return [{ t:'Download a Copy', i:'download', fn:function(){ jotDownload(id); } }, { t:'Send to Chase', i:'mail', fn:function(){ jotMail(id); } }]; }
  /* ---------- in from the computer: drop text files on the desktop, a folder, Den or Jot, or use Open in Jot ---------- */
  function nimport(files, where, at, then){
    var list = Array.prototype.slice.call(files || []), made = [], skip = 0, big = 0, done = 0, n = Math.min(list.length, 12);
    if(!n) return;
    var fin = function(){ if(++done < n) return;
      var place = made.length && made[0].in ? ditem(made[0].in).name : 'the Desktop', extra = (skip ? ' Jot opens text files (.txt, .md); '+skip+' skipped.' : '')+(big ? ' '+big+' over 256 KB left out.' : '');
      if(made.length) toast(made.length === 1 ? made[0].name+' added to '+place : made.length+' notes added to '+place, (made.length === 1 ? 'Double-click it to open.' : '')+extra);
      else toast('Nothing added', extra.trim() || 'Jot opens text files (.txt, .md).');
      if(made.length && then) then(made);
    };
    list.slice(0, n).forEach(function(f){
      if(!(NOTE_EXT.test(f.name) || /^text\/(plain|markdown|x-markdown)$/.test(f.type))){ skip++; fin(); return; }
      if(f.size > 262144){ big++; fin(); return; }
      var rd = f.text ? f.text() : new Promise(function(res, rej){ var r = new FileReader(); r.onload = function(){ res(String(r.result)); }; r.onerror = rej; r.readAsText(f); });
      rd.then(function(t){ made.push(jotCreate(where, at, String(t).replace(/\r\n?/g, '\n').slice(0, 100000), f.name)); fin(); }, function(){ skip++; fin(); });
    });
  }
  var FILE_HI = null;
  function fileHi(el){ if(FILE_HI === el) return; if(FILE_HI) FILE_HI.classList.remove('file-on'); FILE_HI = el; if(el) el.classList.add('file-on'); }
  function fileTarget(t){
    if(isPhone() || !t || !t.closest || t.closest('.dlg-bg, .jsheet-bg, #login, #sleep')) return null;
    var w = t.closest('.win');
    if(w){ var id = w.dataset.app, a = APPS[id] || {};
      if(id === 'jot') return { where:'', open:true, el:w };
      if(id === 'den'){ var D = DEN.loc; return D === '' || D === '*notes' ? { where:'', el:w } : D !== 'trash' && D !== '*apps' && denOk(D) ? { where:D, el:w } : null; }
      if(a.sys === 'folder') return { where:a.folder, el:w };
      return null; }
    var fi = t.closest('#dicons .dicon[data-kind="folder"]'); if(fi) return { where:fi.getAttribute('data-id'), el:fi };
    if(t.closest('#desktop')) return { where:'', at:true, el:desk };
    return null;
  }
  var hasFiles = function(e){ var t = e.dataTransfer && e.dataTransfer.types; return !!t && Array.prototype.indexOf.call(t, 'Files') > -1; };
  root.addEventListener('dragover', function(e){ if(!hasFiles(e)) return; e.preventDefault(); var tg = fileTarget(e.target); e.dataTransfer.dropEffect = tg ? 'copy' : 'none'; fileHi(tg ? tg.el : null); });   /* never let the browser leave the site to show a dropped file */
  root.addEventListener('dragleave', function(e){ if(!e.relatedTarget || !root.contains(e.relatedTarget)) fileHi(null); });
  root.addEventListener('drop', function(e){
    if(!hasFiles(e)) return; e.preventDefault(); fileHi(null);
    var tg = fileTarget(e.target); if(!tg){ if(!isPhone()) toast('Drop text files on the desktop', 'Or on a folder, Den or Jot.'); return; }
    var rr = root.getBoundingClientRect(), at = tg.at && !isMobile() ? deskXY(e.clientX - rr.left, e.clientY - rr.top) : null;
    nimport(e.dataTransfer.files, tg.where, at, function(made){ if(tg.open) jotOpen(made[made.length - 1].id); else if(!tg.where) dflash(made[made.length - 1].id); });
  });
  window.addEventListener('pagehide', function(){ jotFlush(); });   /* closing or reloading the tab inside the pause still saves */
  document.addEventListener('visibilitychange', function(){ if(document.hidden) jotFlush(); });
  window.addEventListener('storage', function(e){ if(e.key !== 'tigos.notes') return; NB.s = null; jotSync(); });   /* another tab wrote notes: read them again before this one writes */
  document.addEventListener('keydown', function(e){   /* Cmd+S in Jot saves now instead of saving the web page */
    if(!(e.metaKey || e.ctrlKey) || e.shiftKey || (e.key !== 's' && e.key !== 'S')) return;
    var w = WM.wins.jot; if(!w || w.min || !w.el.classList.contains('focus')) return;
    e.preventDefault(); jotFlush(); var s = $('.jot-state', w.body); if(s){ s.classList.remove('flash'); void s.offsetWidth; s.classList.add('flash'); }
  });
  /* ---------- the editor: Markdown that behaves like a word processor ---------- */
  function jput(ta, s, e, str, s2, e2){   /* replace a range so Cmd+Z can undo it */
    ta.focus(); ta.setSelectionRange(s, e); var ok = false;
    try { ok = document.execCommand('insertText', false, str); } catch(x){}
    if(!ok || ta.value.slice(s, s + str.length) !== str){ ta.setRangeText(str, s, e, 'end'); ta.dispatchEvent(new Event('input', { bubbles:true })); }
    ta.setSelectionRange(s2, e2 == null ? s2 : e2);
  }
  function jwrap(ta, mk){
    var v = ta.value, s = ta.selectionStart, e = ta.selectionEnd, L = mk.length;
    if(s === e){ var a = s, b = s; while(a > 0 && /[\w'\u2019-]/.test(v[a - 1])) a--; while(b < v.length && /[\w'\u2019-]/.test(v[b])) b++; s = a; e = b; }   /* no selection: the word under the caret */
    var inner = v.slice(s, e);
    if(v.slice(s - L, s) === mk && v.slice(e, e + L) === mk){ jput(ta, s - L, e + L, inner, s - L, e - L); return; }   /* already wrapped: unwrap */
    if(inner.length > 2*L && inner.slice(0, L) === mk && inner.slice(-L) === mk){ jput(ta, s, e, inner.slice(L, -L), s, e - 2*L); return; }
    jput(ta, s, e, mk + inner + mk, s + L, e + L);
  }
  function jlink(ta){ var s = ta.selectionStart, e = ta.selectionEnd, t = ta.value.slice(s, e) || 'link', str = '['+t+'](https://)'; jput(ta, s, e, str, s + t.length + 3, s + str.length - 1); }
  function jprefix(ta, kind){
    var v = ta.value, s = ta.selectionStart, e = ta.selectionEnd, a = v.lastIndexOf('\n', s - 1) + 1, b = v.indexOf('\n', e); if(b < 0) b = v.length;
    var lines = v.slice(a, b).split('\n'), has = { head:/^#{1,6}\s/, list:/^\s*[-*+]\s+(?!\[[ xX]\]\s)/, check:/^\s*[-*+]\s+\[[ xX]\]\s/ }[kind], add = { head:'# ', list:'- ', check:'- [ ] ' }[kind];
    var used = lines.filter(function(l){ return l.trim(); }), all = used.length > 0 && used.every(function(l){ return has.test(l); });
    var out = lines.map(function(l){ if(!l.trim() && lines.length > 1) return l; var m = l.match(/^(\s*)(?:#{1,6}\s+|[-*+]\s+\[[ xX]\]\s+|[-*+]\s+|\d+[.)]\s+)?(.*)$/); if(all) return m[1] + m[2]; return kind === 'head' ? add + m[2] : m[1] + add + m[2]; }).join('\n');
    jput(ta, a, b, out, a + out.length);
  }
  function jtick(ta, ln){ var L = ta.value.split('\n'); if(!(ln >= 0 && ln < L.length)) return; var l = L[ln], m = l.match(/^(\s*[-*+]\s+\[)([ xX])(\]\s)/); if(!m) return; var at = L.slice(0, ln).join('\n').length + (ln ? 1 : 0) + m[1].length; jput(ta, at, at + 1, m[2] === ' ' ? 'x' : ' ', at + 1); }
  function jkeys(ta, e){
    var meta = e.metaKey || e.ctrlKey, k = (e.key || '').toLowerCase();
    if(meta && !e.shiftKey && !e.altKey){ if(k === 'b'){ e.preventDefault(); jwrap(ta, '**'); return; } if(k === 'i'){ e.preventDefault(); jwrap(ta, '_'); return; } if(k === 'k'){ e.preventDefault(); e.stopPropagation(); jlink(ta); return; } }
    if(e.key === 'Enter' && !e.shiftKey && !meta && !e.altKey && !e.isComposing){   /* Enter carries a list on; Enter on an empty item ends it */
      var v = ta.value, s = ta.selectionStart; if(s !== ta.selectionEnd) return;
      var a = v.lastIndexOf('\n', s - 1) + 1, z = v.indexOf('\n', s); if(z < 0) z = v.length;
      var line = v.slice(a, s), m = line.match(/^(\s*)([-*+]\s+\[[ xX]\]\s+|[-*+]\s+|(\d+)([.)])\s+|>\s?)/); if(!m) return;
      e.preventDefault();
      if(line.length === m[0].length && !v.slice(s, z).trim()){ jput(ta, a, z, '', a); return; }
      var mk = m[3] ? (+m[3] + 1) + m[4] + ' ' : m[2].replace(/\[[xX]\]/, '[ ]');
      jput(ta, s, s, '\n' + m[1] + mk, s + 1 + m[1].length + mk.length); return;
    }
    if(e.key === 'Tab' && !meta && !e.altKey){   /* Tab indents a list item, Shift+Tab brings it back; anywhere else Tab leaves the text, as it should */
      var v2 = ta.value, s2 = ta.selectionStart, e2 = ta.selectionEnd, a2 = v2.lastIndexOf('\n', s2 - 1) + 1, b2 = v2.indexOf('\n', e2); if(b2 < 0) b2 = v2.length;
      var ls = v2.slice(a2, b2).split('\n'), items = ls.filter(function(l){ return l.trim(); });
      if(!items.length || !items.every(function(l){ return /^\s*([-*+]|\d+[.)])\s/.test(l); })) return;
      e.preventDefault();
      var out = ls.map(function(l){ return !l.trim() ? l : e.shiftKey ? l.replace(/^ {1,2}/, '') : '  ' + l; }).join('\n'), d = out.length - (b2 - a2);
      if(ls.length === 1) jput(ta, a2, b2, out, Math.max(a2, s2 + d)); else jput(ta, a2, b2, out, a2, a2 + out.length);
    }
  }
  /* ---------- Preview: a small, safe Markdown (everything is escaped first; links only to http, https or mailto) ---------- */
  function jinline(s){
    var keep = [], stash = function(h){ keep.push(h); return '\u0001'+(keep.length - 1)+'\u0002'; };
    s = s.replace(/`([^`]+)`/g, function(_, c){ return stash('<code>'+c+'</code>'); });
    s = s.replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^\s)]+)\)/g, function(_, t, u){ return stash('<a href="'+u+'" target="_blank" rel="noopener noreferrer">'+t+'</a>'); });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/__([^_]+)__/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^\w*])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>').replace(/(^|[^\w])_([^_\s][^_]*?)_(?!\w)/g, '$1<em>$2</em>');
    s = s.replace(/~~([^~]+)~~/g, '<del>$1</del>');
    return s.replace(/\u0001(\d+)\u0002/g, function(_, i){ return keep[+i]; });
  }
  function jmd(src){
    var L = String(src || '').replace(/\r\n?/g, '\n').split('\n'), out = [], para = [], list = null, m;
    var flush = function(){ if(para.length){ out.push('<p>'+para.map(function(x){ return jinline(esc(x)); }).join('<br>')+'</p>'); para = []; } };
    var open = function(tag, start){ if(list !== tag){ end(); out.push('<'+tag+(start > 1 ? ' start="'+start+'"' : '')+'>'); list = tag; } };
    var end = function(){ if(list){ out.push('</'+list+'>'); list = null; } };
    var ind = function(sp){ return ' style="--ind:'+Math.min(6, Math.floor(sp.replace(/\t/g, '  ').length / 2))+'"'; };
    for(var i = 0; i < L.length; i++){
      var raw = L[i];
      if(/^\s*```/.test(raw)){ flush(); end(); var code = []; i++; while(i < L.length && !/^\s*```/.test(L[i])){ code.push(esc(L[i])); i++; } out.push('<pre><code>'+code.join('\n')+'</code></pre>'); continue; }
      if(!raw.trim()){ flush(); end(); continue; }
      if((m = raw.match(/^(#{1,3})\s+(.*)$/))){ flush(); end(); out.push('<h'+m[1].length+'>'+jinline(esc(m[2]))+'</h'+m[1].length+'>'); continue; }
      if(/^\s*([-*_])(\s*\1){2,}\s*$/.test(raw)){ flush(); end(); out.push('<hr>'); continue; }
      if((m = raw.match(/^>\s?(.*)$/))){ flush(); end(); out.push('<blockquote>'+jinline(esc(m[1]))+'</blockquote>'); continue; }
      if((m = raw.match(/^(\s*)[-*+]\s+\[([ xX])\]\s+(.*)$/))){ flush(); open('ul'); var on = m[2] !== ' '; out.push('<li class="jt'+(on ? ' on' : '')+'" data-ln="'+i+'"'+ind(m[1])+'><button type="button" class="jbox" role="checkbox" aria-checked="'+on+'" aria-label="'+(on ? 'Done' : 'To do')+'"></button><span>'+jinline(esc(m[3]))+'</span></li>'); continue; }
      if((m = raw.match(/^(\s*)[-*+]\s+(.*)$/))){ flush(); open('ul'); out.push('<li'+ind(m[1])+'>'+jinline(esc(m[2]))+'</li>'); continue; }
      if((m = raw.match(/^(\s*)(\d+)[.)]\s+(.*)$/))){ flush(); open('ol', +m[2]); out.push('<li'+ind(m[1])+'>'+jinline(esc(m[3]))+'</li>'); continue; }
      end(); para.push(raw);
    }
    flush(); end();
    return out.join('') || '<p class="jot-none">Nothing to preview yet.</p>';
  }
/* tigOS core app.js, part 27: menus. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- what each right-click offers ----------------
     One builder per kind of target (27-ctx-menu.js ctxTarget names them). Each returns { items, anchor, src } for ctxShow: items read
     top to bottom like the macOS menu they are modelled on (Finder's desktop and icon menus, the Dock's app, Trash and divider menus, a
     window's Window menu), plus a few tigOS extras: quick actions for an app (download the resume, jump to a case study), the pet. */
  var CTX_MENUS = {};
  var CAP = function(s){ return s.charAt(0).toUpperCase()+s.slice(1); };
  function deskXY(x, y){ var dr = desk.getBoundingClientRect(), rr = root.getBoundingClientRect(); return { x:x - (dr.left - rr.left), y:y - (dr.top - rr.top) }; }
  function copyText(v){
    var done = function(ok){ toast(ok ? 'Copied to clipboard' : 'Copy this', v); };
    var old = function(){ var t = document.createElement('textarea'), ok = false; t.value = v; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0'; root.appendChild(t); t.select(); try { ok = document.execCommand('copy'); } catch(e){} t.remove(); done(ok); };
    try { if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(function(){ done(true); }, old); else old(); } catch(e){ old(); }
  }
  function dlResume(){ if(!A.resume_pdf) return; var a = document.createElement('a'); a.href = A.resume_pdf; a.download = 'Chase-Johnston-Resume.pdf'; a.rel = 'noopener'; root.appendChild(a); a.click(); a.remove(); toast('Downloading the resume', 'Chase-Johnston-Resume.pdf'); }
  function newTab(url){ try { window.open(url, '_blank', 'noopener'); } catch(e){} }
  /* type a command into the Terminal, the way a person would */
  function termRun(cmd){
    open('terminal');
    setTimeout(function(){ var i = $('#termIn'); if(!i) return; i.value = cmd; i.dispatchEvent(new KeyboardEvent('keydown', { key:'Enter', bubbles:true })); try { i.focus({ preventScroll:true }); } catch(e){} }, 80);
  }
  function saverGo(kind){ sleepEl.hidden = false; tick(); saverStart(kind); }
  function seg3(cur, set, opts){ return opts.map(function(o){ return { t:o[1], on:cur === o[0], fn:function(){ set(o[0]); } }; }); }
  /* ---------- desktop items: the actions behind the menus ---------- */
  function ddelete(ids){
    var d = DK(), n = 0;
    var bodies = [];   /* a note's text goes with it */
    ids.forEach(function(id){ var it = d.items[id]; if(!it || it.in !== 'trash') return; Object.keys(d.items).forEach(function(k){ if(d.items[k].in === id){ if(d.items[k].kind === 'note') bodies.push(k); delete d.items[k]; } }); var fw = WM.wins['fold-'+id]; if(fw) close(fw); if(it.kind === 'note') bodies.push(id); delete d.items[id]; n++; });
    if(n){ nforget(bodies); deskSave(); drender(); }
    return n;
  }
  function dduplicate(ids){
    var last = null; jotFlush();   /* a copy carries what was just typed */
    ids.forEach(function(id){ var it = ditem(id); if(!it || it.in === 'trash' || it.pkg) return; var where = dinside(it);
      var cp = function(x, nm, inn, t){ var y = dnew(x.kind === 'note' ? 'note' : 'app', { app:x.app, name:nm, in:inn, tag:x.tag, t:t || Date.now() }); if(x.kind === 'note'){ y.m = Date.now(); nbodySet(y.id, nbody(x.id)); } return y; };   /* a note's copy carries its text */
      var n = it.kind === 'folder' ? dnew('folder', { name:dnameNew(it.name+' copy', where), in:where, tag:it.tag }) : cp(it, it.kind === 'note' ? nnameNew(nsplit(it.name).base+' copy'+nsplit(it.name).ext, where) : dnameNew(it.name+' copy', where), where);
      if(it.kind === 'folder') dkids(id).forEach(function(k){ cp(k, k.name, n.id, k.t); });
      last = n; });
    if(!last) return null; deskSave(); drender(); if(!last.in) dflash(last.id);
    return last;
  }
  /* Clean Up: pack the icons into the grid from the top right, keeping their order (or sorting them once, Clean Up By) */
  function dcleanUp(by){
    var g = dgrid(), its = ditems('');
    if(by) its.sort(dcmp(by)); else its.sort(function(a, b){ var pa = DPOS[a.id], pb = DPOS[b.id]; return (pa ? g.idx(pa.c, pa.r) : 1e6) - (pb ? g.idx(pb.c, pb.r) : 1e6) || a.t - b.t; });
    its.forEach(function(it, i){ var p = g.nth(i); it.c = p.c; it.r = p.r; });
    deskSave(); drender();
  }
  function dshow(){ if(!dview('icons')) dviewSet('icons', true); }
  function dmoveTo(ids, where){
    var n = dmove(ids, where); if(!n) return;
    if(where === ''){ dshow(); ids.forEach(function(id, i){ var el = $('.dicon[data-id="'+id+'"]', DLAYER); if(el){ if(!i) dselOnly(el); else el.classList.add('sel'); } }); }
    else { var f = $('.dicon[data-id="'+where+'"]', DLAYER); if(f){ f.classList.remove('flash'); void f.offsetWidth; f.classList.add('flash'); } }
  }
  function moveSub(ids, here){
    var its = ids.map(ditem).filter(Boolean), out = [];
    if(here !== '') out.push({ t:'Desktop', i:'wall', fn:function(){ dmoveTo(ids, ''); } });
    if(!its.some(function(x){ return x.kind === 'folder'; })){
      var fs = ditems('').filter(function(x){ return x.kind === 'folder' && x.id !== here && ids.indexOf(x.id) < 0; }).sort(dcmp('name'));
      if(fs.length && out.length) out.push('-');
      fs.forEach(function(f){ out.push({ t:f.name, i:'folder', fn:function(){ dmoveTo(ids, f.id); } }); });
    }
    return out;
  }
  /* ---------- windows: macOS 15's Move & Resize ---------- */
  function wtile(w, how){
    var el = w.el; if(!el || isMobile() || el.classList.contains('fs')) return;
    var a = area(), W = a.x1 - a.x0, H = a.y1, g = 6, r = null;
    if(how === 'prev'){ if(!w.tilePrev) return; var z = el.style.zIndex; el.classList.add('zooming'); el.style.cssText = w.tilePrev; el.style.zIndex = z; w.tilePrev = null; }
    else {
      if(!w.tilePrev) w.tilePrev = w.max ? w.prev : el.style.cssText;
      if(w.max){ w.max = false; el.classList.remove('max'); }
      var half = Math.round(W/2);
      if(how === 'left') r = [a.x0 + g, g, half - g*1.5, H - g*2];
      if(how === 'right') r = [a.x0 + half + g/2, g, W - half - g*1.5, H - g*2];
      if(how === 'top') r = [a.x0 + g, g, W - g*2, Math.round(H/2) - g*1.5];
      if(how === 'bottom') r = [a.x0 + g, Math.round(H/2) + g/2, W - g*2, H - Math.round(H/2) - g*1.5];
      if(how === 'fill') r = [a.x0 + g, g, W - g*2, H - g*2];
      if(how === 'center'){ var cw = Math.min(el.offsetWidth, W - 2*g), ch = Math.min(el.offsetHeight, H - 2*g); r = [a.x0 + Math.round((W - cw)/2), Math.max(g, Math.round((H - ch)/2)), cw, ch]; }
      if(!r) return;
      el.classList.add('zooming');
      el.style.left = Math.round(r[0])+'px'; el.style.top = Math.round(r[1])+'px'; el.style.width = Math.round(r[2])+'px'; el.style.height = Math.round(r[3])+'px';
    }
    clearTimeout(w.zoomT); w.zoomT = setTimeout(function(){ el.classList.remove('zooming'); }, 500);
    focus(w);
  }
  /* ---------- the pet ---------- */
  function petDo(cls, ms){
    var el = PET.el; if(!el || el.classList.contains('abduct') || el.classList.contains('poof')) return false;
    var left = getComputedStyle(el).left; clearTimeout(PET.t); petClear(el); el.style.left = left; PET.busy = false; PET.mood = '';   /* stop a walk where it is */
    return petMood(cls, ms);
  }
  function petSub(){
    var cur = PREF.pet && PETS[PREF.pet] ? PREF.pet : '';
    return [{ t:'None', on:!cur, fn:function(){ var el = petEl(); if(el) petGoodbye(el); } }, '-'].concat(Object.keys(PETS).map(function(k){
      return { t:PETS[k].name+' the '+PETS[k].label, on:k === cur, fn:function(){ if(k === PREF.pet) return; petSet(k); toast(PETS[k].name+' is out', isMobile() ? 'Bottom right. Drag them wherever you like.' : 'Bottom right. Drag them anywhere, or right-click them.'); } };
    })).concat(['-', { t:'Open Pets\u2026', fn:function(){ open('pets'); } }]);
  }
  function wallSub(){
    var own = USER.name === 'chase';
    return [{ h:'Wallpaper' }].concat(seg3(PREF.wall === 'still' ? 'still' : 'live', function(v){ setPref('wall', v); }, [['live', 'Live'], ['still', 'Still']]),
      [{ h:'Appearance' }], seg3(PREF.theme === 'light' ? 'light' : 'dark', function(v){ setPref('theme', v); }, [['dark', 'Dark'], ['light', 'Light']]),
      own ? [{ h:'Accent Color' }].concat(Object.keys(ACCENTS).map(function(k){ return { t:CAP(k), dot:ACCENTS[k], on:PREF.accent === k, fn:function(){ setPref('accent', k); } }; })) : [],
      ['-', { t:'Wallpaper Settings\u2026', fn:function(){ open('settings'); } }]);
  }
  /* quick actions an app offers wherever it is right-clicked: its dock icon, a desktop alias, its window */
  function appActions(app){
    var C = TIG.contact, out = [];
    if(app === 'resume' && A.resume_pdf) out.push({ t:'Download PDF', i:'download', fn:dlResume }, { t:'Open PDF in New Tab', i:'open', fn:function(){ newTab(A.resume_pdf); } });
    if(app === 'contact') out.push({ t:'Copy Email Address', i:'copy', fn:function(){ copyText(C.email); } }, { t:'Copy LinkedIn Link', i:'linkedin', fn:function(){ copyText(C.linkedin); } });
    if(app === 'projects' && TIG.projects && TIG.projects.length) out.push({ t:'Case Studies', i:'projects', sub:function(){ return TIG.projects.map(function(p){ return { t:p.name, note:p.company, fn:function(){ open('projects', { route:p.id }); } }; }); } });
    if(app === 'journey' && TIG.journey && TIG.journey.length) out.push({ t:'Stops', i:'journey', sub:function(){ return TIG.journey.map(function(s){ var c = TIG.cities && TIG.cities[s.city]; return { t:s.company.split(/\s*[&,(]/)[0]+(c ? ', '+c.city : ''), note:(String(s.years).match(/\d{4}/) || [''])[0], fn:function(){ open('journey', { route:s.id }); } }; }); } });
    if(app === 'terminal') out.push({ t:'Run', i:'terminal', sub:function(){ return [['help', 'Every command'], ['neofetch', 'System info'], ['whoami', ''], ['weather', ''], ['fortune', '']].map(function(c){ return { t:c[0], note:c[1], fn:function(){ termRun(c[0]); } }; }); } });
    if(app === 'games' && GAMES.length) out.push({ t:'Play', i:'gamepad', sub:function(){ return GAMES.map(function(g){ return { t:g.name, fn:function(){ open('games', { route:g.id }); } }; }); } });
    if(app === 'pets' && Object.keys(PETS).length) out.push({ t:'Desktop Pet', i:'paw', sub:petSub });
    if(app === 'jot') out.push({ t:'New Note', i:'plus', fn:function(){ jotNewAsk(); } }, { t:'Recent Notes', i:'jot', sub:function(){ var l = jnotes().slice(0, 8); return l.length ? l.map(function(it){ return { t:it.name, note:dwhere(it), fn:function(){ jotOpen(it.id); } }; }) : [{ t:'No notes yet', dis:true }]; } });
    if(app === 'den') out.push({ t:'Go to', i:'den', sub:function(){ return [['', 'Desktop'], ['*notes', 'Notes'], ['*apps', 'Applications'], ['trash', 'Trash']].map(function(p){ return { t:p[1], fn:function(){ denOpen(p[0]); } }; }); } });
    if(app === 'settings') out.push({ t:'Appearance', i:'sun', sub:function(){ return seg3(PREF.theme === 'light' ? 'light' : 'dark', function(v){ setPref('theme', v); }, [['dark', 'Dark'], ['light', 'Light']]); } });
    return out;
  }
  /* ---------- the desktop ---------- */
  CTX_MENUS.desk = function(tg, x, y){
    var mob = isMobile(), icons = dview('icons'), hero = dview('hero'), sort = dview('sort'), size = dsize(), n = ditems('').length, at = deskXY(x, y);
    dselClear(); DFOCUS = DLAYER;
    var sortBy = function(v){ dviewSet('sort', v); }, hideTip = mob ? 'Hold the desktop to show them again.' : 'Right-click the desktop to show them again.';
    var wall = { t:'Change Wallpaper', i:'wall', sub:wallSub }, pet = Object.keys(PETS).length && { t:'Desktop Pet', i:'paw', sub:petSub },
        saver = { t:'Start Screen Saver', i:'moon', sub:function(){ return Object.keys(SAVERS).map(function(k){ return { t:SAVERS[k].name, note:k === PREF.saver ? 'Default' : '', fn:function(){ saverGo(k); } }; }).concat(['-', { t:'Random', fn:function(){ saverGo('random'); } }]); } },
        sets = { t:'Settings\u2026', i:'gear', fn:function(){ open('settings'); } };
    if(isPhone()) return { items:[wall, pet, '-', saver, sets] };   /* a phone's home screen: the look of it, and nothing that needs files or a Trash */
    return { items:[
      { t:'New Folder', i:'folder-plus', fn:function(){ dnewFolder(mob ? null : at); } },
      { t:'New Note', i:'jot', fn:function(){ jotNewIn('', mob ? null : at); } },
      '-',
      { t:'Get Info', i:'info', k:mob ? '' : '\u2318I', fn:function(){ infoShow({ type:'desk' }); } },
      '-',
      wall,
      pet,
      '-',
      { t:'Sort By', i:'sort', sub:function(){ return [{ t:'None', on:sort === 'grid', fn:function(){ sortBy('grid'); } }, '-'].concat(seg3(sort, sortBy, [['name', 'Name'], ['kind', 'Kind'], ['date', 'Date Added']])); } },
      { t:'Clean Up', i:'grid', dis:sort !== 'grid' || !n || !icons, fn:function(){ dcleanUp(); } },
      { t:'Clean Up By', dis:sort !== 'grid' || !n || !icons, sub:function(){ return [['name', 'Name'], ['kind', 'Kind'], ['date', 'Date Added']].map(function(o){ return { t:o[1], fn:function(){ dcleanUp(o[0]); } }; }); } },
      { t:'Icon Size', i:'expand', sub:function(){ return seg3(size, function(v){ dviewSet('size', v); }, [['sm', 'Small'], ['md', 'Medium'], ['lg', 'Large']]); } },
      '-',
      icons ? { t:'Hide Desktop Icons', i:'eye-off', fn:function(){ dselClear(); dviewSet('icons', false); toast('Desktop icons hidden', (hero ? 'The welcome text steps aside too. ' : '')+hideTip); } }
            : { t:'Show Desktop Icons', i:'eye', fn:function(){ dviewSet('icons', true); } },
      icons && (hero ? { t:'Hide Welcome Text', i:'eye-off', fn:function(){ dviewSet('hero', false); toast('Welcome text hidden', hideTip); } }
                     : { t:'Show Welcome Text', i:'eye', fn:function(){ dviewSet('hero', true); } }),
      '-',
      { t:'Add to Desktop', i:'plus', sub:function(){ return VIS().concat(isPhone() ? [] : ['jot', 'den'].filter(function(k){ return !appGone(k); })).map(function(app){ return { t:APPS[app].title, i:APPS[app].icon, on:!!dalias(app), fn:function(){ daddApp(app); } }; }); } },
      '-',
      saver,
      sets
    ] };
  };
  /* ---------- an icon on the desktop or in a folder or the Trash ---------- */
  CTX_MENUS.icon = function(tg){
    var el = tg.el, id = el.getAttribute('data-id'), it = ditem(id); if(!it || isPhone()) return null;
    var host = dhost(el), mob = isMobile(), here = host === DLAYER ? '' : host.getAttribute('data-folder');
    if(!el.classList.contains('sel')) dselOnly(el); else DFOCUS = host;   /* macOS: right-clicking an unselected icon selects it alone; a selected one keeps the selection */
    var ids = dselIds(host); if(ids.indexOf(id) < 0) ids = [id];
    var its = ids.map(ditem).filter(Boolean), many = its.length > 1, loose = its.filter(function(x){ return x.kind !== 'folder'; }), name = many ? its.length+' Items' : '\u201c'+it.name+'\u201d';
    if(here === 'trash' || it.in === 'trash') return { items:[
      { t:'Put Back', i:'back', fn:function(){ dputBack(ids); } },
      { t:'Delete Immediately\u2026', i:'close', fn:function(){ sheet('Are you sure you want to delete '+name+' immediately?', 'You can\u2019t undo this action.', 'Delete', function(){ ddelete(ids); }); } },
      '-',
      { t:'Get Info', i:'info', fn:function(){ infoShow({ type:'item', id:id }); } },
      '-',
      { t:'Empty Trash\u2026', i:'trash', fn:demptyAsk }
    ] };
    var app = !many && it.kind === 'app' ? it.app : '', acts = app ? appActions(app) : !many && it.kind === 'note' ? noteActions(id) : [], moves = moveSub(ids, here), tagNow = its.every(function(x){ return x.tag === it.tag; }) ? it.tag : null;
    return { items:[
      { t:many ? 'Open '+its.length+' Items' : 'Open', i:it.kind === 'folder' ? 'folder' : 'open', k:mob ? '' : '\u2318\u2193', fn:function(){ (mob ? ids.slice(0, 1) : ids).forEach(function(i){ dopen(i, $('.dicon[data-id="'+i+'"]', host)); }); } },
      acts.length && { t:'Quick Actions', i:'skills', sub:acts },
      '-',
      { t:'Move to Trash', i:'trash', k:mob ? '' : '\u2318\u232b', fn:function(){ dtrash(ids); } },
      '-',
      { t:'Get Info', i:'info', k:mob ? '' : '\u2318I', fn:function(){ infoShow({ type:'item', id:id }); } },
      !many && { t:'Rename', i:'pencil', k:mob ? '' : '\u21a9', fn:function(){ drename(id); } },
      { t:'Duplicate', i:'copy', fn:function(){ dduplicate(ids); } },
      moves.length && { t:'Move To', i:'folder', sub:moves },
      here === '' && many && loose.length && { t:'New Folder with Selection ('+loose.length+' Item'+(loose.length === 1 ? '' : 's')+')', i:'folder-plus', fn:function(){ var p = DPOS[id], g = dgrid(); dnewFolder(p ? { x:g.x(p.c) + g.cw/2, y:g.y(p.r) + g.s/2 } : null, loose.map(function(x){ return x.id; })); } },
      '-',
      { tags:tagNow === null ? '' : tagNow, fn:function(v){ dtag(ids, v); } },
      { t:'Tags\u2026', i:'tag', fn:function(){ infoShow({ type:'item', id:id }); } },
      app && '-',
      app && (dockHas(app) ? { t:'Show in Dock', i:'dock', fn:function(){ dockBounce(app); } } : { t:'Add to Dock', i:'dock', fn:function(){ dockPin(app); } })
    ] };
  };
  /* ---------- an open folder or Trash window, between its icons ---------- */
  CTX_MENUS.fbg = function(tg){
    if(isPhone()) return null;
    var fw = tg.el, fid = fw.getAttribute('data-folder'), sel = function(){ $$('.dicon', fw).forEach(function(e){ e.classList.add('sel'); }); };
    dselClear(); DFOCUS = fw;
    if(fid === 'trash') return { items:[
      { t:'Empty Trash\u2026', i:'trash', dis:!dtrashed().length, fn:demptyAsk },
      '-',
      { t:'Select All', k:isMobile() ? '' : '\u2318A', dis:!dtrashed().length, fn:sel },
      '-',
      { t:'Get Info', i:'info', fn:function(){ infoShow({ type:'trash' }); } }
    ] };
    if(fid === '' || fid === '*notes') return { items:[   /* Den showing the Desktop or every note */
      fid === '' && { t:'New Folder', i:'folder-plus', fn:function(){ dnewFolder(null); } },
      { t:'New Note', i:'jot', fn:function(){ jotNewIn(''); } },
      '-',
      { t:'Select All', k:isMobile() ? '' : '\u2318A', dis:!$$('.dicon', fw).length, fn:sel },
      '-',
      { t:'Get Info', i:'info', fn:function(){ infoShow({ type:'desk' }); } }
    ] };
    var it = ditem(fid); if(!it) return null;
    return { items:[
      { t:'New Note', i:'jot', fn:function(){ jotNewIn(fid); } },
      { t:'Add to Folder', i:'plus', sub:function(){ return VIS().map(function(app){ var has = dkids(fid).some(function(k){ return k.app === app; }); return { t:APPS[app].title, i:APPS[app].icon, on:has, fn:function(){ if(has) return; dnew('app', { app:app, name:dnameNew(APPS[app].title, fid), in:fid }); deskSave(); drender(); } }; }); } },
      { t:'Select All', k:isMobile() ? '' : '\u2318A', dis:!dkids(fid).length, fn:sel },
      '-',
      { t:'Get Info', i:'info', fn:function(){ infoShow({ type:'item', id:fid }); } },
      { t:'Show on Desktop', i:'wall', fn:function(){ dshow(); dflash(fid); } }
    ] };
  };
  /* ---------- the Dock ---------- */
  CTX_MENUS.dock = function(tg){
    var b = tg.el, app = b.getAttribute('data-dock'), a = APPS[app]; if(!a) return null;
    var w = WM.wins[app], pinned = b.classList.contains('pin'), fixed = b.classList.contains('denfix'), top = topWin(true), sys = !!a.sys, items = [];
    var bare = function(l){ return l.map(function(x){ var y = {}; Object.keys(x).forEach(function(k){ if(k !== 'i') y[k] = x[k]; }); return y; }); };   /* dock menus carry no icons, as on a Mac */
    if(isPhone()){   /* a phone keeps the Dock as it is: an app's quick actions (the resume, a case study), then open or close it, like iOS */
      if(sys) return null;
      items = bare(appActions(app)); if(items.length) items.push('-');
      items.push(w ? { t:'Close', fn:function(){ close(w); } } : { t:'Open', fn:function(){ open(app, { from:b }); } });
      return { items:items, anchor:b, src:b };
    }
    if(w){ items.push({ t:a.title, on:!w.min && top === w, note:w.min ? 'Minimized' : '', fn:function(){ if(w.min) restore(w); focus(w); } }, '-'); }
    if(sys){
      if(a.sys === 'folder') items.push({ t:'Show on Desktop', fn:function(){ dshow(); dflash(a.folder); } }, { t:'Get Info', fn:function(){ infoShow({ type:'item', id:a.folder }); } }, '-');
      if(w) items.push(w.min ? { t:'Show', fn:function(){ restore(w); focus(w); } } : { t:'Hide', fn:function(){ minimize(w); } }, { t:'Close', fn:function(){ close(w); } });
      return { items:items, anchor:b, src:b };
    }
    var acts = appActions(app); if(acts.length) items = items.concat(bare(acts), '-');
    if(fixed) items.push({ t:'New Folder', fn:function(){ dnewFolder(null); } }, { t:'New Note', fn:function(){ jotNewIn(''); } }, '-');   /* Den: what the Finder's Dock menu offers */
    items.push({ t:'Options', sub:function(){ return [
      w && !fixed ? { t:'Keep in Dock', on:pinned, fn:function(){ if(pinned) dockUnpin(app); else dockPin(app); } } : null,
      { t:'Open at Login', on:loginHas(app), fn:function(){ var on = loginToggle(app); toast(on ? a.title+' will open at login' : a.title+' won\u2019t open at login', on ? 'Every time tigOS starts up on this device.' : ''); } },
      { t:dalias(app) ? 'Show on Desktop' : 'Add to Desktop', fn:function(){ daddApp(app); } },
      !w && pinned ? '-' : null,
      !w && pinned ? { t:'Remove from Dock', fn:function(){ dockUnpin(app); } } : null
    ]; } }, '-');
    if(w) items.push(w.min ? { t:'Show', fn:function(){ restore(w); focus(w); } } : { t:'Hide', fn:function(){ minimize(w); } }, { t:'Quit', fn:function(){ close(w); } });
    else items.push({ t:'Open', fn:function(){ open(app, { from:b }); } });
    return { items:items, anchor:b, src:b };
  };
  CTX_MENUS.denapp = function(tg){
    var app = tg.el.getAttribute('data-app'), a = APPS[app]; if(!a || isPhone()) return null;
    $$('.den-app.sel').forEach(function(e){ e.classList.remove('sel'); }); tg.el.classList.add('sel');
    var acts = appActions(app);
    return { items:[
      { t:'Open', i:'open', fn:function(){ open(app, { from:tg.el }); } },
      acts.length && { t:'Quick Actions', i:'skills', sub:acts },
      '-',
      { t:'Get Info', i:'info', fn:function(){ infoShow({ type:'app', app:app }); } },
      { t:dalias(app) ? 'Show on Desktop' : 'Add to Desktop', i:'plus', fn:function(){ daddApp(app); } },
      dockHas(app) ? { t:'Show in Dock', i:'dock', fn:function(){ dockBounce(app); } } : { t:'Add to Dock', i:'dock', fn:function(){ dockPin(app); } },
      appRemovable(app) && '-',
      appRemovable(app) && { t:'Move to Trash', i:'trash', fn:function(){ if(appRemove(app)) toast(a.title+' moved to the Trash', 'Put Back reinstalls it, or in Terminal: brew install '+app); } }
    ] };
  };
  /* ---------- Jot: a note in its sidebar, the sidebar itself, and the text (Notes and TextEdit's menus) ---------- */
  function jotRename(){ var w = WM.wins.jot, nm = w && $('.jot-name', w.body); if(!nm || nm.offsetParent === null) return; nm.focus(); try { nm.setSelectionRange(0, nsplit(nm.value).base.length); } catch(e){} }
  CTX_MENUS.jot = function(tg){
    var id = tg.el.getAttribute('data-note'), it = ditem(id); if(!jlive(it) || isPhone()) return null;
    if(id !== JOT.id) jotLoad(id);   /* the row right-clicked becomes the open note, as in Notes */
    var row = function(){ return $('.win[data-app="jot"] .jot-it[data-note="'+id+'"]'); }, moves = moveSub([id], dinside(it));
    return { items:[
      { t:'Rename', i:'pencil', fn:jotRename },
      { t:'Duplicate', i:'copy', fn:function(){ var c = dduplicate([id]); if(c) jotLoad(c.id); } },
      moves.length && { t:'Move To', i:'folder', sub:moves },
      '-',
      { t:'Download a Copy', i:'download', fn:function(){ jotDownload(id); } },
      { t:'Send to Chase', i:'mail', fn:function(){ jotMail(id); } },
      '-',
      { t:'Show in Den', i:'den', fn:function(){ denOpen(dinside(it), id); } },
      { t:'Get Info', i:'info', fn:function(){ infoShow({ type:'item', id:id }); } },
      { tags:it.tag || '', fn:function(v){ dtag([id], v); } },
      '-',
      { t:'Move to Trash', i:'trash', fn:function(){ dtrash([id]); } }
    ], src:row() };
  };
  CTX_MENUS.jotside = function(){
    if(isPhone()) return null;
    return { items:[{ t:'New Note', i:'plus', fn:jotNewAsk }, { t:'Open a Text File\u2026', i:'upload', fn:function(){ var w = WM.wins.jot, f = w && $('.jot-file', w.body); if(f) f.click(); } }, '-', { t:'Show Notes in Den', i:'den', fn:function(){ denOpen('*notes'); } }] };
  };
  CTX_MENUS.jotdoc = function(tg){
    var ta = tg.el, s = ta.selectionStart, e = ta.selectionEnd, has = e > s, id = JOT.id, mob = isMobile();
    var back = function(f){ return function(){ try { ta.focus({ preventScroll:true }); } catch(x){ ta.focus(); } ta.setSelectionRange(s, e); f(); }; };   /* the menu took the focus: give the text its caret back, then act */
    var paste = function(){ var put = function(v){ if(v) jput(ta, s, e, v, s + v.length); }; try { navigator.clipboard.readText().then(put, function(){ toast('Press \u2318V to paste', 'This browser keeps the clipboard to the keyboard.'); }); } catch(x){ toast('Press \u2318V to paste', 'This browser keeps the clipboard to the keyboard.'); } };
    return { items:[
      { t:'Cut', k:mob ? '' : '\u2318X', dis:!has, fn:back(function(){ var v = ta.value.slice(s, e), ok = false; try { ok = document.execCommand('cut'); } catch(x){} if(!ok){ try { navigator.clipboard.writeText(v); } catch(x){} jput(ta, s, e, '', s); } }) },
      { t:'Copy', k:mob ? '' : '\u2318C', dis:!has, fn:back(function(){ var ok = false; try { ok = document.execCommand('copy'); } catch(x){} if(!ok){ try { navigator.clipboard.writeText(ta.value.slice(s, e)); } catch(x){} } }) },
      { t:'Paste', k:mob ? '' : '\u2318V', fn:back(paste) },
      { t:'Select All', k:mob ? '' : '\u2318A', fn:back(function(){ ta.select(); }) },
      '-',
      { t:'Bold', i:'bold', k:mob ? '' : '\u2318B', fn:back(function(){ jwrap(ta, '**'); }) },
      { t:'Italic', i:'italic', k:mob ? '' : '\u2318I', fn:back(function(){ jwrap(ta, '_'); }) },
      { t:'Heading', i:'head', fn:back(function(){ jprefix(ta, 'head'); }) },
      { t:'Bulleted List', i:'list', fn:back(function(){ jprefix(ta, 'list'); }) },
      { t:'Checklist', i:'check', fn:back(function(){ jprefix(ta, 'check'); }) },
      { t:'Add Link', i:'link', k:mob ? '' : '\u2318K', fn:back(function(){ jlink(ta); }) },
      '-',
      { t:'Preview', i:'eye', fn:function(){ JOT.prev = true; jotPrev(); } },
      { t:'New Note', i:'plus', fn:jotNewAsk },
      id && { t:'Download a Copy', i:'download', fn:function(){ jotDownload(id); } }
    ] };
  };
  CTX_MENUS.trash = function(tg){
    if(isPhone()) return null;
    var n = dtrashed().length;
    return { items:[{ t:'Open', fn:function(){ denOpen('trash'); } }, '-', { t:'Empty Trash', dis:!n, fn:demptyAsk }], anchor:tg.el, src:tg.el };
  };
  CTX_MENUS.link = function(tg){
    var url = TIG.contact.linkedin;
    return { items:[{ t:'Open LinkedIn', fn:function(){ newTab(url); } }, { t:'Copy Link', fn:function(){ copyText(url); } }, '-', { t:'Contact Chase', fn:function(){ open('contact', { from:tg.el }); } }], anchor:tg.el, src:tg.el };
  };
  /* the divider and the space between icons: the Dock's own settings */
  CTX_MENUS.dockbg = function(){
    if(isPhone()) return null;
    var mob = isMobile(), gd = root.classList.contains('u-greggyd'), hide = PREF.dockhide === 'on', mag = PREF.dockmag !== 'off';
    return { atDock:true, items:[
      !mob && !gd && { t:hide ? 'Turn Hiding Off' : 'Turn Hiding On', fn:function(){ setPref('dockhide', hide ? 'off' : 'on'); } },
      !mob && { t:mag ? 'Turn Magnification Off' : 'Turn Magnification On', fn:function(){ setPref('dockmag', mag ? 'off' : 'on'); } },
      '-',
      !mob && !gd && { t:'Position on Screen', sub:function(){ return seg3(PREF.dockpos, function(v){ setPref('dockpos', v); }, [['left', 'Left'], ['bottom', 'Bottom'], ['right', 'Right']]); } },
      !mob && { t:'Size', sub:function(){ return seg3(PREF.dock, function(v){ setPref('dock', v); }, [['sm', 'Small'], ['md', 'Medium'], ['lg', 'Large']]); } },
      '-',
      { t:'Reset Dock\u2026', fn:dockResetAsk },
      !mob && { t:'Dock Settings\u2026', fn:function(){ open('settings'); } }
    ] };
  };
  /* ---------- a window's title bar: the Window menu ---------- */
  CTX_MENUS.win = function(tg){
    var el = tg.el, id = el && el.dataset.app, w = id && WM.wins[id], a = APPS[id]; if(!w || !a) return null;
    focus(w);
    var others = Object.keys(WM.wins).filter(function(k){ return k !== id; }), game = id === 'games', fs = el.classList.contains('fs');
    var phone = isPhone(), info = phone ? null : a.sys === 'folder' ? { type:'item', id:a.folder } : a.sys === 'trash' ? { type:'trash' } : a.sys ? null : { type:'app', app:id };
    var acts = a.sys ? [] : appActions(id);
    return { items:[
      { t:'Minimize', i:'minus', fn:function(){ minimize(w); } },
      game ? { t:fs ? 'Exit Full Screen' : 'Enter Full Screen', i:fs ? 'compress' : 'expand', fn:function(){ gameFs(w); } } : { t:w.max ? 'Exit Zoom' : 'Zoom', i:'expand', fn:function(){ zoom(w); } },
      !game && { t:'Move & Resize', i:'window', sub:function(){ return [
        { t:'Left', i:'tile-l', fn:function(){ wtile(w, 'left'); } }, { t:'Right', i:'tile-r', fn:function(){ wtile(w, 'right'); } },
        { t:'Top', i:'tile-t', fn:function(){ wtile(w, 'top'); } }, { t:'Bottom', i:'tile-b', fn:function(){ wtile(w, 'bottom'); } }, '-',
        { t:'Fill', i:'expand', fn:function(){ wtile(w, 'fill'); } }, { t:'Center', i:'window', fn:function(){ wtile(w, 'center'); } }, '-',
        { t:'Return to Previous Size', dis:!w.tilePrev, fn:function(){ wtile(w, 'prev'); } }
      ]; } },
      '-',
      acts.length && { t:'Quick Actions', i:'skills', sub:acts },
      info && { t:'Get Info', i:'info', fn:function(){ infoShow(info); } },
      !a.sys && !phone && id !== 'den' && { t:'Keep in Dock', i:'dock', on:dockHas(id), fn:function(){ if(dockHas(id)) dockUnpin(id); else dockPin(id); } },
      !a.sys && !phone && { t:dalias(id) ? 'Show on Desktop' : 'Add to Desktop', i:'plus', fn:function(){ daddApp(id); } },
      '-',
      others.length && { t:'Close Other Windows', fn:function(){ others.forEach(function(k){ if(WM.wins[k]) close(WM.wins[k]); }); } },
      { t:'Close Window', i:'close', k:'\u2318W', fn:function(){ close(w); } }
    ] };
  };
  /* ---------- the desktop pet ---------- */
  CTX_MENUS.pet = function(tg){
    var el = tg.el, k = el.getAttribute('data-pet'), pt = PETS[k] || { name:'Your pet', label:'' };
    if(el.classList.contains('poof') || el.classList.contains('abduct')) return null;
    var lines = pt.say && pt.say.length ? pt.say : ['\u2665'];
    return { items:[
      { h:pt.name+(pt.label ? ' the '+pt.label : '') },
      { t:'Pet '+pt.name, i:'heart', fn:function(){ el.classList.remove('happy'); void el.offsetWidth; el.classList.add('happy'); setTimeout(function(){ el.classList.remove('happy'); }, 1400); petSay('\u2665', 1200); } },
      { t:'Say Hi', i:'contact', fn:function(){ petDo('say', 1900); petSay(lines[Math.floor(Math.random()*lines.length)], 1800); } },
      { t:'Take a Nap', i:'zzz', fn:function(){ petDo('nap', 9000); } },
      { t:'Do a Trick', i:'skills', fn:function(){ petDo('trick', { cat:1800, ladybug:1900, penguin:1900, alien:1900, llama:1900 }[k] || 1700); } },
      '-',
      { t:'Change Pet', i:'paw', sub:petSub },
      { t:'Size', i:'expand', sub:function(){ return seg3(PREF.petsize || 'md', function(v){ setPref('petsize', v); }, [['sm', 'Small'], ['md', 'Medium'], ['lg', 'Large']]); } },
      '-',
      { t:'Send '+pt.name+' Home', i:'close', fn:function(){ petGoodbye(el); } }
    ] };
  };
/* tigOS core app.js, part 27b: fps counter and the debug overlay. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- `fps` puts a frame counter top right; `debug` opens a live panel under it: frames, main-thread busy estimate (timer lag + long tasks), JS heap
     where the browser exposes it, network (resources, bytes on the wire, rate, connection), device, battery, and tigOS's own state (uptime, windows, pets, arcade,
     wallpaper, DOM size, storage). One requestAnimationFrame loop runs only while either is on; the panel refreshes four times a second. Nothing persists. ---------------- */
  var DBG = (function(){
    var fpsEl = null, panEl = null, raf = 0, last = 0, frames = 0, fpsT = 0, fps = 0, ema = 0, worst = 0, worstShown = 0, refreshT = 0, lagT = 0, lagBusy = 0, lagSamples = [], longMs = 0, longN = 0, longWin = [], po = null, bytes0 = -1, bytesT = 0, rate = 0, battery = null, batteryAsked = false, opened = 0;
    function on(){ return !!((fpsEl && !fpsEl.hidden) || (panEl && !panEl.hidden)); }
    function fmtB(b){ return b < 1024 ? b+' B' : b < 1048576 ? (b/1024).toFixed(1)+' KB' : (b/1048576).toFixed(2)+' MB'; }
    function net(){ var rs = performance.getEntriesByType('resource'), nav = performance.getEntriesByType('navigation')[0], sum = nav && nav.transferSize || 0, body = nav && nav.encodedBodySize || 0, kinds = {}, cached = 0;
      for(var i = 0; i < rs.length; i++){ var r = rs[i]; sum += r.transferSize || 0; body += r.encodedBodySize || 0; if(r.transferSize === 0 && r.encodedBodySize > 0) cached++; var k = r.initiatorType || 'other'; kinds[k] = (kinds[k] || 0) + 1; }
      return { n:rs.length + (nav ? 1 : 0), wire:sum, body:body, cached:cached, kinds:kinds, nav:nav }; }
    function busy(){ if(!lagSamples.length) return 0; var s = 0; for(var i = 0; i < lagSamples.length; i++) s += lagSamples[i]; return Math.min(100, Math.round(s/lagSamples.length*100)); }
    function longBusy(){ var now = performance.now(); while(longWin.length && now - longWin[0][0] > 5000) longWin.shift(); var ms = 0; for(var i = 0; i < longWin.length; i++) ms += longWin[i][1]; return { n:longWin.length, pct:Math.min(100, Math.round(ms/Math.min(5000, Math.max(1, now - (opened || now) + 1))*100)) }; }
    function loop(ts){ raf = requestAnimationFrame(loop); if(!on()){ cancelAnimationFrame(raf); raf = 0; return; }
      if(last){ var dt = ts - last; ema = ema ? ema*.9 + dt*.1 : dt; if(dt > worst) worst = dt; } last = ts; frames++;
      if(ts - fpsT >= 1000){ fps = Math.round(frames*1000/(ts - fpsT)); frames = 0; fpsT = ts; worstShown = worst; worst = 0; if(fpsEl) fpsEl.textContent = fps+' fps'; if(fpsEl) fpsEl.className = 'fps-hud'+(fps < 30 ? ' bad' : fps < 50 ? ' meh' : ''); }
      if(panEl && !panEl.hidden && ts - refreshT >= 250){ refreshT = ts; render(); } }
    function lagTick(){ var now = performance.now(); if(lagT){ var lag = Math.max(0, now - lagT - 100); lagSamples.push(Math.min(1, lag/100)); if(lagSamples.length > 20) lagSamples.shift(); } lagT = now; if(on()) setTimeout(lagTick, 100); else lagT = 0; }   /* a 100 ms timer that lands late says the main thread was busy */
    function observe(){ if(po || !window.PerformanceObserver) return; try { po = new PerformanceObserver(function(list){ list.getEntries().forEach(function(e){ longN++; longMs += e.duration; longWin.push([performance.now(), e.duration]); }); }); po.observe({ entryTypes:['longtask'] }); } catch(e){ po = null; } }
    function row(k, v, cls){ return '<div class="dbg-row'+(cls ? ' '+cls : '')+'"><span>'+k+'</span><b>'+v+'</b></div>'; }
    function head(t){ return '<div class="dbg-h">'+t+'</div>'; }
    function render(){
      var n = net(), now = performance.now(); if(bytes0 < 0){ bytes0 = n.wire; bytesT = now; } else if(now - bytesT >= 1000){ rate = (n.wire - bytes0)/((now - bytesT)/1000); bytes0 = n.wire; bytesT = now; }
      var mem = performance.memory, con = navigator.connection || navigator.mozConnection || navigator.webkitConnection, lb = longBusy(), cpu = Math.max(busy(), lb.pct);
      var wins = Object.keys(WM.wins), foc = wins.filter(function(k){ return WM.wins[k].el.classList.contains('focus'); })[0], game = document.querySelector('.gm-stage'), gm = game && game.tigGame, gname = document.querySelector('.gm-name'), wall = document.getElementById('wallgl'), pets = document.querySelectorAll('.pet'), pet3 = window.tigPets && window.tigPets.peek ? window.tigPets.peek() : null;
      var up = Math.round(now/1000), ls = 0; try { for(var i = 0; i < localStorage.length; i++){ var key = localStorage.key(i); ls += key.length + (localStorage.getItem(key) || '').length; } } catch(e){}
      if(!batteryAsked && navigator.getBattery){ batteryAsked = true; navigator.getBattery().then(function(b){ battery = b; }).catch(function(){}); }
      var html = head('frames')+row('fps', fps+(fps < 30 ? ' <i>slow</i>' : ''), fps < 30 ? 'bad' : '')+row('frame', ema.toFixed(1)+' ms avg  \u00b7  worst '+worstShown.toFixed(0)+' ms')+row('refresh', (screen && screen.refreshRate ? screen.refreshRate+' Hz' : (fps >= 100 ? '~120 Hz' : '~60 Hz')))+
        head('main thread')+row('busy', cpu+'%'+(cpu > 60 ? ' <i>hot</i>' : ''), cpu > 60 ? 'bad' : '')+row('timer lag', busy()+'%  <i>(100 ms timer drift)</i>')+row('long tasks', (window.PerformanceObserver ? lb.n+' in 5 s  \u00b7  '+longN+' total, '+Math.round(longMs)+' ms' : 'not exposed'))+row('cores', (navigator.hardwareConcurrency || '?')+(navigator.deviceMemory ? '  \u00b7  '+navigator.deviceMemory+' GB device memory' : ''))+
        head('memory')+(mem ? row('js heap', fmtB(mem.usedJSHeapSize)+' used  \u00b7  '+fmtB(mem.totalJSHeapSize)+' allocated')+row('heap limit', fmtB(mem.jsHeapSizeLimit)) : row('js heap', 'not exposed by this browser'))+row('dom nodes', document.getElementsByTagName('*').length)+row('localStorage', fmtB(ls*2)+' in '+(function(){ try { return localStorage.length; } catch(e){ return '?'; } })()+' keys')+
        head('network')+row('downloaded', fmtB(n.wire)+' on the wire  \u00b7  '+fmtB(n.body)+' decoded')+row('rate', fmtB(Math.max(0, rate))+'/s')+row('resources', n.n+' ('+Object.keys(n.kinds).map(function(k){ return n.kinds[k]+' '+k; }).join(', ')+')'+(n.cached ? '  \u00b7  '+n.cached+' from cache' : ''))+
        row('connection', (navigator.onLine ? 'online' : '<i>offline</i>')+(con ? '  \u00b7  '+(con.effectiveType || '')+(con.downlink ? '  \u00b7  '+con.downlink+' Mbps' : '')+(con.rtt ? '  \u00b7  '+con.rtt+' ms rtt' : '')+(con.saveData ? '  \u00b7  data saver' : '') : ''))+
        (n.nav ? row('page load', Math.round(n.nav.responseStart)+' ms ttfb  \u00b7  '+Math.round(n.nav.domContentLoadedEventEnd)+' ms dcl  \u00b7  '+Math.round(n.nav.loadEventEnd || 0)+' ms load'+(n.nav.deliveryType === 'cache' || n.nav.transferSize === 0 ? '  \u00b7  cached' : '')) : '')+
        head('device')+row('viewport', innerWidth+'\u00d7'+innerHeight+'  \u00b7  '+(window.devicePixelRatio || 1)+'x dpr  \u00b7  screen '+screen.width+'\u00d7'+screen.height)+row('platform', (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '?'+(navigator.maxTouchPoints ? '  \u00b7  touch' : ''))+row('gpu', (function(){ var c = document.createElement('canvas'), g = c.getContext('webgl'); if(!g) return 'no webgl'; var d = g.getExtension('WEBGL_debug_renderer_info'); return d ? String(g.getParameter(d.UNMASKED_RENDERER_WEBGL)).slice(0, 48) : 'webgl'; })())+
        row('battery', battery ? Math.round(battery.level*100)+'%'+(battery.charging ? ' charging' : '') : (navigator.getBattery ? '\u2026' : 'not exposed'))+row('locale', navigator.language+'  \u00b7  '+(Intl.DateTimeFormat().resolvedOptions().timeZone || ''))+
        head('tigos')+row('uptime', Math.floor(up/60)+' min '+(up%60)+' s')+row('user', USER.name+'  \u00b7  '+PREF.theme+'  \u00b7  '+PREF.accent)+row('windows', wins.length+(foc ? '  \u00b7  focus '+foc : '')+(wins.length ? '  \u00b7  '+wins.join(', ') : ''))+
        row('pets', pets.length+(pet3 ? '  \u00b7  gl '+(pet3.gl ? 'on' : 'off')+(typeof pet3.insts === 'number' ? '  \u00b7  '+pet3.insts+' drawn' : '') : ''))+row('arcade', gm ? (gname ? gname.textContent : 'game')+(gm.peek ? (function(){ try { var p = gm.peek(); return '  \u00b7  '+(p.state || p.phase || '')+(p.score !== undefined ? '  \u00b7  score '+p.score : ''); } catch(e){ return ''; } })() : '') : 'closed')+
        row('wallpaper', wall ? (wall.classList.contains('on') ? 'webgl  \u00b7  '+(wall.getAttribute('data-frames') || 0)+' frames  \u00b7  '+(wall.getAttribute('data-pal') || 'chase') : 'css'+(wall.getAttribute('data-soft') === '1' ? '  (software gl)' : '')) : '?')+row('version', root.getAttribute('data-version') || '?');
      panEl.innerHTML = '<div class="dbg-top"><b>debug</b><span>'+fps+' fps  \u00b7  '+cpu+'% busy</span><button type="button" data-dbg-close aria-label="Close">\u00d7</button></div>'+html;
    }
    function ensure(){ if(!fpsEl){ fpsEl = document.createElement('div'); fpsEl.className = 'fps-hud'; fpsEl.id = 'fpsHud'; fpsEl.hidden = true; fpsEl.textContent = '-- fps'; root.appendChild(fpsEl); }
      if(!panEl){ panEl = document.createElement('div'); panEl.className = 'dbg-hud'; panEl.id = 'dbgHud'; panEl.hidden = true; root.appendChild(panEl); panEl.addEventListener('click', function(e){ if(e.target.closest('[data-dbg-close]')) DBG.debug(false); }); } }
    function start(){ observe(); if(!raf){ last = 0; frames = 0; fpsT = performance.now(); raf = requestAnimationFrame(loop); } if(!lagT){ lagT = 0; lagTick(); } }
    return {
      fps:function(want){ ensure(); var show = want === undefined ? fpsEl.hidden : !!want; fpsEl.hidden = !show; if(show) start(); return show; },
      debug:function(want){ ensure(); var show = want === undefined ? panEl.hidden : !!want; panEl.hidden = !show; if(show){ opened = performance.now(); bytes0 = -1; rate = 0; refreshT = 0; start(); render(); } return show; },
      on:on, peek:function(){ return { fps:fps, ema:+ema.toFixed(2), worst:+worstShown.toFixed(1), busy:busy(), longTasks:longN, running:!!raf, fpsOn:!!(fpsEl && !fpsEl.hidden), debugOn:!!(panEl && !panEl.hidden), lagSamples:lagSamples.length }; } };
  })();
  window.tigDebug = DBG;   /* the test suite and the console read it */
  EXTRA_CMDS.fps = function(a, T){ var off = /^(off|stop|no|hide|0)$/i.test((a || '').trim()); var show = DBG.fps(off ? false : (/^(on|show|1)$/i.test((a || '').trim()) ? true : undefined)); T.print(show ? 'fps counter on, top right. '+T.o('fps')+' again turns it off.' : 'fps counter off.', 'ok'); };
  EXTRA_CMDS.debug = function(a, T){ var off = /^(off|stop|no|hide|close|0)$/i.test((a || '').trim()); var show = DBG.debug(off ? false : (/^(on|show|1)$/i.test((a || '').trim()) ? true : undefined)); T.print(show ? 'debug overlay on: frames, main thread, memory, network, device and tigOS state, live. '+T.o('debug')+' again or its \u00d7 closes it.' : 'debug overlay off.', 'ok'); };
  EXTRA_CMDS.perf = function(a, T){ EXTRA_CMDS.debug(a, T); }; EXTRA_CMDS.top = function(a, T){ EXTRA_CMDS.debug(a, T); }; EXTRA_CMDS.htop = function(a, T){ EXTRA_CMDS.debug(a, T); };
/* tigOS core app.js, part 27: the shell. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- the shell: Terminal's files and apps ----------------
     Terminal works on the same items as the desktop and Den (27-desktop.js). ~ is home: the apps (about.app and the rest), resume.pdf and
     whatever sits on the Desktop, its folders and notes (~/Desktop is the same place). A folder is a directory one level down: it holds
     notes and app aliases, never another folder, as on the desktop. ~/Applications lists every installed app and ~/.Trash is the Trash.
     Notes are the text files: touch and echo > make them, cat, head, tail, wc and grep read them, nano or vim opens one in Jot, mv renames
     or moves, cp copies, ln -s makes an app alias, rm moves things to the Trash (rm inside ~/.Trash erases for good). An app can be removed
     (brew uninstall about, rm about.app, or Move to Trash in Den): it waits in the Trash, its Dock icon and aliases hide, and brew install
     (or Put Back) brings it back where it was. Terminal, Settings and Den stay. Terminal is a desktop and tablet app: a phone has none. */
  var APP_CORE = { terminal:1, settings:1, den:1 };   /* tigOS itself (and who would type brew install with no Terminal?) */
  function appGone(id){ try { var d = typeof DESKS === 'object' && DESKS && DESKS[USER.name]; return !!(d && Array.isArray(d.gone) && d.gone.indexOf(id) > -1); } catch(e){ return false; } }   /* called before the desktop store loads, so it never assumes it */
  function appPkg(id){ var d = DK(); for(var k in d.items){ var it = d.items[k]; if(it.pkg && it.app === id && it.in === 'trash') return it; } return null; }
  function appsInstalled(){ return VIS().concat(['jot', 'den'].filter(function(k){ return !appGone(k); })); }
  function appRemovable(id){ var a = APPS[id]; return !!a && !isPhone() && !a.sys && !APP_CORE[id] && (!a.hidden || id === 'jot') && !appGone(id); }
  function appRemove(id){
    if(!appRemovable(id)) return false;
    var d = DK(); if(!Array.isArray(d.gone)) d.gone = [];
    var w = WM.wins[id]; if(w) close(w);
    d.gone.push(id);
    dnew('app', { app:id, name:APPS[id].title, in:'trash', pkg:1, t2:Date.now(), from:'' });   /* the app itself, waiting in the Trash */
    deskSave(); dockBuild(); drender(); trashGulp();
    return true;
  }
  function appInstall(id, quiet){
    var d = DK(); if(!APPS[id] || !appGone(id)) return false;
    d.gone = d.gone.filter(function(x){ return x !== id; }); if(!d.gone.length) delete d.gone;
    Object.keys(d.items).forEach(function(k){ var it = d.items[k]; if(it.pkg && it.app === id) delete d.items[k]; });
    deskSave(); dockBuild(); dockPop(id); drender();
    if(!quiet) toast(APPS[id].title+' is back', dockHas(id) ? 'In the Dock, where it was.' : 'Find it in Spotlight or Den.');
    return true;
  }
  /* the file commands, installed over Terminal's own (13-pets.js) each time a Terminal opens. k: print, o, refresh (the prompt) */
  function shellInstall(CMD, k){
    var print = k.print, o = k.o;
    var S = { cwd:'', prev:'' };   /* '' home, a folder id, '*apps' or 'trash' */
    var H = function(){ return USERS[USER.name].home; };
    var okDir = function(l){ if(l === '' || l === '*apps' || l === 'trash') return true; var f = ditem(l); return !!(f && f.kind === 'folder' && (f.in || '') === ''); };
    var here = function(){ if(!okDir(S.cwd)) S.cwd = ''; return S.cwd; };
    var dirName = function(l){ return l === '' ? '~' : l === '*apps' ? 'Applications' : l === 'trash' ? '.Trash' : ditem(l).name; };
    var dirPath = function(l){ return l === '' ? '~' : l === '*apps' ? '/Applications' : l === 'trash' ? '~/.Trash' : '~/'+ditem(l).name; };
    var abs = function(l){ return l === '*apps' ? '/Applications' : H()+(l === '' ? '' : l === 'trash' ? '/.Trash' : '/'+ditem(l).name); };
    var err = function(s){ print(esc(s), 'err'); };
    var dim = function(s){ print(esc(s), 'dim'); };
    var q = function(n){ return /[\s"'\\]/.test(n) ? '"'+n.replace(/"/g, '\\"')+'"' : n; };   /* a name the way you would type it */
    var plural = function(n, w){ return n+' '+w+(n === 1 ? '' : 's'); };
    /* words, with "quotes", 'quotes' and back\ slashes; flags (-rf) apart, until -- */
    var toks = function(s){ var out = [], re = /"((?:\\.|[^"\\])*)"|'([^']*)'|((?:\\.|[^\s"'])+)/g, m; s = String(s || ''); while((m = re.exec(s))){ if(m[1] != null) out.push({ v:m[1].replace(/\\(.)/g, '$1'), q:true }); else if(m[2] != null) out.push({ v:m[2], q:true }); else out.push({ v:m[3].replace(/\\(.)/g, '$1'), q:false }); } return out; };
    var parse = function(s){ var f = {}, a = [], end = false; toks(s).forEach(function(x){ if(!end && !x.q && x.v === '--'){ end = true; return; } if(!end && !x.q && /^-[a-zA-Z]+$/.test(x.v)){ x.v.slice(1).split('').forEach(function(c){ f[c] = true; }); return; } a.push(x.v); }); return { f:f, a:a }; };
    /* what a directory holds, as the shell names it: apps are id.app, folders and notes keep their names */
    var ent = function(it){ return { name:it.pkg ? it.app+'.app' : it.name, kind:it.pkg ? 'pkg' : it.kind === 'app' ? 'alias' : it.kind, it:it, app:it.app }; };
    var entries = function(l){
      if(l === '*apps') return appsInstalled().map(function(a){ return { name:a+'.app', kind:'app', app:a }; });
      if(l === 'trash') return dtrashed().sort(function(a, b){ return (b.t2 || 0) - (a.t2 || 0); }).map(ent);
      if(l === '') return VIS().map(function(a){ return { name:a+'.app', kind:'app', app:a }; }).concat([{ name:'resume.pdf', kind:'pdf' }], ditems('').filter(function(x){ return x.kind !== 'app'; }).sort(dcmp('name')).map(ent));
      return dkids(l).sort(dcmp('name')).map(ent);
    };
    var appOf = function(n){ n = String(n || '').toLowerCase().replace(/\.app$/, ''); var ks = Object.keys(APPS).filter(function(x){ return !APPS[x].sys; }); return ks.filter(function(x){ return x === n; })[0] || ks.filter(function(x){ return APPS[x].title.toLowerCase() === n; })[0] || null; };
    var findIn = function(l, name){
      var n = String(name).toLowerCase(), es = entries(l);
      return es.filter(function(e){ return e.name.toLowerCase() === n; })[0] || es.filter(function(e){ return e.kind === 'note' && nsplit(e.name.toLowerCase()).base === n; })[0] ||
        ((l === '' || l === '*apps') && es.filter(function(e){ return e.kind === 'app' && e.app === appOf(n); })[0]) || es.filter(function(e){ return e.kind === 'pkg' && e.app === appOf(n); })[0] || null;
    };
    /* a path to { dir } when it names a directory, else { loc (its directory), name, e (what is there, or null) }, or { err } */
    var walk = function(p){
      p = String(p == null ? '' : p); var h = H();
      if(p === h || p.indexOf(h+'/') === 0) p = '~'+p.slice(h.length);
      var segs = p.split('/'), l = here();
      if(segs[0] === '~' || (segs[0] === '' && segs.length > 1)){ l = ''; segs.shift(); }
      segs = segs.filter(function(s){ return s !== '' && s !== '.'; });
      for(var j = 0; j < segs.length; j++){
        var s = segs[j], last = j === segs.length - 1;
        if(s === '..' || s === '~'){ l = ''; continue; }   /* one level deep: up is always home */
        var e = findIn(l, s);
        if(e && e.kind === 'folder' && l !== 'trash'){ l = e.it.id; continue; }
        if(!e && l === ''){ if(/^desktop$/i.test(s)) continue; if(/^applications$/i.test(s)){ l = '*apps'; continue; } if(/^\.?trash$/i.test(s)){ l = 'trash'; continue; } }
        if(last) return { loc:l, name:s, e:e };
        return { err:e ? 'Not a directory' : 'No such file or directory' };
      }
      return { dir:l };
    };
    /* like walk, but a folder is an item too (rm, mv, cp, open act on it); special: home, Applications or the Trash themselves */
    var at = function(t){ var r = walk(t); if(r.dir != null){ if(r.dir === '' || r.dir === '*apps' || r.dir === 'trash') return { r:r, special:r.dir }; var f = ditem(r.dir); return { r:r, e:{ name:f.name, kind:'folder', it:f }, loc:'' }; } return { r:r, e:r.e || null, loc:r.loc }; };
    var writable = function(l, cmd, t){ if(l === '*apps' || l === 'trash'){ err(cmd+': '+t+': Permission denied'+(l === 'trash' ? ' (the Trash only takes what you throw away)' : '')); return false; } return true; };
    var go = function(l){ if(l !== S.cwd) S.prev = S.cwd; S.cwd = l; };
    var setBody = function(it, v){
      nbodySet(it.id, v); it.m = Date.now(); deskSave();
      var w = WM.wins.jot; if(w && JOT.id === it.id){ var ta = $('.jot-text', w.body); if(ta) ta.value = v; jotFoot(); jotPrev(); }   /* the note open in Jot shows it at once */
      drender();
    };
    var notesIn = function(l, deep){ if(l === '*apps') return []; var own = (l === 'trash' ? dtrashed() : ditems(l)).filter(function(x){ return x.kind === 'note'; }); if(deep && l === '') ditems('').filter(function(x){ return x.kind === 'folder'; }).forEach(function(f){ own = own.concat(dkids(f.id).filter(function(x){ return x.kind === 'note'; })); }); return own; };
    var rel = function(it){ var w = it.in || ''; return w === here() ? it.name : (w === 'trash' ? '~/.Trash/' : w ? '~/'+ditem(w).name+'/' : '~/')+it.name; };
    var bytes = function(s){ try { return new Blob([s]).size; } catch(e){ return String(s).length; } };
    var when = function(t){ var d = new Date(t || Date.now()); return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()]+' '+String(d.getDate()).padStart(2, ' ')+' '+String(d.getHours()).padStart(2, '0')+':'+String(d.getMinutes()).padStart(2, '0'); };
    var tok = function(e){ var n = esc(q(e.name)); return e.kind === 'folder' || e.kind === 'dot' ? o(n+'/') : n; };
    var lsLine = function(e){
      var it = e.it, kids = e.kind === 'folder' ? dkids(it.id).length : 0;
      var perm = e.kind === 'note' || e.kind === 'pdf' ? '-rw-r--r--' : e.kind === 'alias' ? 'lrwxr-xr-x' : 'drwxr-xr-x';
      var size = e.kind === 'note' ? bytes(nbody(it.id)) : e.kind === 'pdf' ? 117396 : e.kind === 'folder' ? 64 + kids*32 : e.kind === 'alias' ? 32 : 4096;
      var date = it ? when(it.m || it.t) : 'Sep  3 14:00';
      return perm+'  '+esc(USER.name)+'  staff  '+String(size).padStart(7, ' ')+'  '+date+'  '+tok(e)+(e.kind === 'alias' ? ' -&gt; /Applications/'+esc(e.app)+'.app' : '');
    };
    var gone = function(){ return (DK().gone || []).filter(function(a){ return APPS[a]; }); };
    var C = {};
    C.pwd = function(){ print(esc(abs(here()))); };
    C.cd = function(arg){
      var P = parse(arg), t = P.a[0];
      if(t == null || t === '~'){ go(''); return; }
      if(t === '-'){ go(okDir(S.prev) ? S.prev : ''); print(esc(dirPath(here()))); return; }
      var r = walk(t);
      if(r.dir != null){ go(r.dir); return; }
      err('cd: '+(r.e ? 'not a directory' : 'no such file or directory')+': '+t);
    };
    C.ls = function(arg){
      var P = parse(arg), f = P.f, ts = P.a.length ? P.a : [null];
      ts.forEach(function(t){
        var r = t == null ? { dir:here() } : walk(t);
        if(r.err || (r.dir == null && !r.e)){ err('ls: '+t+': No such file or directory'); return; }
        var list = r.dir != null ? entries(r.dir) : [r.e];
        if(f.a && r.dir != null) list = [{ name:'.', kind:'dot' }, { name:'..', kind:'dot' }].concat(r.dir === '' ? [{ name:'.Trash', kind:'dot' }] : [], list);
        if(ts.length > 1 && r.dir != null) print(esc(t)+':', 'dim');
        if(f.l){ var n = list.filter(function(e){ return e.kind !== 'dot'; }).length; print('total '+n+(list.length ? '\n'+list.map(lsLine).join('\n') : '')); }
        else print(list.map(tok).join(f['1'] ? '\n' : '  '));
      });
    };
    C.tree = function(arg){
      var t = parse(arg).a[0], r = t == null ? { dir:here() } : walk(t);
      if(r.dir == null){ err('tree: '+t+' [error opening dir]'); return; }
      var out = [r.dir === '' ? '.' : esc(q(dirName(r.dir)))], nd = 0, nf = 0;
      var draw = function(list, pre){ list.forEach(function(e, i){ var end = i === list.length - 1; out.push(pre+(end ? '\u2514\u2500\u2500 ' : '\u251c\u2500\u2500 ')+tok(e)); if(e.kind === 'folder' && r.dir !== 'trash'){ nd++; draw(entries(e.it.id), pre+(end ? '    ' : '\u2502   ')); } else nf++; }); };
      draw(entries(r.dir), '');
      print(out.join('\n')+'\n\n'+(nd === 1 ? '1 directory' : nd+' directories')+', '+plural(nf, 'file'));
    };
    C.find = function(arg){
      var ts = toks(arg).map(function(x){ return x.v; }), start = null, pat = null, glob = false;
      for(var i = 0; i < ts.length; i++){ if(/^-i?name$/.test(ts[i])){ pat = ts[++i] || ''; glob = true; } else if(start == null && pat == null && walk(ts[i]).dir != null && !/resume/i.test(ts[i])) start = ts[i]; else if(pat == null) pat = ts[i]; }
      var r = start == null ? { dir:here() } : walk(start), base = start == null ? '.' : start.replace(/\/+$/, ''), paths = [];
      var add = function(l, pre){ entries(l).forEach(function(e){ paths.push({ p:pre+'/'+q(e.name), n:e.name }); if(e.kind === 'folder' && l !== 'trash') add(e.it.id, pre+'/'+q(e.name)); }); };
      add(r.dir, base);
      if(pat){ var re; if(glob){ re = new RegExp('^'+pat.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.')+'$', 'i'); } paths = paths.filter(function(x){ return glob ? re.test(x.n) : x.n.toLowerCase().indexOf(pat.toLowerCase()) > -1; }); }
      if(paths.length) print(paths.map(function(x){ return esc(x.p); }).join('\n')); else dim('find: nothing matches '+(pat || ''));
    };
    C.mkdir = function(arg){
      var P = parse(arg), made = 0; if(!P.a.length){ print('usage: mkdir [-p] directory ...'); return; }
      P.a.forEach(function(t){
        var r = walk(t);
        if(r.err){ err('mkdir: '+t+': No such file or directory'); return; }
        if(r.dir != null || r.e){ if(!P.f.p) err('mkdir: '+t+': File exists'); return; }
        if(r.loc !== ''){ err('mkdir: '+t+': '+(r.loc === 'trash' || r.loc === '*apps' ? 'Permission denied' : 'folders sit on the Desktop, one level deep. try it from ~')); return; }
        var n = r.name.replace(/[\/\\:]/g, '-').replace(/\s+/g, ' ').trim().slice(0, 60); if(!n || n === '..'){ err('mkdir: '+t+': Invalid argument'); return; }
        dnew('folder', { name:n }); made++;
      });
      if(made){ delete DK().view.icons; deskSave(); drender(); }
    };
    C.touch = function(arg){
      var P = parse(arg); if(!P.a.length){ print('usage: touch file ...'); return; }
      P.a.forEach(function(t){
        var r = walk(t);
        if(r.err){ err('touch: '+t+': No such file or directory'); return; }
        if(r.dir != null) return;
        if(r.e){ if(r.e.kind === 'note'){ r.e.it.m = Date.now(); deskSave(); drender(); } return; }
        if(!writable(r.loc, 'touch', t)) return;
        jotCreate(r.loc, null, '', r.name);
      });
    };
    /* echo words, echo words > file (replaces it), echo words >> file (adds a line) */
    var echo0 = CMD.echo;
    C.echo = function(arg){
      var s = String(arg || ''), qc = '', i, cut = -1;
      for(i = 0; i < s.length; i++){ var c = s.charAt(i); if(qc){ if(c === qc) qc = ''; continue; } if(c === '"' || c === "'"){ qc = c; continue; } if(c === '>'){ cut = i; break; } }
      if(cut < 0){ echo0(arg); return; }
      var add = s.charAt(cut + 1) === '>', file = toks(s.slice(cut + (add ? 2 : 1))).map(function(x){ return x.v; })[0];
      var text = s.slice(0, cut).trim().replace(/^-[ne]+\s+/, '').replace(/"((?:\\.|[^"\\])*)"|'([^']*)'/g, function(m0, a, b){ return a != null ? a.replace(/\\"/g, '"') : b; }).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
      if(!file){ err('zsh: parse error near `\\n\''); return; }
      var r = walk(file);
      if(r.err){ err('zsh: no such file or directory: '+file); return; }
      if(r.dir != null){ err('zsh: is a directory: '+file); return; }
      if(!writable(r.loc, 'zsh', file)) return;
      if(r.e && r.e.kind !== 'note'){ err('zsh: permission denied: '+file); return; }
      if(r.e){ jotFlush(); var cur = nbody(r.e.it.id); setBody(r.e.it, add ? cur+(cur && !/\n$/.test(cur) ? '\n' : '')+text : text); return; }
      jotCreate(r.loc, null, text, r.name);
    };
    var cat0 = CMD.cat;
    C.cat = function(arg){
      var P = parse(arg); if(!P.a.length){ print('usage: cat file ...'); return; }
      P.a.forEach(function(t){
        if(/\.env|passwd|shadow/.test(t)){ err('cat: '+t+': permission denied. nice try though.'); return; }
        var x = at(t), e = x.e;
        if(x.special != null || (e && e.kind === 'folder')){ err('cat: '+t+': Is a directory'); return; }
        if(e && e.kind === 'note'){ jotFlush(); var b = nbody(e.it.id); print(b ? esc(b) : '<span class="dim">('+esc(e.name)+' is empty)</span>'); return; }
        if((e && e.kind === 'pdf') || (!e && /resume/i.test(t))){ cat0('resume'); return; }
        if(e){ print('cat: '+esc(t)+': is an app. try '+o('open '+esc(e.app)), 'err'); return; }
        var nt = jnoteNamed(t); if(nt){ jotFlush(); print(esc(nbody(nt.id)) || '<span class="dim">('+esc(nt.name)+' is empty)</span>'); return; }   /* a note by name from anywhere, as before */
        err('cat: '+t+': No such file or directory');
      });
    };
    var part = function(arg, end, old){
      var P = parse(arg), n = 10, a = P.a.slice(), cmd = end ? 'tail' : 'head';
      if(P.f.n && /^\d+$/.test(a[0] || '')) n = +a.shift();
      a = a.filter(function(x){ var m = /^-(\d+)$/.exec(x); if(m){ n = +m[1]; return false; } return true; });
      if(!a.length){ old(arg); return; }
      a.forEach(function(t){
        var x = at(t), e = x.e;
        if(!(e && e.kind === 'note')){ if((e && e.kind === 'pdf') || (!e && /resume/i.test(t))) old('resume'); else err(cmd+': '+t+': '+(x.special != null || (e && e.kind === 'folder') ? 'Is a directory' : 'No such file or directory')); return; }
        jotFlush(); var L = nbody(e.it.id).split('\n'), out = end ? L.slice(Math.max(0, L.length - n)) : L.slice(0, n);
        if(a.length > 1) dim('==> '+e.name+' <==');
        print(esc(out.join('\n')));
      });
    };
    var head0 = CMD.head, tail0 = CMD.tail, wc0 = CMD.wc, grep0 = CMD.grep;
    C.head = function(a){ part(a, false, head0); }; C.tail = function(a){ part(a, true, tail0); };
    C.wc = function(arg){
      var P = parse(arg); if(!P.a.length){ wc0(arg); return; }
      P.a.forEach(function(t){ var x = at(t), e = x.e; if(!(e && e.kind === 'note')){ if((e && e.kind === 'pdf') || (!e && /resume/i.test(t))) wc0('resume'); else err('wc: '+t+': '+(x.special != null || (e && e.kind === 'folder') ? 'read: Is a directory' : 'open: No such file or directory')); return; }
        jotFlush(); var b = nbody(e.it.id); print([(b.match(/\n/g) || []).length, nwords(b), bytes(b)].map(function(v){ return String(v).padStart(8, ' '); }).join('')+' '+esc(e.name)); });
    };
    var mark = function(line, re){ var g = new RegExp(re.source, re.flags.replace('g', '')+'g'), out = '', last = 0, m; while((m = g.exec(line))){ if(!m[0].length){ g.lastIndex++; continue; } out += esc(line.slice(last, m.index))+o(esc(m[0])); last = m.index + m[0].length; } return out+esc(line.slice(last)); };
    C.grep = function(arg){
      var P = parse(arg), pat = P.a[0], files = P.a.slice(1), re, list = [];
      if(pat == null){ print('usage: grep [-i] [-n] [-l] [-r] pattern [file ...]'); return; }
      try { re = new RegExp(pat, P.f.i ? 'i' : ''); } catch(e){ re = new RegExp(pat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), P.f.i ? 'i' : ''); }
      jotFlush();
      if(files.length) files.forEach(function(t){ var x = at(t), e = x.e; if(x.special != null || (e && e.kind === 'folder')){ if(P.f.r || P.f.R) list = list.concat(notesIn(x.special != null ? x.special : e.it.id, true)); else err('grep: '+t+': Is a directory'); return; } if(e && e.kind === 'note') list.push(e.it); else if(!e || e.kind !== 'pdf') err('grep: '+t+': No such file or directory'); });
      else list = notesIn(here(), true);
      var many = !files.length || list.length > 1, hits = 0, out = [];
      list.forEach(function(it){ var any = false; nbody(it.id).split('\n').forEach(function(l, i){ if(!re.test(l)) return; hits++; if(P.f.l){ any = true; return; } if(out.length < 200) out.push((many ? '<span class="dim">'+esc(rel(it))+':</span>' : '')+(P.f.n ? '<span class="dim">'+(i + 1)+':</span>' : '')+mark(l, re)); }); if(P.f.l && any) out.push(esc(rel(it))); });
      if(out.length) print(out.join('\n'));
      else if(!files.length && !list.length) grep0(pat);   /* no notes to search: the old line */
      else dim('(no matches)');
    };
    /* rm: to the Trash, and inside ~/.Trash for good. rmdir: an empty folder only */
    var refuse = function(){ print('rm: refusing to remove everything. Chase worked hard on this.', 'err'); toast('Phew', 'rm -rf / has been politely declined.'); };
    var rmAll = function(arg, cmd){
      var P = parse(arg), a = P.a, deep = P.f.r || P.f.R, h = H();
      if(/\*/.test(arg || '') || a.some(function(t){ return /^(\/+|~\/?|\.\.?\/?|\/?desktop\/?|~\/desktop\/?)$/i.test(t) || t === h || t === h+'/'; })){ refuse(); return; }
      if(!a.length){ print('usage: '+cmd+(cmd === 'rm' ? ' [-r] file ...' : ' directory ...')); return; }
      var bin = [], erase = [], apps = [];
      a.forEach(function(t){
        var x = at(t), e = x.e;
        if(x.special != null){ err(cmd+': '+t+': '+(x.special === 'trash' ? 'the Trash stays. empty erases what is in it' : 'Permission denied')); return; }
        if(!e){ if(!P.f.f) err(cmd+': '+t+': No such file or directory'); return; }
        if(e.kind === 'pdf'){ err(cmd+': resume.pdf: Operation not permitted. it is the whole point.'); return; }
        if(cmd === 'rmdir' && e.kind !== 'folder'){ err('rmdir: '+t+': Not a directory'); return; }
        if(e.kind === 'app'){
          if(appRemovable(e.app)){ appRemove(e.app); apps.push(e.app); }
          else err(cmd+': '+e.name+': '+(e.app === 'terminal' ? 'Terminal can\u2019t remove itself' : APPS[e.app].title+' is part of tigOS'));
          return;
        }
        if(e.kind === 'folder' && x.r.dir != null && cmd === 'rm' && !deep && !(P.f.d && !dkids(e.it.id).length)){ err('rm: '+t+': is a directory'); return; }
        if(e.kind === 'folder' && cmd === 'rmdir' && dkids(e.it.id).length){ err('rmdir: '+t+': Directory not empty'); return; }
        (x.loc === 'trash' ? erase : bin).push(e.it);
      });
      if(bin.length){ dtrash(bin.map(function(it){ return it.id; })); dim('moved '+bin.map(function(it){ return q(it.name); }).join(', ')+' to the Trash'); }
      if(erase.length){ derase(erase.map(function(it){ return it.id; })); dim('erased '+erase.map(function(it){ return q(it.pkg ? it.app+'.app' : it.name); }).join(', ')+' for good'); }
      if(apps.length) print('moved '+apps.map(function(x){ return esc(x)+'.app'; }).join(', ')+' to the Trash. '+o('brew install '+esc(apps[0]))+' or Put Back brings '+(apps.length === 1 ? 'it' : 'them')+' back');
    };
    C.rm = function(a){ rmAll(a, 'rm'); }; C.rmdir = function(a){ rmAll(a, 'rmdir'); };
    var cleanName = function(it, n){ return it.kind === 'note' ? nname(n) : String(n).replace(/[\/\\:]/g, '-').replace(/\s+/g, ' ').trim().slice(0, 60); };
    /* mv: into a directory, or to a new name (and place); never over something that is there */
    C.mv = function(arg){
      var P = parse(arg), a = P.a; if(a.length < 2){ print('usage: mv source ... target'); return; }
      var dst = a[a.length - 1], D = walk(dst), into = D.dir != null ? D.dir : null;
      if(a.length > 2 && into == null){ err('mv: '+dst+' is not a directory'); return; }
      a.slice(0, -1).forEach(function(s){
        var x = at(s), e = x.e; if(x.special != null){ err('mv: '+s+': Permission denied'); return; }
        if(!e){ err('mv: '+s+': No such file or directory'); return; }
        var it = e.it;
        if(e.kind === 'app' || e.kind === 'pdf'){ err('mv: '+e.name+': Operation not permitted. ln -s makes an alias instead'); return; }
        if(e.kind === 'pkg' && into !== 'trash'){ err('mv: '+e.name+': '+o('restore')+' puts an app back'); return; }
        if(into != null){
          if(into === '*apps'){ err('mv: Applications: Permission denied'); return; }
          if(into === it.id){ err('mv: '+s+' and '+dst+' are the same folder'); return; }
          if(into === 'trash'){ dtrash([it.id]); return; }
          if(it.kind === 'folder' && into !== ''){ err('mv: '+s+': folders can\u2019t go inside folders'); return; }
          if(it.in === 'trash') dputBack([it.id]);
          if((it.in || '') !== into) dmove([it.id], into);
          return;
        }
        if(D.err){ err('mv: '+dst+': No such file or directory'); return; }
        if(D.e && D.e.it !== it){ err('mv: '+dst+': File exists. rm it first'); return; }
        if(D.loc === '*apps' || D.loc === 'trash'){ err('mv: '+dst+': Permission denied'); return; }
        if(it.kind === 'folder' && D.loc !== ''){ err('mv: '+s+': folders can\u2019t go inside folders'); return; }
        var nn = cleanName(it, D.name); if(!nn){ err('mv: '+dst+': Invalid argument'); return; }
        if(!dnameFree(nn, D.loc, it.id)){ err('mv: '+nn+': File exists'); return; }
        if(it.in === 'trash') dputBack([it.id]);
        if((it.in || '') !== D.loc) dmove([it.id], D.loc);
        it.name = nn; delete it.auto; deskSave(); drender(); winTitles();
      });
    };
    /* links and copies: an app becomes an alias, a note a new note, a folder (cp -r) a new folder with copies inside */
    var lnTo = function(app, l, t){
      if(l === '*apps' || l === 'trash'){ err('ln: '+t+': Permission denied'); return false; }
      if(l === ''){ daddApp(app, true); return true; }
      if(dkids(l).some(function(x){ return x.kind === 'app' && x.app === app; })){ err('ln: '+APPS[app].title+': File exists'); return false; }
      dnew('app', { app:app, name:dnameNew(APPS[app].title, l), in:l }); deskSave(); drender(); return true;
    };
    C.cp = function(arg){
      var P = parse(arg), a = P.a; if(a.length < 2){ print('usage: cp [-r] source ... target'); return; }
      var dst = a[a.length - 1], D = walk(dst), into = D.dir != null ? D.dir : null;
      if(a.length > 2 && into == null){ err('cp: '+dst+' is not a directory'); return; }
      a.slice(0, -1).forEach(function(s){
        var x = at(s), e = x.e; if(x.special != null){ err('cp: '+s+' is a directory (not copied)'); return; }
        if(!e){ err('cp: '+s+': No such file or directory'); return; }
        if(e.kind === 'pdf'){ err('cp: resume.pdf: the Download button in Resume makes a real copy'); return; }
        if(e.kind === 'pkg'){ err('cp: '+e.name+' is in the Trash'); return; }
        var l = into != null ? into : D.loc, name = into != null ? null : D.name;
        if(into == null && (D.err || D.e)){ err('cp: '+dst+': '+(D.err ? 'No such file or directory' : 'File exists')); return; }
        if(e.kind === 'app' || e.kind === 'alias'){ lnTo(e.app, l, dst); return; }
        if(l === '*apps' || l === 'trash'){ err('cp: '+dst+': Permission denied'); return; }
        if(e.kind === 'note'){ jotFlush(); jotCreate(l, null, nbody(e.it.id), name || e.name); return; }
        if(!(P.f.r || P.f.R)){ err('cp: '+s+' is a directory (not copied). cp -r copies it'); return; }
        if(l !== ''){ err('cp: '+s+': folders can\u2019t go inside folders'); return; }
        var f = dnew('folder', { name:name ? cleanName(e.it, name) : dnameNew(e.it.name, ''), tag:e.it.tag || '' });
        dkids(e.it.id).forEach(function(kid){ if(kid.kind === 'note') jotCreate(f.id, null, nbody(kid.id), kid.name); else dnew('app', { app:kid.app, name:kid.name, in:f.id }); });
        delete DK().view.icons; deskSave(); drender();
      });
    };
    var ln0 = CMD.ln;
    C.ln = function(arg){
      var P = parse(arg); if(!P.f.s || !P.a.length){ ln0(arg); return; }
      var x = at(P.a[0]), app = x.e && (x.e.kind === 'app' || x.e.kind === 'alias') ? x.e.app : appOf(P.a[0]);
      if(!app || APPS[app].sys){ err('ln: '+P.a[0]+': No such file or directory'); return; }
      if(appGone(app)){ print('ln: '+esc(app)+' isn\u2019t installed. '+o('brew install '+esc(app)), 'err'); return; }
      var D = P.a[1] == null ? { dir:here() } : walk(P.a[1]);
      if(D.dir == null){ err('ln: '+P.a[1]+': Not a directory'); return; }
      if(lnTo(app, D.dir, P.a[1] || '.')) dim('made an alias of '+app+'.app in '+dirPath(D.dir));
    };
    /* open: a folder or place in Den, a note in Jot, an app (or say how to get it back) */
    var open0 = CMD.open;
    var opApp = function(a){ if(appGone(a)){ print('open: '+esc(APPS[a].title)+' isn\u2019t installed. '+o('brew install '+esc(a))+' brings it back', 'err'); return; } open(a); print('opening '+esc(a)); };
    C.open = function(arg){
      var P = parse(arg), t = P.a[0];
      if(t == null || t === '.'){ var l = here(); if(denOpen(l)){ print('opening Den'+(l ? ' at '+esc(dirName(l)) : '')); return; } open0(''); return; }
      var x = at(t), e = x.e;
      if(x.special != null || (e && e.kind === 'folder' && x.loc !== 'trash')){ var to = x.special != null ? x.special : e.it.id; denOpen(to); print('opening '+esc(to === '' ? 'Desktop' : dirName(to))+' in Den'); return; }
      if(e && x.loc === 'trash'){ print('open: '+esc(e.name)+' is in the Trash. '+o('restore '+esc(q(e.name)))+' puts it back', 'err'); return; }
      if(e && e.kind === 'note'){ if(appGone('jot')){ print('open: Jot isn\u2019t installed. '+o('brew install jot'), 'err'); return; } jotOpen(e.it.id); print('opening '+esc(e.name)+' in Jot'); return; }
      if(e && (e.kind === 'app' || e.kind === 'alias')){ opApp(e.app); return; }
      if(e && e.kind === 'pdf'){ open0('resume'); return; }
      var a = appOf(t); if(a){ opApp(a); return; }
      open0(arg);
    };
    /* the editors open the note in Jot, made first if it is new */
    var editor = function(name, old){ return function(arg){
      var P = parse(arg), t = P.a[0];
      if(t == null){ if(old){ old(arg); return; } if(appGone('jot')){ print(name+': Jot isn\u2019t installed, and it does the editing here. '+o('brew install jot'), 'err'); return; } jotOpen(); print('opening Jot'); return; }
      var r = walk(t);
      if(r.err){ err(name+': '+t+': No such file or directory'); return; }
      if(r.dir != null){ err(name+': '+t+': Is a directory'); return; }
      if(r.e && r.e.kind !== 'note'){ err(name+': '+t+': not a text file'); return; }
      if(r.loc === 'trash'){ print(name+': '+esc(t)+' is in the Trash. '+o('restore')+' it first', 'err'); return; }
      if(appGone('jot')){ print(name+': Jot isn\u2019t installed, and it does the editing here. '+o('brew install jot'), 'err'); return; }
      if(!r.e && !writable(r.loc, name, t)) return;
      var it = r.e ? r.e.it : jotCreate(r.loc, null, '', r.name);
      jotOpen(it.id); jotFocus(true);
      print(/^(vim?|nvim)$/.test(name) ? 'opened '+esc(it.name)+' in Jot. no :q needed, it saves as you type.' : 'opening '+esc(it.name)+' in Jot');
    }; };
    ['nano', 'pico', 'vim', 'vi', 'nvim', 'emacs', 'edit', 'code', 'subl', 'micro', 'mate', 'gedit', 'textedit', 'notepad', 'jot'].forEach(function(n){ C[n] = editor(n, n === 'jot' ? null : CMD[n]); });
    /* the Trash */
    C.trash = function(arg){ if(String(arg || '').trim()){ rmAll('-r '+arg, 'rm'); return; } var es = entries('trash'); if(!es.length){ dim('the Trash is empty.'); return; } print(es.map(tok).join('  ')); dim(plural(es.length, 'item')+'. restore <name> puts one back, empty erases them for good.'); };
    C.restore = function(arg){
      var P = parse(arg), es = entries('trash');
      if(!P.a.length && !P.f.a){ print('usage: restore &lt;name&gt; | restore all'); if(es.length) dim('in the Trash: '+es.map(function(e){ return q(e.name); }).join('  ')); return; }
      var ids = [];
      if(P.f.a || (P.a.length === 1 && P.a[0] === 'all')) ids = es.map(function(e){ return e.it.id; });
      else P.a.forEach(function(t){ var e = findIn('trash', t.replace(/^~\/\.trash\//i, '')); if(e) ids.push(e.it.id); else err('restore: '+t+': not in the Trash'); });
      if(!ids.length) return;
      var names = ids.map(function(id){ var it = ditem(id); return it.pkg ? it.app+'.app' : it.name; });
      dputBack(ids); dim('put back '+names.map(q).join(', '));
    };
    C.empty = function(arg){
      var n = dtrashed().length; if(!n){ dim('the Trash is already empty.'); return; }
      if(/(^|\s)(-f|-y|--force|--yes)\b/.test(arg || '')){ dempty(); print('erased '+plural(n, 'item')+' for good.'); toast('Trash emptied', n === 1 ? '1 item erased.' : n+' items erased.'); return; }
      demptyAsk(); dim('confirm in the dialog to erase '+plural(n, 'item')+' for good (empty -f skips it)');
    };
    /* apps: brew, apt, and the plain words */
    var whyNot = function(a){ return a === 'terminal' ? 'Error: Terminal can\u2019t uninstall itself. who would type brew install?' : 'Error: '+APPS[a].title+' is part of tigOS. it stays.'; };
    var install = function(t, apt){
      var a = appOf(t); if(!a){ err(apt ? 'E: Unable to locate package '+t : 'Error: No available formula with the name "'+t+'".'); return; }
      if(!appGone(a)){ print((apt ? esc(a)+' is already the newest version.' : 'Warning: '+esc(a)+' is already installed and up-to-date.'), 'dim'); return; }
      appInstall(a);
      print((apt ? 'Reading package lists... Done\nUnpacking '+esc(a)+'.app ...\nSetting up '+esc(a)+' ...\n' : '==&gt; Downloading '+esc(a)+'.app\n==&gt; Installing '+esc(a)+'\n\u{1F37A}  ')+esc(APPS[a].title)+' is installed'+(dockHas(a) ? ', back in the Dock' : ''), 'ok');
    };
    var uninstall = function(t, apt){
      var a = appOf(t); if(!a){ err(apt ? 'E: Unable to locate package '+t : 'Error: No such keg: '+t); return; }
      if(appGone(a)){ err((apt ? 'Package \''+a+'\' is not installed, so not removed' : 'Error: '+a+' is not installed.')); return; }
      if(!appRemovable(a)){ err(whyNot(a)); return; }
      appRemove(a);
      print((apt ? 'Removing '+esc(a)+' ...' : 'Uninstalling '+esc(a)+'.app...')+' moved to the Trash. '+o('brew install '+esc(a))+' or Put Back brings it back');
    };
    var pkgs = function(sub, rest, apt){
      if(/^(install|reinstall)$/.test(sub)){ if(!rest.length) print('usage: '+(apt ? 'apt' : 'brew')+' install &lt;app&gt;'); rest.forEach(function(t){ install(t, apt); }); return true; }
      if(/^(uninstall|remove|rm|purge|autoremove)$/.test(sub)){ if(!rest.length) print('usage: '+(apt ? 'apt remove' : 'brew uninstall')+' &lt;app&gt;'); rest.forEach(function(t){ uninstall(t, apt); }); return true; }
      if(/^(list|ls)$/.test(sub)){ print(esc(appsInstalled().join('  '))); var g = gone(); if(g.length) print('not installed: '+esc(g.join('  '))+'  ('+o('brew install &lt;app&gt;')+')', 'dim'); return true; }
      return false;
    };
    var brew0 = CMD.brew, apt0 = CMD.apt;
    C.brew = function(arg){ var P = parse(arg); if(!pkgs((P.a[0] || '').toLowerCase(), P.a.slice(1), false)) brew0(arg); };
    C.apt = function(arg){ var P = parse(arg); if(!pkgs((P.a[0] || '').toLowerCase(), P.a.slice(1), true)) apt0(arg); };
    C['apt-get'] = function(a){ C.apt(a); };
    C.install = function(a){ pkgs('install', parse(a).a, false); }; C.reinstall = C.install; C.uninstall = function(a){ pkgs('uninstall', parse(a).a, false); };
    var sudo0 = CMD.sudo;
    C.sudo = function(arg){ var c = String(arg || '').split(' ')[0].toLowerCase(); if(USER.name !== 'ariel' && /^(apt|apt-get|brew|rm|rmdir|mv|cp|mkdir|touch|ln|install|uninstall|reinstall|empty|restore|nano|vim|vi)$/.test(c)){ CMD[c](String(arg).slice(c.length).trim()); return; } sudo0(arg); };
    C.file = function(arg){ parse(arg).a.forEach(function(t){ var x = at(t), e = x.e, k = x.special != null ? 'directory' : !e ? 'cannot open (No such file or directory)' : e.kind === 'note' ? (nbody(e.it.id) ? 'UTF-8 text' : 'empty') : e.kind === 'folder' ? 'directory' : e.kind === 'pdf' ? 'PDF document, version 1.7, 1 page' : 'tigOS application'+(e.kind === 'alias' ? ' (alias)' : ''); print(esc(t)+': '+esc(k)); }); };
    /* windows and powershell spellings */
    var slashes = function(a){ return parse(String(a || '').replace(/(^|\s)\/[a-z](?=\s|$)/gi, ' ')).a.map(q).join(' '); };
    C.del = function(a){ C.rm(slashes(a)); }; C.erase = C.del; C.rd = function(a){ C.rm((/(^|\s)\/s(\s|$)/i.test(a || '') ? '-r ' : '')+slashes(a)); }; C.md = function(a){ C.mkdir(a); };
    C.move = function(a){ C.mv(slashes(a)); }; C.ren = C.move; C.rename = C.move; C.copy = function(a){ C.cp('-r '+slashes(a)); };
    var type0 = CMD.type; C.type = function(a){ var t = parse(a).a[0], e = t != null && at(t).e; if(e && e.kind === 'note'){ C.cat(a); return; } type0(a); };
    var ps = function(a){ return String(a || '').replace(/-(itemtype|type)\s+\S+/ig, ' ').replace(/-(path|name|literalpath|recurse|force)\b/ig, ' ').trim(); };   /* -Path, -Name and friends fall away */
    C['remove-item'] = function(a){ C.rm((/-recurse\b/i.test(a || '') ? '-r ' : '')+ps(a)); }; C.ri = C['remove-item'];
    C['new-item'] = function(a){ if(/-(itemtype|type)\s+dir/i.test(a || '')) C.mkdir(ps(a)); else C.touch(ps(a)); }; C.ni = C['new-item'];
    C['get-content'] = function(a){ C.cat(a); }; C.gc = C['get-content']; C['copy-item'] = function(a){ C.cp('-r '+a); }; C['move-item'] = function(a){ C.mv(a); }; C['rename-item'] = function(a){ C.mv(a); };
    C.mkfile = function(a){ C.touch(a); };
    /* every one of these redraws the prompt afterwards: the folder you are in may have a new name, or be gone */
    Object.keys(C).forEach(function(n){ var f = C[n]; CMD[n] = function(a){ f(a); k.refresh(); }; });
    /* tab completion over what is here */
    var names = function(dirs){ var l = here(), es = entries(l).filter(function(e){ return !dirs || e.kind === 'folder'; }).map(function(e){ return q(e.name); }); return es.concat(dirs ? (l === '' ? ['Applications', '.Trash'] : ['..']) : []); };
    return {
      tilde:function(){ var l = here(); return USER.name === 'greggyd' ? dirPath(l) : dirName(l); },
      reset:function(){ S.cwd = ''; S.prev = ''; },
      complete:function(ARGS){
        var files = function(){ return names(false); };
        ['cat', 'less', 'more', 'bat', 'head', 'tail', 'wc', 'rm', 'rmdir', 'mv', 'cp', 'touch', 'file', 'grep', 'ln', 'del', 'ren', 'copy', 'move', 'type', 'trash'].concat(['nano', 'pico', 'vim', 'vi', 'nvim', 'emacs', 'edit', 'code', 'subl', 'micro', 'mate', 'gedit', 'textedit', 'notepad', 'jot']).forEach(function(c){ ARGS[c] = files; });
        ARGS.cd = function(){ return names(true); }; ARGS.tree = ARGS.cd; ARGS.mkdir = ARGS.cd; ARGS.ls = function(){ return names(true).concat(names(false)); };
        ARGS.open = function(){ return VIS().concat(names(false)); };
        ARGS.restore = function(){ return entries('trash').map(function(e){ return q(e.name); }).concat(['all']); };
        ARGS.brew = function(){ return ['install', 'uninstall', 'reinstall', 'list'].concat(Object.keys(APPS).filter(function(x){ return !APPS[x].sys; })); };
        ARGS.apt = function(){ return ['install', 'remove', 'list'].concat(Object.keys(APPS).filter(function(x){ return !APPS[x].sys; })); };
        ARGS.install = function(){ return gone(); }; ARGS.reinstall = ARGS.install; ARGS.uninstall = function(){ return appsInstalled().filter(appRemovable); };
      }
    };
  }
/* tigOS core app.js, part 28: boot. The parts in this folder are concatenated in name order by build.py, so they share one scope. */
  /* ---------------- boot ---------------- */
  var booted = false;
  function bootSeq(toLogin){
    var msgs = ['Starting up', 'Loading portfolio', 'Mounting resume.pdf', 'Checking the weather', 'Ready'];
    var el = $('#bootMsg'); var i = 0; el.textContent = msgs[0];
    var iv = setInterval(function(){ i++; if(msgs[i]) el.textContent = msgs[i]; else clearInterval(iv); }, 440);
    setTimeout(function(){
      if(toLogin){ root.classList.add('handoff'); loginScreen(); root.classList.remove('booting'); setTimeout(function(){ root.classList.remove('handoff'); }, 560); }   /* login fades in over the boot card; the boot only drops away once it is opaque */
      else { root.classList.remove('booting'); loginItems(); }
      if(!booted){ booted = true; setTimeout(function(){ toast('Welcome to tigOS', isMobile() ? 'Tap an app in the dock to start.' : 'Open Projects, or press \u2318K to search.'); }, 700); }
    }, 2250);
  }
  var savedUser = USTORE.get(); if(savedUser !== 'chase') setUser(savedUser, true);   /* the tab was closed as GreggyD or Ariel: come back as them, no pop-up */
  bootSeq();
  function reclamp(){
    if(isMobile()) return;
    Object.keys(WM.wins).forEach(function(k){
      var w = WM.wins[k];
      var ar = area();
      if(w.max){ w.el.style.left = ar.x0+'px'; w.el.style.width = (ar.x1 - ar.x0)+'px'; w.el.style.height = ar.y1+'px'; return; }
      var lim = ar.y1, cy = w.el.offsetTop + w.el.offsetHeight/2;   // remember the centre first
      if(w.el.offsetHeight > lim - 10){ w.el.style.height = Math.max(240, lim - 10)+'px'; }
      var h = w.el.offsetHeight;
      if(w.el.offsetTop < 0 || w.el.offsetTop + h > lim){ w.el.style.top = Math.max(0, Math.min(lim - h, Math.round(cy - h/2)))+'px'; }   // re-centre, never jump to the top
    });
  }
  window.addEventListener('resize', reclamp);
  setTimeout(function(){ arcade(); }, 600);   /* fetch the arcade once the desktop is up */
})();

