node {

    stage('Checkout') {
        git branch: 'master', url: 'https://github.com/Juan-Carlos-Estevez-Vargas/Check-Appointments-Frontend-Angular.git'
    }

    stage('Install node modules') {
        steps {
            sh 'npm install'
        } 
    }
}
