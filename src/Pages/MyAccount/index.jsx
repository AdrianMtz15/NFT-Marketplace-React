
import { MainLayout } from "../../Components/MainLayout"
import profileImg from '../../assets/img/profile-img.png'

function MyAccount() {

  return (
    <MainLayout>
      <section>
        <article>
          <img src={profileImg} alt="profile-img" />
        </article>

        <article>
          <h1>Sam Lee</h1>
          <p></p>
        </article>

      </section>
    </MainLayout>
  )
}

export { MyAccount }

