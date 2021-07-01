<template>
  <section class="section-contact">
    <div class="container">
      <prismic-rich-text :field="contactData.data.introduction_text" />
      <form
        class="contact-form"
        name="Contact Form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="question"
        action="/contact-succes"
        @submit="checkForm"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <!-- Here an error is displayed if something goes wrong -->
        <div v-if="errors.length" class="form-error">
          Helaas, er is iets fout gegaan.
          <ul>
            <li v-for="error in errors" :key="error.id">{{ error }}</li>
          </ul>
        </div>
        <div class="form-group">
          <label for="fullname">Naam (verplicht)</label>
          <input
            id="fullname"
            v-model="fullname"
            name="fullname"
            type="text"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">E-mail (verplicht)</label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="jobtitle">Functie</label>
          <input id="jobtitle" v-model="jobtitle" name="jobtitle" type="text" />
        </div>
        <div class="form-group">
          <label for="phone">Telefoonnummer</label>
          <input id="phone" v-model="phone" name="phone" type="text" />
        </div>
        <input name="question" class="hidden" />
        <div class="form-group">
          <button type="submit" class="button">Verzenden</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contactData: {},
      success: false,
      errors: [],
      fullname: '',
      email: '',
      phone: '',
      jobtitle: '',
    }
  },
  async fetch() {
    this.contactData = await this.$prismic.api.getSingle('contact_form_section')
  },
  methods: {
    checkForm(e) {
      if (this.fullname && this.email) {
        this.succes = true
        return true
      }
      this.errors = []

      if (!this.fullname) {
        this.errors.push('Naam is een verplicht veld.')
      }
      if (!this.email) {
        this.errors.push('E-mail is een verplicht veld.')
      }

      e.preventDefault()
    },
  },
}
</script>
