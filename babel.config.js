module.exports = function(api) {
	api.cache(true)
	return {
		presets: ['@babel/preset-env', 'expo', '@babel/preset-react'],
		plugins: ["@babel/plugin-proposal-class-properties"]
	}
}
