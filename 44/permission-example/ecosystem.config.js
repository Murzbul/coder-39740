module.exports = {
    apps : [{
        name: "coder/35/docker-cluster",
        script: "./src/index.js",
        error_file: "./logs/err.log",
        watch: false,
        instances: 2,
        ignore_watch: './dist/src/logs/*',
        instance_var: "0"
    }]
}
