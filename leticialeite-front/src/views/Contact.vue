<template>
  <div class="mt-8">
    <v-row class="contact__form">
        <v-form ref="form">
          <v-col cols="12">
            <v-text-field
              v-model="data.name"
              color="#494949"
              label="Nome completo"
              required
              :rules="rules.nameRules"
              validate-on-blur
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              color="#494949"
              label="E-mail"
              required
              v-model="data.email"
              :rules="rules.emailRules"
              validate-on-blur
            />
          </v-col>
          <div class="d-flex flex-row">
            <v-col cols="6">
              <v-text-field
                v-model="data.phone"
                v-mask="['(##) #####-####', '(##) ####-####']"
                v-masked="false"
                color="#494949"
                label="Telefone ou Celular"
                required
                :rules="rules.phoneRules"
                validate-on-blur
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="data.about"
                color="#494949"
                label="Assunto"
                required
                :rules="rules.aboutRules"
                validate-on-blur
              />
            </v-col>
          </div>
          <v-col cols="12">
            <v-textarea
              v-model="data.communication"
              label="Mensagem"
              color="#494949"
              :rules="rules.communicationRules"
              validate-on-blur
            />
          </v-col>
          <v-alert
            outlined
            type="success"
            text
            v-if="alert"
          >
            Sua mensagem foi enviada :)
          </v-alert>
          <v-col
            cols="12"
            align="center"
          >
            <v-btn
              :loading="loading"
              class="btnSend"
              text
              color="#494949"
              @click="sendMessage()"
            >
              ENVIAR
            </v-btn>
          </v-col>
        </v-form>
    </v-row>
  </div>
</template>

<script>
import { mask, masked } from 'vue-the-mask'
export default {
  directives: {
    mask,
    masked,
  },
  data() {
    return {
      alert:false,
      loading: false,
      data:{
        name:"",
        email:"",
        phone:"",
        about:"",
        communication: "",
      },
      rules: {
        phoneRules: [
          (v) => !!v || 'Por favor preencha o telefone.',
          (v) => {
            v += ''
            return v.length > 8 || 'O telefone deve ter mais de 9 números'
          },
        ],
        nameRules: [(v) => !!v || 'Por favor preencha o Nome'],
        emailRules: [
           (v) => !!v || 'Por favor preencha o E-mail',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido'
        
        ],
        communicationRules: [(v) => !!v || 'Por favor preencha a Menssagem'],
        aboutRules: [(v) => !!v || "Por favor digite o assuunto "],
      },
    }
  },
  methods: {
    sendMessage() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.data.phone = this.removeMask(this.data.phone);
        this.$store
        .dispatch("sendEmail/sendMessage", this.data)
        .then(() => {
         this.clear();
          this.alert = true;
          setTimeout(() => {
            this.alert = false;
          }, 4000);
          this.loading = false;
        });
      }
    },
    removeMask(value) {
      return value.replace(/\D/g, '')
    },
    clear() {
      this.data = {
        name:null,
        email:null,
        phone:null,
        about:null,
        communication:null,
      };
    },
  },
};
</script>

<style scoped>
.contact__form{
  width: 100%;
  height: 50rem;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
span{
  color: #ffffff;
  letter-spacing: 2px; 
  font-size: 20px;
}
p{
  letter-spacing: 2px; 
  font-size: 20px;
}
.btnSend{
  letter-spacing: 2px; 
  font-size: 15px;
  font-weight: bold;
}
@media screen and (max-width: 600px){
  span{
    letter-spacing: 0px; 
    font-size: 15px;
  }
}
</style>
