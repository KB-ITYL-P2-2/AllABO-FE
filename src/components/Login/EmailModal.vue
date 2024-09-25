<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">X</button>
       
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, toRefs } from "vue";
  
  export default defineComponent({
    name: "CalendarModal",
    props: {
      events: {
        type: Array,
        required: true,
      },
    },
    setup(props, { emit }) {
      const { events } = toRefs(props);
  
      const closeModal = () => {
        emit("close");
      };
  
      return {
        events,
        closeModal,
      };
    },
  });
  </script>
  