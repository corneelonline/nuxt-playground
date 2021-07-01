<template>
  <div>
    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form
        id="mc-embedded-subscribe-form"
        action="https://deatleetfabriek.us10.list-manage.com/subscribe/post?u=cc99200fc555367a2abdd78fd&amp;id=55e98cb1a9"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address </label>
            <input
              id="mce-EMAIL"
              class="required email"
              name="EMAIL"
              type="email"
              value=""
            />
          </div>
          <div id="mce-responses" class="clear">
            <div
              id="mce-error-response"
              class="response"
              style="display: none"
            ></div>
            <div
              id="mce-success-response"
              class="response"
              style="display: none"
            ></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_cc99200fc555367a2abdd78fd_55e98cb1a9"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <input
              id="mc-embedded-subscribe"
              class="button"
              name="subscribe"
              type="submit"
              value="Ja, geef me updates"
            />
          </div>
        </div>
      </form>
    </div>

    <!--End mc_embed_signup-->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
label {
  display: block;
  margin-bottom: var(--gutter-xxs);
  color: var(--color-text-title);
  font-weight: var(--fw-bold);
}
input[type='email'] {
  width: 100%;
  background-color: var(--color-bg-input);
  color: var(--color-text-input);
  border: 1px solid var(--color-bg-input);
  padding: var(--gutter-xxs) var(--gutter-xs);
  margin-bottom: var(--gutter-xs);
}
input[type='submit'],
input[type='submit']:hover {
  width: 100%;
}
</style>
