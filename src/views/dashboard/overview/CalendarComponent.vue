<template>
  <sdCards headless>
    <sdModal
      class="addEvent-modal"
      :footer="null"
      type="primary"
      title="Create Event"
      :visible="isVisible"
      :onCancel="handleCancel"
    >
      <AddNewEvent :onHandleAddEvent="addNew" :defaultValue="defaultValue" />
    </sdModal>
    <CalendarWrapper>
      <div class="calendar-header">
        <div class="calendar-header__left">
          <div class="calender-head__navigation">
            <sdButton @click="decrementYear" class="btn-navigate" type="light" outlined
              ><unicon name="angle-left"></unicon
            ></sdButton>
            <span class="date-label">
              <sdDropdown :action="['click']">
                <template #overlay>
                  <sdCards>
                    <a-row>
                      <a-col v-for="(item, index) in weeks" :sm="8" :key="index">
                        <span @click="() => setWeek(index)" style="display: block; text-align: center; cursor: pointer"
                          >{{ `${dayjs(item.start).format('DD-MM-YYYY')} - ${dayjs(item.end).format('DD-MM-YYYY')}` }}
                        </span>
                      </a-col>
                    </a-row>
                  </sdCards>
                </template>
                <sdButton> {{ currentLabel }} </sdButton>
              </sdDropdown>
            </span>
            <sdButton @click="incrementYear" class="btn-navigate" type="light" outlined
              ><unicon name="angle-right"></unicon
            ></sdButton>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table-event" width="100%">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>
                <p>{{ dayjs(weeks[week].start).format('dddd') }}</p>
              </th>
              <th v-for="item in weeks[week].end.diff(weeks[week].start, 'day')" :key="item">
                <p>{{ dayjs(weeks[week].start.add(item, 'day')).format('dddd') }}</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(time, key) in eventTimes" :key="key + 1">
              <td :style="{ width: '60px' }">{{ time }}</td>
              <td
                :class="`ant-picker-calendar-date-content ${dayjs(weeks[week].start).format('DD/MM/YYYY')}-${dayjs(
                  time,
                  'h A',
                ).format('h:mm:a')}`"
              >
                <span v-if="dayjs().format('h A') === time" class="currentTime secondary" />

                <template v-for="event in events" :key="event.id">
                  <sdDropdown
                    v-if="
                      dayjs(weeks[week].start).format('DD/MM/YYYY') === event.date[0] &&
                      time === dayjs(event.time[0], 'h:mm a').format('h A')
                    "
                    class="event-dropdown"
                    style="padding: 0px"
                    placement="bottomLeft"
                    :action="['click']"
                  >
                    <template #overlay>
                      <ProjectUpdate
                        :onEventDelete="onEventDelete"
                        v-bind="{ onHandleUpdateEvent: updateEvent, ...event }"
                      />
                    </template>
                    <div :class="`${event.label} day-event-item`" style="cursor: pointer">
                      <span class="event-title">{{ event.title }}</span>
                      <span>{{ `${event.time[0]} - ${event.time[1]}` }}</span>
                    </div>
                    DD-MM-YYY
                  </sdDropdown>
                </template>
              </td>
              <td
                :class="`ant-picker-calendar-date-content ${dayjs(weeks[week].start.add(item, 'day')).format(
                  'DD/MM/YYYY',
                )}-${dayjs(time, 'h A').format('h:mm:a')}`"
                v-for="item in weeks[week].end.diff(weeks[week].start, 'day')"
                :key="item"
              >
                <span v-if="dayjs().format('h A') === time" class="currentTime secondary" />

                <template v-for="event in events" :key="event.id">
                  <sdDropdown
                    v-if="
                      dayjs(weeks[week].start.add(item, 'day')).format('DD/MM/YYYY') === event.date[0] &&
                      time === dayjs(event.time[0], 'h:mm a').format('h A')
                    "
                    class="event-dropdown"
                    style="padding: 0px"
                    placement="bottomLeft"
                    :action="['click']"
                  >
                    <template #overlay>
                      <ProjectUpdate
                        :title="event.title"
                        :id="event.id"
                        :description="event.description"
                        :label="event.label"
                        :type="event.type"
                        :onEventDelete="onEventDelete"
                        :time="event.time"
                        :date="event.date"
                        :onHandleUpdateEvent="updateEvent"
                      />
                    </template>
                    <div :class="`${event.label} day-event-item`" style="cursor: pointer">
                      <span class="event-title">{{ event.title }}</span>
                      <span>{{ `${event.time[0]} - ${event.time[1]}` }}</span>
                    </div>
                    DD-MM-YYY
                  </sdDropdown>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </CalendarWrapper>
  </sdCards>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { ref, onMounted } from 'vue';
import AddNewEvent from './AddNewEvent.vue';
import ProjectUpdate from './ProjectUpdate.vue';
import './style.css';
import eventDatas from './events';
import { CalendarWrapper } from './Style';

const eventTimes = [
  '12 AM',
  '1 AM',
  '2 AM',
  '3 AM',
  '4 AM',
  '5 AM',
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  '8 PM',
  '9 PM',
  '10 PM',
  '11 PM',
];

const weeks = ref<any[]>([]);

const isVisible = ref(false);
const defaultValue = ref(dayjs().format('DD/MM/YYYY h:mm a'));
const year = ref(new Date().getFullYear());
const month = ref(parseInt(dayjs().format('M')));
const week = ref(2);
const currentLabel = ref('');

const loadWeek = () => {
  const startDate = dayjs(`${year.value}-${month.value}-01`);
  const endDate = startDate.endOf('month');
  var start = startDate.add(0, 'day');
  var end = startDate.add(0, 'day');
  for (let index = 0; startDate.add(index, 'day').isBefore(endDate); index++) {
    end = startDate.add(index, 'day');
    if (end.day() === 0) {
      weeks.value.push({ start: start, end: end });
      start = end.add(1, 'day');
    }
  }
};

const updateCurrentLabel = () => {
  currentLabel.value = `${dayjs(weeks.value[week.value].start).format('DD-MM-YYYY')} - ${dayjs(
    weeks.value[week.value].end,
  ).format('DD-MM-YYYY')}`;
};
loadWeek();
updateCurrentLabel();

const incrementYear = () => {
  month.value = month.value + 1;
  if (month.value > 12) {
    month.value = 1;
    year.value = year.value + 1;
  }
  updateCurrentLabel();
};

const decrementYear = () => {
  month.value = month.value - 1;
  if (month.value < 1) {
    month.value = 12;
    year.value = year.value - 1;
  }
  updateCurrentLabel();
};

const setWeek = (m: any) => {
  week.value = m;
  updateCurrentLabel();
};

const handleCancel = () => {
  isVisible.value = !isVisible.value;
};

const addNew = (event: any) => {
  events.value.push({
    title: event.title,
    id: Math.max(...events.value.map((c) => c.id)) + 1,
    date: event.date,
    label: event.label,
    time: event.time,
    type: event.type,
    description: event.description,
  });
  console.log(events.value);

  isVisible.value = !isVisible.value;
};

const updateEvent = (event: any) => {
  const eventIndex = events.value.findIndex((e) => e.id === event.id);
  events.value[eventIndex] = {
    title: event.title,
    id: event.id,
    date: event.date,
    label: event.label,
    time: event.time,
    type: event.type,
    description: event.description,
  };
};

const onEventDelete = (id: any) => {
  events.value = events.value.filter((c) => c.id !== id);
};

const events = ref(eventDatas);
const container = ref<any>(null);

onMounted(() => {
  const button = document.querySelector(
    '.calendar-header__left .react-calendar__navigation .react-calendar__navigation__label',
  );
  const containers = document.querySelector('.calendar-header__left .react-calendar__viewContainer');
  const calenderDom = document.querySelectorAll('.ant-picker-calendar-date-content');
  calenderDom.forEach((element) => {
    element.addEventListener('click', (e) => {
      if ((e.target as HTMLElement)?.classList?.[0] === 'ant-picker-calendar-date-content') {
        container.value = containers;
        defaultValue.value = dayjs((e.target as HTMLElement)?.classList?.[1], 'DD/MM/YYYY-h:mm:a').format(
          'DD/MM/YYYY h:mm a',
        );
        isVisible.value = !isVisible.value;
      }
    });
  });
  button && button.addEventListener('click', () => containers?.classList.add('show'));
  container.value = containers;
});
</script>
