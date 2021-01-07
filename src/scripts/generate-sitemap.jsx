const fs = require('fs');
const globby = require('globby');

const generateSitemap = async () => {
    // Fetch all routes based on patterns
    // Your folder structure might be different so change bellow to match your needs
    const pages = await globby([
        '../src/pages/**/*.{js,jsx,mdx}', // All routes inside /pages
        '!../src/pages/**/[*.{js,jsx}', // Ignore my dynamic route index Example /pages/blog/[slug].jsx
        '!../src/pages/_*.{js,jsx}', // Ignore next.js files
        '!../src/pages/api', // Ignore API routes
        '!../src/components' // Ignore pages not meant to be indexed
    ]);

    const urlSet = pages
        .map((page) => {
            // Remove none route related parts of filename.
            const path = page
                .replace('pages', '')
                .replace('_content', '')
                .replace(/(.jsx|.js)/, '')
                .replace('.mdx', '');
            // Remove the word index from route
            const route = path === '/index' ? '' : path;
            // Build url portion of sitemap.xml
            const hostname = process.env.HOST;
            return `<url><loc>https://${hostname}/${route}</loc></url>`;
        })
        .join('');

    // Add urlSet to entire sitemap string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

    // Create sitemap file
    fs.writeFileSync('public/sitemap.xml', sitemap);
};

module.exports = generateSitemap;
