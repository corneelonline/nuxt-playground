<template>
  <div>
    <FormulateForm
      v-model="formValues"
      class="contact-form"
      name="corneelia-contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="question"
      action="/bedankt"
    >
      <FormulateInput
        name="fullname"
        :label="$t('contactform.fullname')"
        validation="required"
      />
      <FormulateInput
        type="email"
        name="email"
        :label="$t('contactform.email')"
        validation="required|email"
      />
      <FormulateInput
        type="textarea"
        name="message"
        :label="$t('contactform.message')"
        validation="required"
      />
      <FormulateInput name="question" label="Vraag" class="hidden" />
      <FormulateInput type="submit" :label="$t('contactform.submit')" />
    </FormulateForm>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
export default {
  data() {
    return {
      formValues: {},
    }
  },
}
/* eslint-enable no-alert, no-console */
</script>

<style lang="scss">
.contact-form {
  .formulate-input {
    padding-bottom: var(--gutter-sm);
  }
  label {
    display: block;
    font-family: var(--ff-header);
    margin-bottom: var(--gutter-xs);
  }
  [data-type='text'] > input,
  [data-type='email'] > input,
  textarea {
    width: 100%;
    background-color: var(--color-background-input);
    color: var(--color-text-input);
    border: 1px solid var(--color-background-input);
    padding: var(--gutter-xxs) var(--gutter-xs);
  }
  textarea {
    height: 200px;
  }
  button[type='submit'] {
    @include button;
  }
  button[type='submit']:hover {
    @include button-hover;
  }
  .formulate-input-errors {
    color: var(--color-text-error);

    li {
      margin-bottom: 0;
    }
  }
  [data-is-showing-errors='true'] {
    input[type='text'],
    input[type='email'],
    textarea {
      border: 1px solid var(--color-border-error);
    }
    label {
      color: var(--color-text-error);
    }
  }
}
</style>
