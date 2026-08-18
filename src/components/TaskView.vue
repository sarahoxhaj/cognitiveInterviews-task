<template>
    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col h-min-screen overflow-hidden dark:text-white">
        <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen">
            <div class="mt-20">
                <div class="flex flex-row items-start justify-center gap-x-10">

                    <div class="shrink-0">
                        <img src="@/assets/1.png" alt="Image 1" class="size-[580px] mt-10">
                        <!-- <img src="@/assets/2.png" alt="Image 2" class="size-[580px] mt-10"> -->
                        <!-- <img src="@/assets/3.png" alt="Image 3" class="w-[750px] mt-20 ml-5"> -->
                    </div>

                    <div class="max-w-2xl mr-5">
                        <!-- <p class="text-gray-900 dark:text-white mb-5">
                            Below are three tasks that ask you to read specific information from the given
                            visualization.
                        </p><br> -->
                        <!-- <p> THESE ARE FOR THE FIRST VIS </p> -->
                        <div class="text-left">
                            <p><b>1.</b> According to the chart, approximately what percentage of 15- to 24-year-olds in
                                Germany
                                choose “Education” as the most important factor in determining success?</p>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="A1" class="mr-2 ">
                                About 10%
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="B1" class="mr-2 ">
                                About 50%
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="C1" class="mr-2 ">
                                About 70%
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="D1" class="mr-2">
                                About 25%
                            </label>
                        </div>
                        <div class="text-left mt-5">
                            <p><b>2.</b> Countries in this chart are sorted from the richest to the poorest (top to
                                bottom) by
                                income per capita. Looking specifically at “Family wealth or connections” column, which
                                statement best describes what the data shows?</p>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="A2" class="mr-2 ">
                                Richer countries' youth are clearly more likely to cite family wealth/connections than
                                poorer countries.
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="B2" class="mr-2 ">
                                Poorer countries' youth are clearly more likely to cite family wealth/connections than
                                richer countries.
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="C2" class="mr-2 ">
                                There is no clear, consistent pattern between a country's wealth and how often its youth
                                cite family wealth/connections.
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="D2" class="mr-2">
                                Every country shows roughly the same percentage for family wealth/connections.
                            </label>
                        </div>
                        <div class="text-left mt-10">
                            <p><b>3.</b> What would you say is the main takeaway from this chart, if anything?</p>
                            <textarea id="message" rows="1" v-model="visMessage"
                                class="mt-2 required dark:text-black rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
                                placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <!-- <p> HERE FINISHES THE FIRST VIS </p> -->




                        <!-- <p> THESE ARE FOR THE SECOND VIS </p> -->
                        <!-- <div class="text-left">
                            <p><b>1.</b> Looking at the 2023 line, which month shows the most unusual or unexpected
                                change compared to the pattern of the months right before and after it?</p>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="A1" class="mr-2 ">
                                March
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="B1" class="mr-2 ">
                                July
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="C1" class="mr-2 ">
                                September
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="D1" class="mr-2">
                                December
                            </label>
                        </div>
                        <div class="text-left mt-5">
                            <p><b>2.</b> Looking only at the 2023 line, what is the approximate range between its lowest
                                and highest monthly values over the course of the year?</p>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="A2" class="mr-2 ">
                                About 0.2°C
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="B2" class="mr-2 ">
                                About 0.6°C
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="C2" class="mr-2 ">
                                About 1.0°C
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="D2" class="mr-2">
                                About 1.6°C
                            </label>
                        </div>
                        <div class="text-left mt-10">
                            <p><b>3.</b> What would you say is the main takeaway from this chart, if anything?</p>
                            <textarea id="message" rows="1" v-model="visMessage"
                                class="mt-2 required rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
                                placeholder="Write your thoughts here..."></textarea>
                        </div> -->
                        <!-- <p> HERE FINISHES THE SECOND VIS </p> -->




                        <!-- <p> THESE ARE FOR THE THIRD VIS </p> -->
                        <!-- <div class="text-left">
                            <p><b>1.</b> Which of the following best describes the dominant climate risk pattern across
                                the Southwest region of the U.S.?</p>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="A1" class="mr-2 ">
                                Mostly water stress risk, with pockets of wildfire risk
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="B1" class="mr-2 ">
                                Mostly hurricanes risk, with pockets of extreme rainfall
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="C1" class="mr-2 ">
                                Mostly water stress risk, with pockets of sea level rise risk
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q1" value="D1" class="mr-2">
                                Mostly extreme rainfall risk, with pockets of wildfire risk
                            </label>
                        </div>
                        <div class="text-left mt-5">
                            <p><b>2.</b> Looking at the map's overall color patterns, which of the following risk
                                categories appears in the fewest, most scattered, isolated patches rather than large
                                connected areas?</p>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="A2" class="mr-2 ">
                                Water stress risk
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="B2" class="mr-2 ">
                                Extreme heat risk
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="C2" class="mr-2 ">
                                Sea level rise risk
                            </label>
                            <label class="flex items-center dark:text-white mt-2">
                                <input type="radio" name="q2" value="D2" class="mr-2">
                                Extreme rainfall risk
                            </label>
                        </div>
                        <div class="text-left mt-10">
                            <p><b>3.</b> What would you say is the main takeaway from this chart, if anything?</p>
                            <textarea id="message" rows="1" v-model="visMessage"
                                class="mt-2 required rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
                                placeholder="Write your thoughts here..."></textarea>
                        </div> -->
                        <!-- <p> HERE FINISHES THE THIRD VIS </p> -->




                        <div class="mt-5 mb-5">
                            <button @click="nextStep" type="submit"
                                class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TaskView',
    data() {
        return {
            step: 0,
            userID: null,
            visMessage: "",
        };
    },
    mounted() {
        this.userID = sessionStorage.getItem("userID");

        if (!this.userID) {
            alert("User ID not found. Please fill out the background information first.");
            this.$router.push('/BackgroundView');
        }
    },
    methods: {
        nextStep() {
            const q1Selected = document.querySelector('input[name="q1"][value^="A1"]:checked, input[name="q1"][value^="B1"]:checked, input[name="q1"][value^="C1"]:checked, input[name="q1"][value^="D1"]:checked');
            const q2Selected = document.querySelector('input[name="q2"][value^="A2"]:checked, input[name="q2"][value^="B2"]:checked, input[name="q2"][value^="C2"]:checked, input[name="q2"][value^="D2"]:checked');

            if (!q1Selected) {
                alert("Please answer question 1 before continuing.");
                return;
            }

            if (!q2Selected) {
                alert("Please answer question 2 before continuing.");
                return;
            }

            if (!this.visMessage.trim()) {
                alert("Please answer question 3 before continuing.");
                return;
            }

            sessionStorage.setItem("q1Answer", q1Selected.value);
            sessionStorage.setItem("q2Answer", q2Selected.value);
            sessionStorage.setItem("q3Answer", this.visMessage);

            this.$router.push('/ItemValidation'); // update to your actual next route
        }
    }
}
</script>