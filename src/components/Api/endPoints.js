const PORT = process.env.PORT || 5000;

export default {
    base_url: `http://localhost:${PORT}/api`,
    login: '/signIn',
    registry: '/signUp',
    characters: '/getAll'
}