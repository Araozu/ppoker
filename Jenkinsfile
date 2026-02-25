pipeline {
    agent {
        docker {
            image 'node:24-alpine'
            args '-u root'
        }
    }
    stages {
        stage('Install pnpm') {
            steps {
                sh 'npm i -g pnpm'
                sh 'pnpm --version'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'pnpm install'
            }
        }
        stage('Build') {
            steps {
                sh 'pnpm run build'
            }
        }
    }
}
