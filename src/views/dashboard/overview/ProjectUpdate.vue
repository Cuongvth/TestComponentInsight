<template>
  <UpdatePopup>
    <sdModal
      class="addEvent-modal"
      :footer="null"
      type="primary"
      title="Update Event"
      :visible="visible"
      :onCancel="onCancel"
    >
      <UpdateEvent :onCancel="onCancel" :data="data" :onHandleUpdateEvent="onHandleUpdateEvent" />
    </sdModal>

    <sdCards headless>
      <div :class="`headerUpdate ${label}`">
        <h4>{{ title }}</h4>
        <div class="action">
          <a @click="onHandleVisible" to="#">
            <unicon name="edit-alt" width="14"></unicon>
          </a>
          <a @click="() => onEventDelete(id)" to="#">
            <unicon name="trash-alt" width="14"></unicon>
          </a>
          <a to="#">
            <unicon name="times" width="14"></unicon>
          </a>
        </div>
      </div>
      <div class="bodyUpdate">
        <p class="event-info">
          <unicon name="calendar-alt" width="16"></unicon>
          <span class="label">Start date:</span>
          <strong>{{ dayjs(`${date[0]} ${time[0]}`, 'DD/MM/YYYY h:mm a').format('dddd, MMMM DD h:mm a') }}</strong>
        </p>
        <p class="event-info">
          <unicon name="calendar-alt" width="16"></unicon>
          <span class="label">End date:</span>
          <strong>{{ dayjs(`${date[1]} ${time[1]}`, 'DD/MM/YYYY h:mm a').format('dddd, MMMM DD h:mm a') }}</strong>
        </p>
        <p class="event-info">
          <img :src="`/src/assets/img/icon/right.svg`" alt="menu" />
          <span class="desc">{{ description }}</span>
        </p>
      </div>
    </sdCards>
  </UpdatePopup>
</template>
<script>
import dayjs from 'dayjs';
import PropTypes from 'vue-types';
import UpdateEvent from './UpdateEvent.vue';
import { UpdatePopup } from './Style';
import { ref, toRefs, defineComponent } from 'vue';

const ProjectUpdate = defineComponent({
  name: 'ProjectUpdate',
  components: { UpdatePopup, UpdateEvent },
  props: {
    title: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    onEventDelete: PropTypes.func,
    time: PropTypes.array,
    date: PropTypes.array,
    onHandleUpdateEvent: PropTypes.func,
  },
  setup(props) {
    const data = toRefs(props);
    const visible = ref(false);
    const onHandleVisible = () => {
      visible.value = true;
    };
    const onCancel = () => (visible.value = false);

    return {
      data,
      onHandleVisible,
      onCancel,
      dayjs,
      visible,
    };
  },
});

export default ProjectUpdate;
</script>
