<template>
    <div :style="{ width: '100%', maxWidth: '1192px', margin: '0  auto', display: 'flex', flexDirection: 'column', gap: '16px' }">
        <a-row type="flex" justify="space-between" :gutter="[16,16]">
            <a-col :xs="24">
                <a-row :style="{ backgroundColor: '#fff', borderRadius: '6px', overflow: 'hidden', border: '1px solid #e8e8e8', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }">
                    <a-col :xl="6" :style="{ background: '#FFF', height: '100%', padding: '24px' }">
                        <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px'}">
                            <span class="emphasis">{{currentTime}}</span>
                            <span>{{currentDate}}</span>
                        </div>
                        <a-button block>Time In</a-button>
                    </a-col>
                    <a-col :xl="18" :style="{ background: '#F8F9FA', height: '100%', padding: '24px' }">
                        <a-row type="flex" :gutter="[16,16]">
                            <a-col :xs="24" :md="12" :lg="6">
                                <a-card>
                                    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }">
                                        <span class="emphasis">0</span>
                                        <span>Total Duration</span>
                                    </div>
                                </a-card>
                            </a-col>
                            <a-col :xs="24" :md="12" :lg="6">
                                <a-card>
                                    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }">
                                        <span class="emphasis">0</span>
                                        <span>Total Overtime</span>
                                    </div>
                                </a-card>
                            </a-col>
                            <a-col :xs="24" :md="12" :lg="6">
                                <a-card>
                                    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }">
                                        <span class="emphasis">0</span>
                                        <span>Total Tardiness</span>
                                    </div>
                                </a-card>
                            </a-col>
                            <a-col :xs="24" :md="12" :lg="6">
                                <a-card>
                                    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }">
                                        <span class="emphasis">0</span>
                                        <span>Total Undertime</span>
                                    </div>
                                </a-card>
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-card title="Daily Time Record">
            <span slot="extra">
                <a-row type="flex" :gutter="[8,8]">
                    <a-col>
                        <a-select
                            show-search
                            placeholder="Select Month"
                            option-filter-prop="month"
                            style="width: 200px"
                            :filter-option="filterOption"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @change="handleChange"
                        >
                            <a-select-option value="january">
                            January
                            </a-select-option>
                            <a-select-option value="february">
                            February
                            </a-select-option>
                            <a-select-option value="march">
                            March
                            </a-select-option>
                        </a-select>
                    </a-col>
                    <a-col>
                        <a-select
                            show-search
                            placeholder="Select Year"
                            option-filter-prop="year"
                            style="width: 200px"
                            :filter-option="filterOption"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @change="handleChange"
                        >
                            <a-select-option value="2023">
                            2023
                            </a-select-option>
                            <a-select-option value="2022">
                            2022
                            </a-select-option>
                            <a-select-option value="2021">
                            2021
                            </a-select-option>
                        </a-select>
                    </a-col>
                    <a-col>
                        <a-dropdown placement="bottomRight">
                            <a-menu slot="overlay" @click="handleMenuClick">
                                <a-menu-item key="1"> <a-icon type="file" />All </a-menu-item>
                                <a-menu-item key="2"> <a-icon type="file" />DTR </a-menu-item>
                                <a-menu-item key="3"> <a-icon type="file" />Accomplishment Report </a-menu-item>
                                <a-menu-item key="3"> <a-icon type="file" />Official Time </a-menu-item>
                            </a-menu>
                            <a-button :style="{ lineHeight: '2.21em' }"> Download <a-icon type="down" /> </a-button>
                        </a-dropdown>
                    </a-col>
                </a-row>
            </span>
            <a-row>
                <a-col :xl="24">
                    <a-table :columns="columns" :data-source="data" bordered>
                        <template slot="name" slot-scope="text">
                            <a>{{ text }}</a>
                        </template>
                    </a-table>
                </a-col>
                <!-- <a-col :xl="12">
                    <a-table :columns="columns" :data-source="data" bordered>
                        <template slot="name" slot-scope="text">
                            <a>{{ text }}</a>
                        </template>
                    </a-table>
                </a-col> -->
            </a-row>
        </a-card>
    </div>
</template>

<script>
const columns = [
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'name',
  },
  {
    title: 'Time In',
    dataIndex: 'timeIn',
    key: 'time in',
  },
  {
    title: 'Time Out',
    dataIndex: 'timeOut',
    key: 'time out',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

// const data = [
//   {
//     key: '1',
//     day: 'John Brown',
//     timeIn: '',
//     timeOut: '',
//     duration: '',
//     action: '',
//   },
//   {
//     key: '2',
//     day: 'John Brown',
//     timeOut: '',
//     duration: '',
//     timeIn: '',
//     action: '',
//   },
//   {
//     key: '3',
//     day: 'Joe Black',
//     timeIn: '',
//     timeOut: '',
//     duration: '',
//     action: '',
//   },
//   {
//     key: '4',
//     day: 'Jim Red',
//     timeIn: '',
//     timeOut: '',
//     duration: '',
//     action: '',
//   },
//   {
//     key: '5',
//     day: 'Jake White',
//     timeIn: '',
//     timeOut: '',
//     duration: '',
//     action: '',
//   },
// ];
export default {
  data() {
    return {
      interval: null,
      currentTime: null,
      currentDate: null,
      columns,
    //   data
    }
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.currentTime = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
      // In my case this returns "Wednesday, May 31, 2023"
      this.currentDate = Intl.DateTimeFormat(navigator.language, {
        dateStyle: 'full'
      }).format()
    }, 1000)
  },
  handleChange(value) {
        console.log(`selected ${value}`);
    },
    handleBlur() {
        console.log('blur');
    },
    handleFocus() {
        console.log('focus');
    },
    filterOption(input, option) {
        return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
    },
}
</script>

<style>
.ant-card-head-wrapper {
    flex-wrap: wrap;
}
.ant-table-pagination.ant-pagination {
    margin-bottom: 0;
}
</style>