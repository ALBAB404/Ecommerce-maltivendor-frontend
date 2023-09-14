import { defineStore } from 'pinia'

export const useCounter = defineStore('count', {
    state: () => ({ count: 0 }),
})