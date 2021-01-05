module.exports = {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
    pages: {
        '*': ['common'],
        '/': ['index'],
        '/coming-soon': ['coming-soon'],
        '/about': ['about'],
        '/supporters': ['supporters'],
    },
    interpolation: {
        prefix: '${',
        suffix: '}',
    },
    loadLocaleFrom: (locale, namespace) =>
        import(`./src/locales/${locale}/${namespace}`).then((m) => m.default),
}
