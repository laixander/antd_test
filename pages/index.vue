<template>
  <div :style="{ width: '100%', maxWidth: '1192px', margin: '0  auto', display: 'flex', flexDirection: 'column', gap: '16px' }">
    
    <a-row type="flex" justify="space-between" :gutter="[16,16]">
      <a-col :xs="24" :lg="12">
        <a-card :style="{ background: 'linear-gradient(252.25deg, #1815A8 10.54%, #0F66F4 92.03%)', color: '#fff' }">
          <p :style="{ marginBottom: '0' }">Welcome to your dashboard</p>
          <p class="emphasis" :style="{ marginBottom: '18px', lineHeight: '1' }">Lindsey Lubin</p>
          <p :style="{ marginBottom: '0', backgroundColor: 'rgba(255,255,255,0.15)', display: 'inline-block', padding: '4px 12px', borderRadius: '4px' }">Today is {{currentDate}} at {{currentTime}}</p>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="12">
        <a-card>
          <a-carousel autoplay>
            <div :style="{ textAlign: 'right' }">
              <h3 :style="{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0' }">Academic Scholarship</h3>
              <p :style="{ marginBottom: '0.6em' }">Apply for scholarship available for all employee</p>
              <a-button type="link" icon="select" :style="{ padding: '0' }">Apply for Scholarship</a-button>
            </div>
            <div :style="{ textAlign: 'right' }">
              <h3 :style="{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0' }">Academic Scholarship</h3>
              <p :style="{ marginBottom: '0.6em' }">Apply for scholarship available for all employee</p>
              <a-button type="link" icon="select" :style="{ padding: '0' }">Apply for Scholarship</a-button>
            </div>
            <div :style="{ textAlign: 'right' }">
              <h3 :style="{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0' }">Academic Scholarship</h3>
              <p :style="{ marginBottom: '0.6em' }">Apply for scholarship available for all employee</p>
              <a-button type="link" icon="select" :style="{ padding: '0' }">Apply for Scholarship</a-button>
            </div>
          </a-carousel>
        </a-card>
      </a-col>
    </a-row>

    <a-row type="flex" justify="space-between" :gutter="[16,16]" class="top-cards">
      <a-col :xs="24" :lg="12" :xl="6">
        <a-card title="Time">
          <template slot="extra">
            <a-icon type="hourglass" :style="{ fontSize: '22px' }" />
          </template>
          <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px'}">
            <span class="emphasis">{{currentTime}}</span>
            <span>{{currentDate}}</span>
          </div>
          <a-button block>Time In</a-button>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="12" :xl="6">
        <a-card title="Leaves">
          <template slot="extra">
            <a-icon type="carry-out" :style="{ fontSize: '22px' }" />
          </template>
          <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px'}">
            <span class="emphasis">0/10</span>
            <span>Leave credits remaining</span>
          </div>
          <a-button block>Request Leave</a-button>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="12" :xl="6">
        <a-card title="Overtime">
          <template slot="extra">
            <a-icon type="history" :style="{ fontSize: '22px' }" />
          </template>
          <div :style="{display: 'flex', justifyContent: 'space-evenly', marginBottom: '16px'}">
            <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center'}">
              <span class="emphasis">4h</span>
              <span>Approved</span>
            </div>
            <a-divider type="vertical" :style="{ height: 'auto' }" />
            <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center'}">
              <span class="emphasis">2h</span>
              <span>Pending</span>
            </div>
          </div>
          <a-button block>Request Overtime</a-button>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="12" :xl="6">
        <a-card title="Requests">
          <template slot="extra">
            <a-icon type="form" :style="{ fontSize: '22px' }" />
          </template>
          <div :style="{display: 'flex', justifyContent: 'space-evenly', marginBottom: '16px'}">
            <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center'}">
              <span class="emphasis">8</span>
              <span>Ongoing</span>
            </div>
            <a-divider type="vertical" :style="{ height: 'auto' }" />
            <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center'}">
              <span class="emphasis">16</span>
              <span>Completed</span>
            </div>
          </div>
          <a-button block>View All Requests</a-button>
        </a-card>
      </a-col>
    </a-row>

    <a-row type="flex" justify="space-between" :gutter="[16,16]">
      <a-col :xs="24" :xl="8">
        <a-card title="Attendance of Employees">
          <a-tabs default-active-key="1" @change="callback">
            <a-tab-pane key="1" tab="Time In">
              

                <a-list item-layout="horizontal" :data-source="employee">
                  <a-list-item slot="renderItem" slot-scope="item, index" :style="{alignItems: 'flex-start'}">
                    <a-list-item-meta :description="item.title">
                      <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-list-item-meta>
                    <div>{{ item.timestamp }}</div>
                  </a-list-item>
                </a-list>


            </a-tab-pane>
            <a-tab-pane key="2" tab="Time Out" force-render>
              <a-empty />
            </a-tab-pane>
            <a-tab-pane key="3" tab="On leave">
              <a-empty />
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="12" :xl="8">
        <a-card title="Notice Board">
          <a slot="extra" href="#">more</a>
          
          <a-list item-layout="horizontal" :data-source="notice">
            <a-list-item slot="renderItem" slot-scope="item, index" :style="{alignItems: 'flex-start'}">
              <div :style="{ marginRight: '16px' }"><a-icon type="notification" :style="{ fontSize: '24px' }" /></div>
              <a-list-item-meta :description="'Posted' + ' ' + item.timestamp">
                <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                <a slot="extra" href="#">more</a>
              </a-list-item-meta>
            </a-list-item>
          </a-list>

        </a-card>
      </a-col>
      <a-col :xs="24" :lg="12" :xl="8">
        <a-card title="Recent Activities">
          <a slot="extra" href="#">more</a>
          
          <a-timeline>
            <a-timeline-item>
              <h4>Create a services site</h4> 
              2015-09-01
            </a-timeline-item>
            <a-timeline-item>
              <h4>Solve initial network problems</h4> 
              2015-09-01
            </a-timeline-item>
            <a-timeline-item>
              <h4>Technical testing</h4> 
              2015-09-01
            </a-timeline-item>
            <a-timeline-item>
              <h4>Network problems being solved</h4> 
              2015-09-01
            </a-timeline-item>
            <a-timeline-item>
              <h4>Solve initial network problems</h4> 
              2015-09-01
            </a-timeline-item>
          </a-timeline>

        </a-card>
      </a-col>
    </a-row>

  </div>
