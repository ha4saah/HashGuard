import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export default function Navbar() {

  return (

    <header className="sticky top-0 z-50">

      <Container>

        <div
          className="
          mt-6
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          shadow-2xl

          px-6
          py-4

          flex
          items-center
          justify-between
          "
        >


          <Link
            to="/"
            className="
            text-xl
            font-bold
            tracking-tight
            "
          >
            HashGuard
          </Link>



          <div className="flex gap-3">


            <Link to="/verify">

              <Button variant="ghost">
                Verify
              </Button>

            </Link>
            <Link to="/compare">

<Button variant="ghost">
Compare
</Button>

</Link>
<Link to="/history">

<Button variant="ghost">
History
</Button>

</Link>



            <Button variant="ghost">
              GitHub
            </Button>



            <Button>
              Launch App
            </Button>


          </div>


        </div>


      </Container>


    </header>

  );

}