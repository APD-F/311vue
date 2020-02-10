<template>
    <div id="meeting-form">
        <form @submit.prevent="handleSubmit">
            <label>Meeting Subject</label>
            <input
                    ref="first"
                    v-model="meeting.subject"
                    type="text"
                    :class="{ 'has-error': submitting && invalidSubject}"
                    @focus="clearStatus"
                    @keypress="clearStatus"
            />
            <label>Meeting Date</label>
            <input
                    v-model="meeting.date"
                    type="date"
                    :class="{'has-error': submitting && invalidDate} "
                    @focus="clearStatus"
            />
            <label>Meeting Time</label>
            <input
                    v-model="meeting.time"
                    type="time"
                    :class="{'has-error': submitting && invalidTime}"
                     @focus="clearStatus"
             />
            <p v-if="error && submitting" class="error-message">
                ❗Please fill out all required fields
            </p>
            <p v-if="success" class="success-message">
                ✅ Meeting successfully added
            </p>

            <button>Add Meeting</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'meeting-form',
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                meeting: {
                    subject: '',
                    date: '',
                    time: '',
                },
            }
        },
            methods: {
                handleSubmit() {
                    this.submitting = true
                    this.clearStatus()

                    if (this.invalidSubject || this.invalidDate || this.invalidTime) {
                        this.error = true
                        return
                    }

                    this.$emit('add:meeting', this.meeting);
                    this.$refs.first.focus()
                    this.meeting = {
                        subject: '',
                        date: '',
                        time: '',
                    }
                    this.error = false
                    this.success = true
                    this.submitting = false
                },

                clearStatus() {
                    this.success = false
                    this.error = false
                }
            },
        computed: {
            invalidSubject() {
                return this.meeting.subject === ''
            },

            invalidDate() {
                return this.meeting.date === ''
            },
            invalidTime() {
                return this.meeting.time === ''
            },
        },
    }
</script>

<style scoped>
    form {
        margin-bottom: 2rem;
    }

    [class*='-message'] {
        font-weight: 500;
    }

    .error-message {
        color: #d33c40;
    }

    .success-message {
        color: #32a95d;
    }
</style>