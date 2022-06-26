<script>
    import RegisterButton from '$lib/components/Button/RegisterButton.svelte'
import Menu from '$lib/components/Menu/Menu.svelte';
let siteTitle = "SustainableRIVERS";
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{siteTitle}</title>
    <link rel="icon" href="./logo.svg">
</head>
<body>
    <div class="w-full h-[100px] bg-white">
        <div class="flex mx-auto pt-8 px-16 justify-between">
            <img src="/logo.svg" alt="" />
            <Menu />
            <RegisterButton />
        </div>
    </div>
</body>
</html>