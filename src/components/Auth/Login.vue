<template> 
	<v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field prepend-icon="mdi-account-circle" name="email" label="Email" type="email" v-model="email" :rules="emailRules"></v-text-field>
                  <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password" type="password" :counter="12" v-model="password" :rules="passwordRules"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="OnSubmit" :disabled="!valid">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>
<script>
export default {
	data () { 
		return {
			email:'',
			password:'',
			valid:false,
			emailRules: [v => !!v || 'E-mail is required',v => /.+@.+/.test(v) || 'E-mail must be valid'],
			passwordRules: [v => !!v || 'Password is required',v => (v && v.length >= 8) || 'Password must be more or equel than 8 characters',v => (v && v.length <= 12) || 'Password must be less than 12 characters']
		} 	
	},
	methods: {
		OnSubmit(){
			if (this.$refs.form.validate()){
				const user = {
					email: this.email,
					password: this.password
				}
			console.log(user)
			}
		}
	},
} 
</script>