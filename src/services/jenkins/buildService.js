define([
	'services/buildServiceBase',
	'services/request',
	'services/jenkins/jenkinsBuild',
	'mout/object/mixIn',
	'common/joinUrl'
], function (BuildServiceBase, request, JenkinsBuild, mixIn, joinUrl) {

	'use strict';

	var JenkinsBuildService = function (settings) {
		mixIn(this, new BuildServiceBase(settings));
		this.Build = JenkinsBuild;
		this.availableBuilds = availableBuilds;
	};

	JenkinsBuildService.settings = function () {
		return {
			typeName: 'Jenkins',
			baseUrl: 'jenkins',
			icon: 'jenkins/icon.png',
			logo: 'jenkins/logo.png',
			projects: [],
			url: '',
			urlHint: 'URL, e.g. http://ci.jenkins-ci.org/',
			username: '',
			password: '',
			updateInterval: 60
		};
	};

	var availableBuilds = function () {
		return request.json({
			url: joinUrl(this.settings.url, 'api/json?depth=1'),
			username: this.settings.username,
			password: this.settings.password,
			parser: parseAvailableBuilds,
			timeout: 200000
		});
	};

	function parseAvailableBuilds(apiJson) {
		return {
			items: apiJson.jobs.map(function (job, index) {
				return {
					id: job.name,
					name: job.displayName,
					group: null,
					isDisabled: !job.buildable
				};
			}),
			primaryView: apiJson.primaryView.name,
			views: apiJson.views.map(function (view, index) {
				return {
					name: view.name,
					items: view.jobs.map(function (job, index) {
						return job.name;
					})
				};
			})
		};
	}

	return JenkinsBuildService;
});
