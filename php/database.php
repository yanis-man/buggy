<?php
    class Database
    {
        private $username = "root";
        private $password = "root";
        private $dbname = "buggy";

        private $conn = NULL;

        private $hash_algo = "ripemd160";

        function __construct()
        {
            try {
                $this->conn = new PDO("mysql:host=localhost;dbname=".$this->dbname, $this->username, $this->password);
            } catch (PDOException $e) {
                print "Erreur !: " . $e->getMessage() . "<br/>";
                die();
            }

        }

        function push($query, $data = array())
        {
            if(!$data)
            {
                $query = $this->conn->query($query);
            }
            $statement = $this->conn->prepare($query);
            $query = $statement->execute($data);
        }
        function pull($query, $data = array())
        {
            $statement = $this->conn->prepare($query);
            $query = $statement->execute($data);
            $result = $statement->fetchAll();
            if(!$result){return array();}
            return $result;
        }

        function check_double_entry($query, $data = array())
        {
            if($data)
            {
                $result = $this->pull($query, $data);
                if($result)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        function sanitize($to_sanitize)
        {
            $sanitized = array();
            foreach($to_sanitize as $key => $val)
            {
                $sanitized[$key] = htmlspecialchars_decode(trim($val));
            }
            return $sanitized;
        }

        function hasher($to_hash)
        {
            return hash($this->hash_algo, $to_hash);
        }

        public function __destruct()
        {
            
        }

    }

?>