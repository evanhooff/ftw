// follow: https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/?_ga=2.157108411.1862373525.1572619658-1471333461.1571400018 
<template>
  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>Your Name: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Your Role: <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
</form>
</template>

<script>
export default {
  name: 'NetlifyForm'
}
</script>
