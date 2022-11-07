interface HomeProps{
  count: number
}
export default function Home(props: HomeProps) {

  return (
    <h1>Contagem {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://danilopacker-supreme-space-happiness-4jqp55v9j4ph7qr4-3333.preview.app.github.dev/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count
    }
  }
}