node {
    stage('Checkout') {
        git branch: 'master', url: 'https://gitlab.com/Juan-Carlos-Estevez-Vargas/Check-Appointments-Frontend-Angular.git'
    }
    stage('Install node modules') {
        sh "npm install"
    }
}
