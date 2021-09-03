import { useRouter } from 'next/router';



function ActiveLink({ title, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? '#2A0944' : '#FEC260',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {title}
    </a>
  );
}

export default ActiveLink;