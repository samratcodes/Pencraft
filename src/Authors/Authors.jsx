import React from 'react'
import AuthorCard from './AuthorCard'
import './Author.css'
const Authors = () => {
  const authors = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Author | Freelance Write | Edito',
      likes: 200,
      category: 'Poetry',
      writingsCount: 120,
      imageUrl: 'https://images.pexels.com/photos/7811599/pexels-photo-7811599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'Jane is a renowned poet and essayist with numerous accolades.',
      likes: 150,
      category: 'story',
      writingsCount: 80,
      imageUrl: 'https://images.pexels.com/photos/11853922/pexels-photo-11853922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Samuel Green',
      bio: 'Samuel writes about technology and its impact on society.',
      likes: 300,
      category:'short story',
      writingsCount: 95,
      imageUrl: 'https://images.pexels.com/photos/15530746/pexels-photo-15530746/free-photo-of-man-filling-containers-with-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'Emily Johnson',
      bio: 'Emily is a freelance writer and novelist.',
      likes: 250,
      category:'Novel', 
      writingsCount: 70,
      imageUrl: 'https://images.pexels.com/photos/16766416/pexels-photo-16766416/free-photo-of-elderly-man-watering-potted-plants-on-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      name: 'Michael Brown',
      bio: 'Michael focuses on health and wellness topics.',
      likes: 120,
      category: 'Poetry',
      writingsCount: 50,
      imageUrl: 'https://images.pexels.com/photos/15012852/pexels-photo-15012852/free-photo-of-red-toned-photo-of-a-bald-bearded-man-performing-being-imprisoned.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      name: 'Sophia Wilson',
      bio: 'Sophia is an editor and ghostwriter.',
      likes: 180,
      category: 'Poetry',
      writingsCount: 110,
      imageUrl: 'https://images.pexels.com/photos/17833428/pexels-photo-17833428/free-photo-of-shirtless-model-with-beard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 7,
      name: 'James Taylor',
      bio: 'James writes about travel and adventure.',
      likes: 275,
      category: 'Poetry',
      writingsCount: 65,
      imageUrl: 'https://example.com/jamestaylor.jpg'
    },
    {
      id: 8,
      name: 'Olivia Lee',
      bio: 'Olivia is a children’s book author.',
      likes: 90,
      category: 'Poetry',
      writingsCount: 40,
      imageUrl: 'https://example.com/olivialee.jpg'
    },
    {
      id: 9,
      name: 'David White',
      bio: 'David writes mystery and thriller novels.',
      likes: 220,
      category: 'Poetry',
      writingsCount: 85,
      imageUrl: 'https://example.com/davidwhite.jpg'
    },
    {
      id: 10,
      name: 'Charlotte Harris',
      bio: 'Charlotte is a food writer and critic.',
      likes: 130,
      category: 'Poetry',
      writingsCount: 55,
      imageUrl: 'https://example.com/charlotteharris.jpg'
    },
    {
      id: 11,
      name: 'Daniel King',
      bio: 'Daniel is a historian and academic writer.',
      likes: 210,
      category: 'Poetry',
      writingsCount: 100,
      imageUrl: 'https://example.com/danielking.jpg'
    },
    {
      id: 12,
      name: 'Grace Lewis',
      bio: 'Grace writes romance novels and short stories.',
      likes: 240,
      category: 'Poetry',
      writingsCount: 75,
      imageUrl: 'https://example.com/gracelewis.jpg'
    },
    {
      id: 13,
      name: 'Henry Walker',
      bio: 'Henry covers sports and athletic topics.',
      likes: 190,
      category: 'Poetry',
      writingsCount: 60,
      imageUrl: 'https://example.com/henrywalker.jpg'
    },
    {
      id: 14,
      name: 'Isabella Young',
      bio: 'Isabella is a fashion writer and blogger.',
      likes: 160,
      category: 'Poetry',
      writingsCount: 45,
      imageUrl: 'https://example.com/isabellayoung.jpg'
    },
    {
      id: 15,
      name: 'Joseph Hall',
      bio: 'Joseph focuses on science fiction and fantasy genres.',
      likes: 230,
      category: 'Poetry',
      writingsCount: 95,
      imageUrl: 'https://example.com/josephhall.jpg'
    },
    {
      id: 16,
      name: 'Amelia Allen',
      bio: 'Amelia is a journalist and news writer.',
      likes: 175,
      category: 'Poetry',
      writingsCount: 85,
      imageUrl: 'https://example.com/ameliaallen.jpg'
    },
    {
      id: 17,
      name: 'Alexander Wright',
      bio: 'Alexander is a biographer and memoir writer.',
      likes: 205,
      category: 'Poetry',
      writingsCount: 50,
      imageUrl: 'https://example.com/alexanderwright.jpg'
    },
    {
      id: 18,
      name: 'Mia Scott',
      bio: 'Mia writes about environmental issues.',
      likes: 195,
      category: 'Poetry',
      writingsCount: 65,
      imageUrl: 'https://example.com/miascott.jpg'
    },
    {
      id: 19,
      name: 'Liam Green',
      bio: 'Liam is a tech writer and reviewer.',
      likes: 145,
      category: 'Poetry',
      writingsCount: 40,
      imageUrl: 'https://example.com/liamgreen.jpg'
    },
    {
      id: 20,
      name: 'Evelyn Adams',
      bio: 'Evelyn is a cultural critic and essayist.',
      likes: 220,
      category: 'Poetry',
      writingsCount: 60,
      imageUrl: 'https://example.com/evelynadams.jpg'
    }
  ];
  
  return (
    <div className='authorsection'>
      
    <div className='authorss'>
    <div className='authortitle'>
    <i class="fa-solid fa-people-group"></i>
      <h1 className='author-title'>Authors</h1>
    </div>
    
    <div className='authors'>
 {authors.map(author => (
        <AuthorCard key={author.id} author={author} />
      ))}</div>
    </div>
    </div>
  )
}

export default Authors
