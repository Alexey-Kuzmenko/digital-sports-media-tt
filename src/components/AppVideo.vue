<template>
    <section class="video">
        <div class="video__head">
            <h2 class="video__head-title">
                <a href="#">Відео</a>
                <img src="../assets/icons/camera_icon.svg" alt="Camera icon">
            </h2>
        </div>
        <div class="video__preview">
            <a href="#">
                <img src="../assets/images/video_cover.png" alt="Video cover" class="video__preview-cover">
            </a>
        </div>
    </section>
</template>

<style lang="scss">
@use '../scss/utilities/placeholders';

.video {
    margin-top: 40px;
    padding-bottom: 5px;

    &__head {
        &-title {
            display: flex;
            align-items: baseline;

            margin-bottom: 16px;

            & > a {
                margin-right: 7px;
                margin-bottom: 0;

                text-decoration: none;

                @extend %h2-title;
            }
        }
    }

    &__preview-cover {
        margin: 0 auto;
    }
}
</style>