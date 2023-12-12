<template>
  <BasicFormWrapper>
    <AddEventWrap>
      <a-form ref="formRef" :style="{ width: '100%' }" :model="formState" name="addNewEvent" @finish="handleSubmit">
        <a-form-item v-bind="formItemLayout" label="Title" name="title">
          <a-input v-model:value="formState.title" placeholder="Write Your Event Title" />
        </a-form-item>

        <a-form-item v-bind="formItemLayout" name="type" label="Event Type">
          <a-radio-group v-model:value="formState.type">
            <a-radio value="event">Event</a-radio>
            <a-radio value="reminder">Reminder</a-radio>
            <a-radio value="task">Task</a-radio>
          </a-radio-group>
        </a-form-item>
        <div class="ant-form-item">
          <a-row>
            <a-col :sm="4" :xs="24">
              <span class="label">Start:</span>
            </a-col>
            <a-col :sm="20" :xs="24">
              <div class="date-time-picker d-flex">
                <a-date-picker v-model:value="startDate" />
                <a-time-picker v-model:value="startTime" />
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="ant-form-item">
          <a-row>
            <a-col :sm="4" :xs="24">
              <span class="label">End:</span>
            </a-col>
            <a-col :sm="20" :xs="24">
              <div class="date-time-picker d-flex">
                <a-date-picker v-model:value="endDate" />
                <a-time-picker v-model:value="endTime" />
              </div>
            </a-col>
          </a-row>
        </div>

        <a-form-item v-bind="formItemLayout" class="event-desc" name="description" label="Description">
          <a-textarea v-model:value="formState.description" placeholder="Write Your Description" />
        </a-form-item>

        <a-form-item v-bind="formItemLayout" name="label" label="Label">
          <a-select v-model:value="formState.label" :style="{ width: '100%' }">
            <a-select-option value="primary">
              <span>
                <span class="bullet primary"></span>
                Primary
              </span>
            </a-select-option>
            <a-select-option value="secondary">
              <span>
                <span class="bullet secondary" />
                Secondary
              </span>
            </a-select-option>
            <a-select-option value="success">
              <span>
                <span class="bullet success" />
                success
              </span>
            </a-select-option>
            <a-select-option value="warning">
              <span>
                <span class="bullet warning" />
                Warning
              </span>
            </a-select-option>
            <a-select-option value="info">
              <span>
                <span class="bullet info" />
                Info
              </span>
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item>
          <div class="add-event-footer text-right">
            <sdButton class="ant-btn ant-btn-white" @click="resetForm"> Reset </sdButton>
            <sdButton htmlType="submit" class="btn-save" type="primary"> Save </sdButton>
          </div>
        </a-form-item>
      </a-form>
    </AddEventWrap>
  </BasicFormWrapper>
</template>
<script>
import dayjs from 'dayjs';
import PropTypes from 'vue-types';
import { AddEventWrap } from './Style';
import { BasicFormWrapper } from '../../styled';
import { toRefs, ref, reactive } from 'vue';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const dateFormat = 'DD/MM/YYYY';

const formRef = ref();

const UpdateEvent = {
  name: 'UpdateEvent',
  components: { AddEventWrap, BasicFormWrapper },
  props: {
    data: PropTypes.object,
    onCancel: PropTypes.func,
    onHandleUpdateEvent: PropTypes.func,
  },
  setup(props) {
    const { data, onCancel, onHandleUpdateEvent } = toRefs(props);
    const { title, id, description, label, time, date, type } = data.value;

    const formState = reactive({
      title: title.value,
      description: description.value,
      type: type.value,
      label: label.value,
    });
    const startDate = ref(dayjs(date.value[0], dateFormat));
    const endDate = ref(dayjs(date.value[1], dateFormat));
    const startTime = ref(dayjs(time.value[0], 'h:mm a'));
    const endTime = ref(dayjs(time.value[1], 'h:mm a'));

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

    const handleSubmit = (values) => {
      onHandleUpdateEvent.value({
        title: values.title,
        id: id.value,
        description: values.description,
        date: [dayjs(startDate.value).format('DD/MM/YYYY'), dayjs(endDate.value).format('DD/MM/YYYY')],
        time: [startTime.value.format('h:mm a'), endTime.value.format('h:mm a')],
        type: values.type,
        label: values.label,
      });
      onCancel.value();
    };
    const onChangeStart = (_, dateString) => {
      startDate.value = dateString;
    };
    const onChangeEnd = (_, dateString) => {
      endDate.value = dateString;
    };

    const onChangeStartTime = (times) => {
      startTime.value = times;
    };
    const onChangeEndTime = (times) => {
      endTime.value = times;
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    return {
      formState,
      data,
      title,
      id,
      description,
      label,
      time,
      date,
      type,
      onChangeEnd,
      onChangeEndTime,
      onChangeStart,
      handleSubmit,
      onChangeStartTime,
      formItemLayout,
      dateFormat,
      startDate,
      endDate,
      startTime,
      endTime,
      formRef,
      resetForm,
    };
  },
};

export default UpdateEvent;
</script>
