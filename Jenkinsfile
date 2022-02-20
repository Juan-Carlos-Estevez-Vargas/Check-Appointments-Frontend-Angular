pipeline {
    agent any

    stages {
        stage('Install') {
            steps { sh 'npm install' }
        }

        stage('Test') {
            steps { sh 'npm run test:ci' }
        }

        stage('Biuld') {
            steps {sh 'npm run build:ci'}
        }
    }
}