</template>

<script>
const employee = [
  {
    name: 'Jocelyn Dokidis',
    title: 'Employee',
    timestamp: '07:30 AM'
  },
  {
    name: 'Jordyn Kenter',
    title: 'Employee',
    timestamp: '07:45 AM'
  },
  {
    name: 'Ryan Kenter',
    title: 'Accounting',
    timestamp: '08:00 AM'
  },
  {
    name: 'Wilson Gouse',
    title: 'Administrator',
    timestamp: '08:10 AM'
  },
];

const notice = [
  {
    title: 'Announcement: General Meeting',
    timestamp: '1h ago'
  },
  {
    title: 'We Completed a Project',
    timestamp: 'March 10, 2023, 08:30 AM'
  },
  {
    title: 'Attention: General Meeting',
    timestamp: 'January 24, 2023, 11:30 AM'
  },
  {
    title: 'Greetings: Merry Christmas',
    timestamp: 'December 25, 2022, 01:45 PM'
  },
  {
    title: 'Attention: General Meeting',
    timestamp: 'October 11, 2022, 03:25 PM'
  },
];

export default {
  data() {
    return {
      interval: null,
      currentTime: null,
      currentDate: null,
      employee,
      notice
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
  methods: {
    callback(key) {
      console.log(key);
    },
  }
}
</script>

<style>
  .ant-card {
    min-height: 100%;
    border-radius: 6px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  }
  .top-cards .ant-card {
    border-top: 6px solid #1890ff;
  }
  .top-cards .ant-card-head-wrapper {
    flex-direction: row-reverse;
    gap: 8px;
  }
  .emphasis {
    font-size: 2rem;
    font-weight: 600;
  }
  .ant-carousel .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 100px;
  }
  .ant-carousel .slick-dots li button,
  .ant-carousel .slick-dots li.slick-active button {
    background: #1890ff;
  }
  .ant-carousel .slick-dots-bottom {
    bottom: -12px;
  }
</style>
