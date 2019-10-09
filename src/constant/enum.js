// 后台枚举类

const enumMap = {
    // 工单状态
    OrderStatusEnum: {
        INITIALIZE: {
            des: '初建',
            color: '#909399'
        },
        ASSIGNED: {
            des: '已派单',
            color: '#8cddcd'
        },
        INPRODUCTION: {
            des: '生产中',
            color: '#409EFF'
        },
        FINISHED: {
            des: '已完成',
            color: '#67C23A'
        }
    },
    // 设备运行状态
    EquipmentStatusEnum: {
        IN_SERVICE: {
            des: '运行',
            color: '#67C23A'
        },
        OUT_OF_SERVICE: {
            des: '待机',
            color: '#409EFF'
        },
        ALARM: {
            des: '报警',
            color: '#F56C6C'
        },
        END_SERVICE: {
            des: '关机',
            color: '#909399'
        },
        IN_MAINTENANCE: {
            des: '维修',
            color: '#01c0c8'
        }
    },
    // 操作类型
    OperationType: {
        STARTING_UP: {
            des: '开机',
            color: '#409EFF'
        },
        MACHINE_HALT: {
            des: '停机',
            color: '#F56C6C'
        },
        DEBUG_MACHINE: {
            des: '调机',
            color: '#01c0c8'
        },
        MACHINE_ALARM: {
            des: '报警',
            color: '#E6A23C'
        },
        POWER_OFF: {
            des: '关机',
            color: '#909399'
        }
    }
}

export const enumList = key => {
    const map = []
    for (const [k, v] of Object.entries(enumMap[key])) {
        map.push({
            label: v.des,
            value: k
        })
    }
    return map
}

export default enumMap
