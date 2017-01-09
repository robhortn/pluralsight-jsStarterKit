/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prd';
import chalk from 'chalk';

process.env.NODE_EVN = 'production';
console.log(chalk.blue('Generating minified bundle for production.  This will be a moment ...'));

webpack(webpackConfig).run((err, stats) => {
	if (err) { //So a fatal error occurred.  Stop here.
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();

	if (jsonStats.hasErrors) {
		return jsonStats.errors.map(error => console.log(chalk.red(error)));
	}

	if (jsonStats.hasWarnings) {
		console.log(chalk.yellow('Webpack genereated the following warnings: '));
		return jsonStats.warnings.map(warning => console.log(chalk.red(warning)));
	}

	console.log(`Webpack stats: ${stats}`);

	// If we got this far, then the build succeeded.
	console.log(chalk.green('Your app has been built for production and written to /dist!'));

	return 0;
});
