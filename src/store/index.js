import { createStore } from 'vuex'

export default createStore({
  state: {
    sujet: {
      devis: `J'ai besoin d'un devis`,
      business: `Création d'un site web pour mon entreprise`,
      perso: `Création d'un site web personnel(e)`,
      reprise: `Reprise d'un site web existant`,
      maintenance: `Maintenance de mon site`,
      referencement: `J'ai besoin/doit améliorer le référencement de mon site`,
      autre: 'Autre Demande'
    }
  },
  mutations: {
    submitForm() {
      console.log('fonction envoyer');

      // Recuperation des éléments
      const form = document.getElementById('contact_form');

      let submit = document.getElementById('submit')
      let pseudo = document.getElementById('nom');
      let email = document.getElementById('email');
      let sujet = document.getElementById('sujet');
      let message = document.getElementById('message');
      
      // Regex
      let regexPseudo = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/ // /^[A-Za-z0-9][a-z0-9]{3,20}/ // Pseudo
      let regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ // Adresse Email
      // let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ // Mots de Passe
      
      console.log(form);
      console.log(submit);

      
      if (
        regexPseudo.test(pseudo.value) &&
        regexMail.test(email.value) &&
        sujet.value &&
        message.value
        ) {
          const USER_KEY = 'perso';
          let user = JSON.parse(localStorage.getItem(USER_KEY));
          if (!user) {

            const utilisateur = [];
            const perso = {
              utilisateur: pseudo.value,
              email: email.value,
              sujet: sujet.value,
              message: message.value
            }
            localStorage.removeItem('perso');
            utilisateur.push(perso)
            localStorage.setItem(USER_KEY, JSON.stringify(utilisateur));
            console.log('Stocker Donnée Perso dans le LocalStorage');
          } else {
            console.log('bonsoir');
          }
          
          console.log('Merci de vous être inscrit ! Dans le local Storage');
        
        } else {
          console.log(regexPseudo.test(pseudo.value));
          console.log(regexMail.test(email.value));
          console.log(sujet.value);
          console.log(message.value),
          console.log('Formulaire Mal Remplit');
        }
    },
  },
  actions: {
  },
  modules: {
  }
})
