<template>
    <div :style="{ width: '100%', maxWidth: '1192px', margin: '0  auto', display: 'flex', flexDirection: 'column', gap: '16px' }">
        <a-row type="flex" justify="space-between" :gutter="[16,16]">
            <a-col :xs="24">
                <a-row :style="{ backgroundColor: '#fff', borderRadius: '6px', overflow: 'hidden', border: '1px solid #e8e8e8', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }">
                    <a-col :xl="6" :style="{ background: '#FFF', height: '100%', padding: '24px' }">
                        <div :style="{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px'}">
                            <span class="emphasis">0</span>
                            <span>Leave Request</span>
                        </div>
                        <a-space>
                            <a-button block>Time In</a-button>
                            <a-button block>Time In</a-button>
                        </a-space>
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
    </div>
</template>

<style>
    .ant-space, .ant-space-item {
        width: 100%;
    }
</style>