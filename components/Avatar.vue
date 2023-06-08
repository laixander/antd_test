<template>
    <div :style="{ padding: '0 24px', display: 'flex', alignItems: 'center', gap: '24px' }">
        <a-badge dot :offset="['-2','4']">
            <a-icon type="bell" :style="{ fontSize: '18px', color: '#08c' }" />
        </a-badge>
        <a-icon type="appstore" :style="{ fontSize: '18px', color: '#08c' }" />
        <a-popover v-model="visible" trigger="click" placement="bottomRight">
            <template slot="content">
                <a-button type="link" icon="user">
                    Manage Account
                </a-button>
                <a-button type="link" icon="lock">
                    Logout
                </a-button>
            </template>
            <a-tooltip mouse-enter-delay="1.5" placement="bottomRight">
                <template slot="title">
                    John Doe<br>
                    Administrator
                </template>
                <a-avatar icon="user" :size="40" />
            </a-tooltip>
        </a-popover>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    hide() {
      console.log(111);
      this.visible = false;
    },
  },
};
</script>

<style>
    .ant-popover-inner-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>