node {

    stages {
        stage('Checkout') {
            git branch: 'master', url: 'https://github.com/Juan-Carlos-Estevez-Vargas/Check-Appointments-Frontend-Angular.git'
        }

        stage('Install node modules') {
            steps {
                echo 'npm install'
            } 
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test'
                echo 'npm run test'
            } 
        }

        stage('Build') {
            steps {|
                 echo 'npm build --prod'
            } 
        }

        stage('Deploy') {
            steps {
                 echo 'deploy'
            } 
        }
    }
    
}
