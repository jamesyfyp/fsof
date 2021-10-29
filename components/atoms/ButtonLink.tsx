import { Button } from "theme-ui"
import Link from "next/link"

interface ButtonLinkInt {
    link: string,
    text: string,
    buttonVariant: string,
} [ ]

interface ButtonLinkProps {
    buttons: ButtonLinkInt;
}


export const ButtonLink: React.FC<ButtonLinkProps> = ( {buttons} ) => {
    return(
        <Link href={buttons.link}>
            <a>  
                <Button variant={buttons.buttonVariant} >
                            {buttons.text}
                </Button>
            </a>     
        </Link>
    );
}