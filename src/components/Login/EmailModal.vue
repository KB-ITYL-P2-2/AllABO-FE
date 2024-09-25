<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">X</button>
        <h4>Money Tracker</h4>
        <ul>
          <li v-for="(event, index) in events" :key="index">
            <p>날짜 : {{ event.date }}</p>
            <p>금액 : {{ event.amount.toLocaleString() }}</p>
            <p>유형 : {{ event.type === "income" ? "수입" : "지출" }}</p>
            <p>분류 : {{ event.category }}</p>
            <p>유형 : {{event.asset}}</p>
            <p>내용 : {{event.content}}</p>
            <P></P>
          </li>
        </ul>
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
  