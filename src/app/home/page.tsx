import Image from "next/image";
import cowImage from "@public/images/cow.png";
import styles from "./page.module.css";
import { Skeleton } from "@/components/skeleton";

export default function HomePage() {
    return (
        <Skeleton header={"MUKKEY"}>

            <div className={styles.main}>
                <Image src={cowImage} alt="Cow" width={500} />
                <p>MUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEYMUKKEY MUKKEY MUKKEY</p>
            </div>
        </Skeleton>
);
}
