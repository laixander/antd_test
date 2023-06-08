<template>
    <a-layout id="layout">
      <a-layout-sider theme="light" v-model="collapsed" :trigger="null" collapsible>
        <Logo />
        <a-menu mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1">
            <NuxtLink to="/">
              <a-icon type="dashboard" />
              <span>Dashboard</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="2">
            <NuxtLink to="/timesheet">
              <a-icon type="hourglass" />
              <span>Timesheet</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="3">
            <NuxtLink to="/leaves">
                <a-icon type="carry-out" />
                <span>Leaves</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="4">
            <NuxtLink to="/overtime">
                <a-icon type="history" />
                <span>Overtime</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="5">
            <NuxtLink to="/overtime">
                <a-icon type="container" />
                <span>Payslip</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="6">
            <NuxtLink to="/overtime">
                <a-icon type="profile" />
                <span>Pass Slip</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="7">
            <NuxtLink to="/overtime">
                <a-icon type="credit-card" />
                <span>Service Credits</span>
            </NuxtLink>
          </a-menu-item>
          <a-menu-item key="8">
            <NuxtLink to="/overtime">
                <a-icon type="file-done" />
                <span>Service Requests</span>
            </NuxtLink>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
            <div :style="{ padding: '0 24px', display: 'flex', alignItems: 'center', gap: '16px' }">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="() => (collapsed = !collapsed)"
                />
                <Breadcrumb />
            </div>
            <Avatar />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', minHeight: '280px' }">
            <Nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
  </script>
  <style>
  #layout .trigger {
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  #layout .trigger:hover {
    color: #1890ff;
  }
  
  .ant-layout-sider {
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.05);
  }

  .ant-layout-header {
    background: transparent;
    padding: 0;
    border-bottom: 1px solid rgb(0 0 0 / 10%);
    display: flex;
    justify-content: space-between;
  }
  .ant-menu-inline {
    border-right: none;
  }
  </style>