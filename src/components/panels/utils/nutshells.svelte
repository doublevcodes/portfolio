<script lang="ts">

    import Fa from 'svelte-fa';
    import { faSignature, faBirthdayCake, faMapPin, faCode, faMusic, faRandom } from '@fortawesome/free-solid-svg-icons'


    export let key: string = '';
    export let value: string = '';

    const iconMap = {
        'name': faSignature,
        'age': faBirthdayCake,
        'location': faMapPin,
        'code': faCode,
        'music': faMusic,
        'random': faRandom
    }

    const colourMap = {
        'name': 'text-red',
        'age': 'text-orange',
        'location': 'text-yellow',
        'code': 'text-green',
        'music': 'text-blue',
        'random': 'text-purple'
    }
</script>

<div class="flex bg-opacity-70 hover:bg-opacity-100 rounded-medium duration-300 items-center pt-3 px-3">
    <Fa icon={iconMap[key]} class="pr-3 border-r-2 {colourMap[key]} w-8"/>
    <p class="pl-3">{value}</p>
</div>