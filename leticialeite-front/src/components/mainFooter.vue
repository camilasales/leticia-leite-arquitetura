<template>
    <div class="footer">
        <footer>
            <v-row class="my-16" align="center" justify="center" no-gutters>
                <v-col cols="12" md="3" sm="12" class="footer_items mb-10">
                    <div class="footer__icons">
                        <img src="../assets/icons/localizacao.png" alt="">
                    </div>
                    <span class="custom__text__small__bold">ENDEREÇO</span>
                    <span class="custom__text__small">
                        Rua Guaíra, 1358 <br> Jardim Pancera
                    </span>
                </v-col>
                <v-col cols="12" md="3" sm="12" class="footer_items mb-10">
                    <div class="footer__icons">
                        <img src="../assets/icons/email.png" alt="">
                    </div>
                    <span class="custom__text__small__bold">E-MAIL</span>
                    <span class="custom__text__small">contato@leticialeitearquitetura.com.br</span>
                </v-col>
                <v-col cols="12" md="3" sm="12" class="footer_items mb-10">
                    <div class="footer__icons">
                        <img src="../assets/icons/telefone.png" alt="">
                    </div>
                    <span class="custom__text__small__bold">TELEFONE</span>
                    <span class="custom__text__small">(45) 99103-6651</span>
                </v-col>
            </v-row>
            <v-row no-gutters class="text-center mb-10">
                <v-col cols="12">
                    <img src="../assets/logo2.png" alt="" srcset="">
                </v-col>
                <v-col cols="12">
                    <a href="">
                        <img src="../assets/icons/instagram.png" alt="">
                    </a>
                    <a href="">
                        <img src="../assets/icons/pinterest.png" alt="">
                    </a>
                </v-col>
            </v-row>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import './src/design';
.footer{
    background-image: url('../assets/img/img-footer.jpg');
    padding: 40px 0 20px 0 !important;
    margin: 0;
    background-size: cover;
    background-repeat: no-repeat;
}
.footer_items{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.footer__icons{
    @extend .footer_items;
    background-color: $main-pastel-pink;
    padding: 18px;
    width: 80px;
    border-radius: 50px;
}
.footer__icons>img{
    height: 40px;
}
.custom__text__small__bold{
    margin: 15px 0 15px 0;
}
a>img{
    height: 30px;
    margin: 5px;
}
</style>