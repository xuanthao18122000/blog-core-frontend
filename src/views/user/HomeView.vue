<template>
  <DashboardLayout>
    <main class="home-wrapper container py-5">
      This is body
    </main>
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '@/layouts/LayoutUser.vue';
import PaginationView from '@/components/PaginationView.vue';
import { ref, reactive, onMounted } from 'vue';
import { listTransaction } from '@/api/transaction';
import { useToast } from 'vue-toastification';
import getErrorMsg from '@/helpers/errorMsg';
import { dateConvert, getColorStatus, getColorMethod } from '@/helpers/common';
import copy from '@/plugins/vue-clipboard3'

// declare
const toast = useToast()
const transactions = ref([] as any[])
const filter = reactive({
  page: 1,
  limit: 10,
  address: null,
  currency: null,
  user_id: null,
  third_party_id: null,
  agent_id: null,
  network: null
})
const total = ref(0)
const totalPages = ref(0)
const loading = ref(false)
const currentUserDetail = ref({})

// Get list transaction
async function getListTransaction() {
  loading.value = true
  transactions.value = []
  const data = await listTransaction(filter)
  loading.value = false
  if(!data.status || data.status === 200) {
    transactions.value = data.data
    total.value = data.total
    totalPages.value = Math.ceil(data.total / filter.limit)
  } else {
    toast.error(getErrorMsg(data.message))
  }
}

// Get current transaction
function getCurrentTransactionDetail(data: any) {
  currentUserDetail.value = data
}

// Pagination
async function onPageChanged(page: number) {
  filter.page = page
  await getListTransaction()
}


onMounted(async () => {
  await getListTransaction()
})

</script>