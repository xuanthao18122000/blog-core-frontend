<template>
  <DashboardLayout>
    <main class="home-wrapper container py-5">
      <div>
        <h1 class="mb-5">Code Demo</h1>
        <div class="p-4 rounded-3 bg-dark shadow mb-4">
          <div>
            👉 [DEMO] - Example autocomplete search giống như Sublime Text sử dụng javascript
          </div>
          <p>Autocomplete search là một thuật toán rất phức tạp, và đỏi hòi nhiều thuật toán được áp dụng. Nếu bạn đã từng sử dụng Sublime Text để code thì ở đó bạn để ý rằng,
            đó là một hệ thống tìm kiếm thông minh, khi chúng ta tìm kiếm một vài ký tự thì hệ thống đã gợi ý cho bạn những từ khoá tìm kiếm cụ thể hơn.
          </p>
        </div>
        <div class="p-4 rounded-3 bg-dark shadow mb-4">
          <div>
            👉 [DEMO] - Example autocomplete search giống như Sublime Text sử dụng javascript
          </div>
          <p>Autocomplete search là một thuật toán rất phức tạp, và đỏi hòi nhiều thuật toán được áp dụng. Nếu bạn đã từng sử dụng Sublime Text để code thì ở đó bạn để ý rằng,
            đó là một hệ thống tìm kiếm thông minh, khi chúng ta tìm kiếm một vài ký tự thì hệ thống đã gợi ý cho bạn những từ khoá tìm kiếm cụ thể hơn.
          </p>
        </div><div class="p-4 rounded-3 bg-dark shadow mb-4">
          <div>
            👉 [DEMO] - Example autocomplete search giống như Sublime Text sử dụng javascript
          </div>
          <p>Autocomplete search là một thuật toán rất phức tạp, và đỏi hòi nhiều thuật toán được áp dụng. Nếu bạn đã từng sử dụng Sublime Text để code thì ở đó bạn để ý rằng,
            đó là một hệ thống tìm kiếm thông minh, khi chúng ta tìm kiếm một vài ký tự thì hệ thống đã gợi ý cho bạn những từ khoá tìm kiếm cụ thể hơn.
          </p>
        </div>
      </div>
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