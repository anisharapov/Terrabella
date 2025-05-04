import { Hero } from "../components/hero"
import { Carroussel } from "../components/carroussel"
import { AboutUs } from "../components/aboutUs"
import { AboutKyrgyzstan } from "../components/aboutKyrgyzstan"
import { WhyChooseThisDestination } from "../components/whyChooseThisDestination"
import { HomeButton } from "../components/homeButton"
import { VideoKyrgyzstan } from "../components/videoKyrgyzstan"
import { Location } from "../components/location"

export const HomePage = () => {
    return(
        <>
            <Hero/>
            <Carroussel/>
            <AboutUs/>
            <AboutKyrgyzstan/>
            <WhyChooseThisDestination/>
            <HomeButton/>
            <VideoKyrgyzstan/>
            <Location/>
        </>
    )
}