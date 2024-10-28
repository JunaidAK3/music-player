'use client';

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { MdReplay } from "react-icons/md";           // replay icon import 
import { MdArrowBackIosNew } from "react-icons/md";  // backward icon import
import { MdPlayArrow } from "react-icons/md";        // play icon import
import { IoMdPause } from "react-icons/io";          // pause icon import
import { MdArrowForwardIos } from "react-icons/md";  // forward icon import
import { BiSolidVolumeFull } from "react-icons/bi";  // volume icon import
import { IoSearchSharp } from "react-icons/io5";     // seach icon import


type Song = {
    musicName: string;
    url: string;
    image: string;
    timeDuration: string;
};

export default function Home() {
    // UseMemo to initialize song array with details for each song (name, URL, image, duration)
    const arr:Song[] = useMemo(() =>[
        { musicName: "Suzume No Toji ari Nanoka Hara", url: "./song/Suzume No Tojimari Nanoka Hara Full Song Hindi Cover.mp3", image: "/songimg/Suzume_No_Toji_ari_Nanoka_Hara.jpg", timeDuration: "04:03" },
        { musicName: "Enemy", url: "./song/EnemyAMVAnime Mix.mp3", image: "/songimg/enemy.jpg", timeDuration:  "03:02" },
        { musicName: "Sultan", url: "./song/SULTAN ( DEMON SLAYER AMV ).mp3", image: "/songimg/sultan.jpeg", timeDuration:  " 03:48" },
        { musicName: "Mere Samne Wali Khidki Mein", url: "./song/Mere Samne Wali Khidki Mein - Padosan - Saira Banu, Sunil Dutt & Kishore Kumar - Old Hindi Songs.mp3", image: "/songimg/mere_samne_wali_khidki_mein.jpeg", timeDuration:  " 02:52" },
        { musicName: "Sanju", url: "./song/Sanju_ KAR HAR MAIDAAN FATEH Full Video Song _ Ranbir Kapoor _ Rajkumar Hirani.mp3", image: "/songimg/Sanju.jpeg", timeDuration:  " 03:31" },
        { musicName: "Sultan", url: "./song/Sultan Song.mp3", image: "/songimg/Sultun.jpeg", timeDuration:  " 04:12" },
        { musicName: "Tu Mere Agal Bagal Hai", url: "./song/Tu Mere Agal Bagal Hai (Jhankar).mp3", image: "/songimg/phata_poster_nikhla_hero.jpg", timeDuration:  " 04:23 " },
        { musicName: "Suzume No Toji ari Nanoka Hara", url: "./song/Suzume No Tojimari Nanoka Hara Full Song Hindi Cover.mp3", image: "/songimg/Suzume_No_Toji_ari_Nanoka_Hara.jpg", timeDuration: "04:03" },
        { musicName: "Enemy", url: "./song/EnemyAMVAnime Mix.mp3", image: "/songimg/enemy.jpg", timeDuration:  "03:02" },
        { musicName: "Sultan", url: "./song/SULTAN ( DEMON SLAYER AMV ).mp3", image: "/songimg/sultan.jpeg", timeDuration:  " 03:48" },
        { musicName: "Mere Samne Wali Khidki Mein", url: "./song/Mere Samne Wali Khidki Mein - Padosan - Saira Banu, Sunil Dutt & Kishore Kumar - Old Hindi Songs.mp3", image: "/songimg/mere_samne_wali_khidki_mein.jpeg", timeDuration:  " 02:52" },
        { musicName: "Sanju", url: "./song/Sanju_ KAR HAR MAIDAAN FATEH Full Video Song _ Ranbir Kapoor _ Rajkumar Hirani.mp3", image: "/songimg/Sanju.jpeg", timeDuration:  " 03:31" },
        { musicName: "Sultan", url: "./song/Sultan Song.mp3", image: "/songimg/Sultun.jpeg", timeDuration:  " 04:12" },
        { musicName: "Tu Mere Agal Bagal Hai", url: "./song/Tu Mere Agal Bagal Hai (Jhankar).mp3", image: "/songimg/phata_poster_nikhla_hero.jpg", timeDuration:  " 04:23 " },
        { musicName: "Suzume No Toji ari Nanoka Hara", url: "./song/Suzume No Tojimari Nanoka Hara Full Song Hindi Cover.mp3", image: "/songimg/Suzume_No_Toji_ari_Nanoka_Hara.jpg", timeDuration: "04:03" },
        { musicName: "Enemy", url: "./song/EnemyAMVAnime Mix.mp3", image: "/songimg/enemy.jpg", timeDuration:  "03:02" },
        { musicName: "Sultan", url: "./song/SULTAN ( DEMON SLAYER AMV ).mp3", image: "/songimg/sultan.jpeg", timeDuration:  " 03:48" },
        { musicName: "Mere Samne Wali Khidki Mein", url: "./song/Mere Samne Wali Khidki Mein - Padosan - Saira Banu, Sunil Dutt & Kishore Kumar - Old Hindi Songs.mp3", image: "/songimg/mere_samne_wali_khidki_mein.jpeg", timeDuration:  " 02:52" },
        { musicName: "Sanju", url: "./song/Sanju_ KAR HAR MAIDAAN FATEH Full Video Song _ Ranbir Kapoor _ Rajkumar Hirani.mp3", image: "/songimg/Sanju.jpeg", timeDuration:  " 03:31" },
        { musicName: "Sultan", url: "./song/Sultan Song.mp3", image: "/songimg/Sultun.jpeg", timeDuration:  " 04:12" },
        { musicName: "Tu Mere Agal Bagal Hai", url: "./song/Tu Mere Agal Bagal Hai (Jhankar).mp3", image: "/songimg/phata_poster_nikhla_hero.jpg", timeDuration:  " 04:23 " },
        { musicName: "Suzume No Toji ari Nanoka Hara", url: "./song/Suzume No Tojimari Nanoka Hara Full Song Hindi Cover.mp3", image: "/songimg/Suzume_No_Toji_ari_Nanoka_Hara.jpg", timeDuration: "04:03" },
        { musicName: "Enemy", url: "./song/EnemyAMVAnime Mix.mp3", image: "/songimg/enemy.jpg", timeDuration:  "03:02" },
        { musicName: "Sultan", url: "./song/SULTAN ( DEMON SLAYER AMV ).mp3", image: "/songimg/sultan.jpeg", timeDuration:  " 03:48" },
        { musicName: "Mere Samne Wali Khidki Mein", url: "./song/Mere Samne Wali Khidki Mein - Padosan - Saira Banu, Sunil Dutt & Kishore Kumar - Old Hindi Songs.mp3", image: "/songimg/mere_samne_wali_khidki_mein.jpeg", timeDuration:  " 02:52" },
        { musicName: "Sanju", url: "./song/Sanju_ KAR HAR MAIDAAN FATEH Full Video Song _ Ranbir Kapoor _ Rajkumar Hirani.mp3", image: "/songimg/Sanju.jpeg", timeDuration:  " 03:31" },
        { musicName: "Sultan", url: "./song/Sultan Song.mp3", image: "/songimg/Sultun.jpeg", timeDuration:  " 04:12" },
        { musicName: "Tu Mere Agal Bagal Hai", url: "./song/Tu Mere Agal Bagal Hai (Jhankar).mp3", image: "/songimg/phata_poster_nikhla_hero.jpg", timeDuration:  " 04:23 " },
        { musicName: "Suzume No Toji ari Nanoka Hara", url: "./song/Suzume No Tojimari Nanoka Hara Full Song Hindi Cover.mp3", image: "/songimg/Suzume_No_Toji_ari_Nanoka_Hara.jpg", timeDuration: "04:03" },
        { musicName: "Enemy", url: "./song/EnemyAMVAnime Mix.mp3", image: "/songimg/enemy.jpg", timeDuration:  "03:02" },
        { musicName: "Sultan", url: "./song/SULTAN ( DEMON SLAYER AMV ).mp3", image: "/songimg/sultan.jpeg", timeDuration:  " 03:48" },
        { musicName: "Mere Samne Wali Khidki Mein", url: "./song/Mere Samne Wali Khidki Mein - Padosan - Saira Banu, Sunil Dutt & Kishore Kumar - Old Hindi Songs.mp3", image: "/songimg/mere_samne_wali_khidki_mein.jpeg", timeDuration:  " 02:52" },
        { musicName: "Sanju", url: "./song/Sanju_ KAR HAR MAIDAAN FATEH Full Video Song _ Ranbir Kapoor _ Rajkumar Hirani.mp3", image: "/songimg/Sanju.jpeg", timeDuration:  " 03:31" },
        { musicName: "Sultan", url: "./song/Sultan Song.mp3", image: "/songimg/Sultun.jpeg", timeDuration:  " 04:12" },
        { musicName: "Tu Mere Agal Bagal Hai", url: "./song/Tu Mere Agal Bagal Hai (Jhankar).mp3", image: "/songimg/phata_poster_nikhla_hero.jpg", timeDuration:  " 04:23 " },
        { musicName: "Suzume No Toji ari Nanoka Hara", url: "./song/Suzume No Tojimari Nanoka Hara Full Song Hindi Cover.mp3", image: "/songimg/Suzume_No_Toji_ari_Nanoka_Hara.jpg", timeDuration: "04:03" },
        { musicName: "Enemy", url: "./song/EnemyAMVAnime Mix.mp3", image: "/songimg/enemy.jpg", timeDuration:  "03:02" },
        { musicName: "Sultan", url: "./song/SULTAN ( DEMON SLAYER AMV ).mp3", image: "/songimg/sultan.jpeg", timeDuration:  " 03:48" },
        { musicName: "Mere Samne Wali Khidki Mein", url: "./song/Mere Samne Wali Khidki Mein - Padosan - Saira Banu, Sunil Dutt & Kishore Kumar - Old Hindi Songs.mp3", image: "/songimg/mere_samne_wali_khidki_mein.jpeg", timeDuration:  " 02:52" },
        { musicName: "Sanju", url: "./song/Sanju_ KAR HAR MAIDAAN FATEH Full Video Song _ Ranbir Kapoor _ Rajkumar Hirani.mp3", image: "/songimg/Sanju.jpeg", timeDuration:  " 03:31" },
        { musicName: "Sultan", url: "./song/Sultan Song.mp3", image: "/songimg/Sultun.jpeg", timeDuration:  " 04:12" },
        { musicName: "Tu Mere Agal Bagal Hai", url: "./song/Tu Mere Agal Bagal Hai (Jhankar).mp3", image: "/songimg/phata_poster_nikhla_hero.jpg", timeDuration:  " 04:23 " }
    ],[]);

    // States for song selection, play/pause, repeat, etc.
    const [selectedSong, setSelectedSong] = useState<number>(0);  // state for selected song / select song
    const [isPlaying, setIsPlaying] = useState<boolean>(false);  // state for Playing
    const [isRepeat, setIsRepeat] = useState<boolean>(false);  // state for repeat
    const [currentTime, setCurrentTime] = useState<number>(0);  // state for current time
    const [duration, setDuration] = useState<number>(0);  // state for duration
    const [volume, setVolume] = useState<number>(1);  // state for volume
    const [searchTerm, setSearchTerm] = useState<string>("");  // state for search term
    const [filteredSongs, setFilteredSongs] = useState<Song[]>(arr);  // State for filtered songs

    // Ref to access audio element
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Effect to load selected song and start playing if isPlaying is true
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.src = arr[selectedSong].url;
            const updateDuration = () => setDuration(audio.duration);
            audio.addEventListener('loadedmetadata', updateDuration);
            
            if (isPlaying) audio.play();
            
            return () => audio.removeEventListener('loadedmetadata', updateDuration);
        }
    }, [selectedSong,isPlaying,arr]);

    // Effect to update currentTime when audio is playing
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateTime = () => setCurrentTime(audio.currentTime);
            audio.addEventListener('timeupdate', updateTime);
            return () => audio.removeEventListener('timeupdate', updateTime);
        }

    }, [isPlaying]);

    // Filter songs based on search term
    useEffect(() => {
        setFilteredSongs(
            arr.filter(song =>
                song.musicName.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, arr]);

    // Toggle play and pause
    const togglePlayPause = ():void => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Select a song from the list
    const handleSongClick = (index:number):void => {
        setSelectedSong(index);
        setIsPlaying(true);
    };

    // Handle search input
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setSearchTerm(event.target.value);
    };

    // Play next song
    const nextSong = ():void => {
        if (selectedSong < arr.length - 1) {
            setSelectedSong((prev) => prev + 1);
            setIsPlaying(true);
        }
    };

    // Play previous song
    const prevSong = ():void => {
        if (selectedSong > 0) {
            setSelectedSong((prev) => prev - 1);
            setIsPlaying(true);
        }
    };

    // Toggle repeat
    const handleRepeat = ():void => {
        setIsRepeat(!isRepeat);
    };

    // Handle song end event (play next or repeat current)
    const handleSongEnd = ():void => {
        if (isRepeat) {
            const audio = audioRef.current;
            if (audio) {
                audio.currentTime = 0;
                audio.play();
            }
        } else {
            nextSong();
        }
    };

    // Seek to specific time
    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>):void => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = parseFloat(event.target.value);
            setCurrentTime(parseFloat(event.target.value));
        }
    };
 
    // Change volume
    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = parseFloat(event.target.value);
            setVolume(parseFloat(event.target.value));
        }
    };

    return (

        <div id="main" className="h-[85vh] w-[100vw] bg-[#B5E7FF] flex items-center justify-center">
            <div id="leftS" className="h-[80vh] w-[60vw] bg-[#29637B] flex flex-col items-center justify-center rounded-bl-[50px] rounded-tl-[50px]">
                <div id="leftS1" className="h-[68vh] w-[63vw] flex items-center justify-center">
                    <Image src="/img/Untitled2.png" alt="Image Loading" objectFit="cover" height={0} width={685} className="absolute" />

                    <div id="po" className="h-[350px] w-[350px] mr-[168px] mb-[20px] bg-black absolute rounded-full flex items-center justify-center" style={{animation: '20s rotat linear infinite'}}>
                        <div 
                            id="poster" 
                            style={{ backgroundImage: `url(${arr[selectedSong].image})` }} 
                            className=" bg-center bg-cover border-white-900 border-[2px] h-[180px] w-[180px] bg-red-600 rounded-full flex items-center justify-center"
                            >
                            <div className="h-[20px] w-[20px] bg-white rounded-full">
                            </div>
                        </div>
                    </div>

                    <Image src="/img/Untitled1.png" alt="Image Londing" objectFit="cover" height={0} width={685}  className="absolute mt-[16px] ml-[3px]"/> 

                </div>

                <div id="leftS2" className="h-[12vh] w-[60vw] bg-[#0AA2E8] flex flex-col items-center justify-center  rounded-bl-[50px]">
                    <div id="leftS2a" className="w-[300px] flex flex-col items-center justify-center">
                        <div id="time" className="w-[300px] text-[11px] font-semibold flex items-center justify-end">
                            {new Date(currentTime * 1000).toISOString().substr(14, 5)} / {new Date(duration * 1000).toISOString().substr(14, 5)}
                        </div>

                        <input
                            type="range"
                            min="0"
                            max={audioRef.current?.duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-[300px]"
                        />
                    </div>

                    <div id="leftS2b" className="w-[300px] h-[50px] flex gap-[5px] items-center pl-[53px]">

                        <div id="replay"                       className="playCD2bButton w-[25px] h-[25px] text-[20px] rounded-[50%] bg-[#68C6F2] flex items-center justify-center" onClick={handleRepeat} style={{ opacity: isRepeat ? 1 : 0.6 }}>
                            <MdReplay className="active:scale-[0.9]"/>
                        </div>

                        <div id="backward" 
                        className="playCD2bButton w-[35px] h-[35px] text-[23px] rounded-[50%] bg-[#68C6F2] flex items-center justify-center" onClick={prevSong} style={{ opacity: selectedSong === 0 ? 0.6 : 1 }}>
                            <MdArrowBackIosNew className="active:scale-[0.9]"/>
                        </div>

                        <div id="play/pause" 
                        className="playCD2bButton w-[35px] h-[35px] text-[23px] rounded-[50%] bg-[#68C6F2] flex items-center justify-center" onClick={togglePlayPause}>
                            {isPlaying ? <IoMdPause /> : <MdPlayArrow className="active:scale-[0.9]"/>}
                        </div>

                        <div id="forward"
                        className="playCD2bButton w-[35px] h-[35px] text-[23px] rounded-[50%] bg-[#68C6F2] flex items-center justify-center" onClick={nextSong} style={{ opacity: selectedSong === arr.length - 1 ? 0.6 : 1 }}>
                            <MdArrowForwardIos className="active:scale-[0.9]"/>
                        </div>

                        <div id="volmeControler"
                        className="playCD2bButton w-[83px] h-[25px] text-[20px] rounded-full bg-[#68C6F2] flex justify-center items-center gap-[3px]">
                            <BiSolidVolumeFull />

                            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="w-[55px]" />
                        </div>

                    </div>
                </div>
            </div>

            <div id="rightS" className="h-[80vh] w-[30vw] bg-[#D0DEE4]">

                {/* header nav  */}
                <div className="h-[15vh] w-[30vw] pl-[8px] bg-[#0AA2E8] flex items-center justify-between">

                    {/* left side heading */}
                    <h3 className="w-[10vw] font-bold text-[24px] mt-[70px]"><b>ALL SONG</b></h3>

                    {/* rigth side option */}
                    <div className="h-[35px] w-[20vw] pr-[10px] gap-[7px] flex items-center justify-between">

                        {/* search bar */}
                        <div className="h-[32px] bg-[#f6f6f6] p-[11px] flex items-center rounded-[28px]">
                            <IoSearchSharp />

                            <input type="search" placeholder="Search" value={searchTerm} onChange={handleSearch} className="h-[27px] ml-[8px] text-[#333333] outline-none rounded-none bg-transparent flex items-center" />
                        </div>

                        {/* lyric option show music lyric  */}
                        <div className="h-[30px] w-[50px] bg-[#68C6F2] rounded-[20px] flex items-center justify-center active:scale-[0.9]" onMouseEnter={()=>{alert("Hello , \n Coming Soon...")}}>
                            <b>Lyric</b>
                        </div>
          
                    </div>
                </div>

                {/* play list */}
                <div id = "ListToSong" className="h-[65vh] w-[30vw] overflow-y-scroll">
                    {filteredSongs.map((song, index) => (
                        <div key={index} 
                        onClick={() => {handleSongClick(index)}} 
                        className="songCard bg-[#D0DEE4] flex items-center justify-between border-t-[1.5px] border-[#0AA2E8] py-[10px] px-[10px] hover:bg-[#70C5E9] last:border-b-[1.5px] last:border-black-500">
                           <div className="flex items-center justify-between">
                                <Image src={song.image} alt={song.musicName} width={55} height={55} className="h-[55px] w-[55px] mr-[15px] bg-center bg-cover"/>
                                <h5 className="text-[20px]">{song.musicName}</h5>
                            </div>
                            <h5 className="text-[12px]">{song.timeDuration}</h5>
                        </div>
                    ))}
         
                </div>

            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} onEnded={handleSongEnd} hidden></audio>
    
        </div>

    );
}

