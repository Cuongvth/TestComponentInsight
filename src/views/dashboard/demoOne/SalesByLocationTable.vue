<script lang="ts">
import { computed, onMounted, ref, defineComponent } from 'vue';
import { LocationTableWrap } from '../style';
import { useStore } from 'vuex';

const sellingColumns = [
  {
    title: 'Ngày',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Ca-Giờ',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];

const SalesByLocationTable = defineComponent({
  name: 'SalesByLocation',
  setup() {
    const { state, dispatch } = useStore();
    const topLocationState = computed(() => state.chartContent.locationData);
    const locations = ref('today');

    const handleActiveChangeLocation = (event: any, value: any) => {
      event.preventDefault();
      locations.value = value;
      dispatch('topLocationFilterData', value);
    };

    const sellingData = computed(() =>
      topLocationState.value
        ? topLocationState.value.map((value: any) => {
            const { key, location, order, revenue } = value;
            return {
              key,
              location,
              order,
              revenue,
            };
          })
        : [],
    );

    onMounted(() => dispatch('topLocationGetData'));

    return {
      topLocationState,
      handleActiveChangeLocation,
      sellingColumns,
      sellingData,
      locations,

      options: {
        width: 492,
        height: 180,
        zoom: true,
        hideAntarctic: true,
        landsColor: '#E3E6EF',
        landsBorder: '#E3E6EF',
      },
    };
  },
});

export default SalesByLocationTable;
</script>

<template>
  <div class="full-width-table">
    <sdCards more>
      <a-row>
        <a-col :lg="24" :xs="24">
          <LocationTableWrap>
            <div class="table-responsive">
              <a-table :columns="sellingColumns" :dataSource="sellingData" :pagination="false"> </a-table>
            </div>
          </LocationTableWrap>
        </a-col>
      </a-row>
    </sdCards>
  </div>
</template>
